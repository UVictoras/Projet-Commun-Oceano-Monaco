//------------------------------------------------------------------------------
import SDK3DVerse_ExtensionInterface from './ExtensionInterface';
import { quat, vec3 } from 'gl-matrix';

//------------------------------------------------------------------------------
/**
 * Display the label of the scene with dom elements
 *
 * This extension **require** the following extension installed:
 * - SDK3DVerse_ViewportDomOverlay_Ext
 *
 * @module SDK3DVerse_LabelDisplay_Ext
 * @category Extensions
 */

//------------------------------------------------------------------------------
/**
 * @ignore
 */
export default class SDK3DVerse_LabelDisplay extends SDK3DVerse_ExtensionInterface
{
    //--------------------------------------------------------------------------
    /**
     * @hideconstructor
     */
    constructor(sdk)
    {
        super(sdk, 'LabelDisplay');

        this.labelEntities          = [];
        this.labelIndex             = 0;
        this.currentSelectedLabel   = null;
        this.displayLabels          = true;

        this.onLabelListUpdated     = (labelList) => {};
        this.onLabelSelected        = (selectedLabel) => {};
    }

    //--------------------------------------------------------------------------
    /**
     * @property {Boolean} displayState - Default to true, display state of the labels
     *
     * @method module:SDK3DVerse_LabelDisplay_Ext#installExtension
     */
    async onInit(settings = {})
    {
        console.log(`SDK3DVerse_LabelDisplay onInit`);

        const {
            displayState = true
        } = settings;

        this.displayLabels  = displayState;
        this.domRenderer    = this.sdk.domOverlayExt;

        this.listenEvents();
    }

    //------------------------------------------------------------------------------
    async listenEvents()
    {
        await this.sdk.onEditorConnected();
        const entities = await this.sdk.engineAPI.filterEntities(
        {
            mandatoryComponents : ['label', 'local_transform']
        });

        const sortedEntities = this.sortEntities(entities);

        for(const entity of sortedEntities)
        {
            this.createLabel(entity);
        }

        this.onLabelListUpdated(this.labelEntities);

        this.sdk.notifier.on('onEntityCreated', this.createEntity);
        this.sdk.notifier.on('onEntitiesUpdated', this.updateEntities);
        this.sdk.notifier.on('onEntityReparent', this.reparentEntity)
        this.sdk.notifier.on('onEntitiesDeleted', this.deleteEntities);
        this.sdk.notifier.on('onEntityVisibilityChanged', this.updateEntitiesVisibility);
    }

    //------------------------------------------------------------------------------
    dispose()
    {
        this.sdk.notifier.off('onEntityCreated', this.createEntity);
        this.sdk.notifier.off('onEntitiesUpdated', this.updateEntities);
        this.sdk.notifier.off('onEntityReparent', this.reparentEntity)
        this.sdk.notifier.off('onEntitiesDeleted', this.deleteEntities);
        this.sdk.notifier.off('onEntityVisibilityChanged', this.updateEntitiesVisibility);

        for(const entity of this.labelEntities)
        {
            this.removeLabelElement(entity);
        }
    }

    //------------------------------------------------------------------------------
    /**
     * Toggle the display state of the labels
     *
     * @method module:SDK3DVerse_LabelDisplay_Ext#toggleDisplay
     */
    toggleDisplay()
    {
        this.setDisplayState(!this.displayLabels);
    }

    //------------------------------------------------------------------------------
    /**
     * Set the display state of the labels
     *
     * @param {Boolean} state - Display state.
     *
     * @method module:SDK3DVerse_LabelDisplay_Ext#setDisplayState
     */
    setDisplayState(state)
    {
        if(this.displayLabels === state)
        {
            return;
        }

        this.displayLabels = state;
        if(this.displayLabels)
        {
            for(const entity of this.labelEntities)
            {
                if(entity.isVisible())
                {
                    entity.labelElement = this.createLabelElement(entity.labelIndex, entity);
                    this.onGlobalTransformUpdated(entity);
                }
            }
        }
        else
        {
            for(const entity of this.labelEntities)
            {
                this.removeLabelElement(entity);
            }
        }
    }

    //--------------------------------------------------------------------------
    createEntity = (entity) =>
    {
        if(entity.isAttached('label') && entity.isAttached('local_transform'))
        {
            this.createLabel(entity);
            this.onLabelListUpdated(this.labelEntities);
        }
    }

    //--------------------------------------------------------------------------
    updateEntities = (entities, propagater, updatedComponentByEUIDs) =>
    {
        let updateLocalTransform = false;
        for(const euid in updatedComponentByEUIDs)
        {
            const labels            = this.labelEntities.filter(e => e.getEUID() === euid);

            const componentList     = updatedComponentByEUIDs[euid];
            updateLocalTransform    |= componentList.includes('local_transform');

            if(labels.length === 0)
            {
                // No entity match with this updated euid, check if maybe a supported
                // component has been attached.
                if(componentList.includes('label'))
                {
                    const updatedEntities = entities.filter(e => e.getEUID() === euid);
                    for(const entity of updatedEntities)
                    {
                        this.createLabel(entity);
                        this.onLabelListUpdated(this.labelEntities);
                    }
                }
                continue;
            }

            if(this.displayLabels)
            {
                for(const label of labels)
                {
                    this.onEntityUpdated(label);
                }
            }
        }

        if(updateLocalTransform)
        {
            this.updateEntitiesLocalTransform(entities);
        }
    }

    //--------------------------------------------------------------------------
    onEntityUpdated(entity)
    {
        if(!entity.labelElement)
        {
            return;
        }

        const labelComponent    = entity.getComponent('label');
        const labelElement      = entity.labelElement;

        if(labelElement.renderedTitle === labelComponent.title)
        {
            return;
        }

const titleElement          = labelElement.domElement.children[1];
        titleElement.innerText      = labelComponent.title;

        labelElement.renderedTitle  = labelComponent.title;
        labelElement.propagateChangesToClones();
    }

    //--------------------------------------------------------------------------
    updateEntitiesLocalTransform(updatedEntities)
    {
        if(!this.displayLabels)
        {
            return;
        }

        for(const label of this.labelEntities)
        {
            let currentEntity = label;
            do
            {
                for(const i in updatedEntities)
                {
                    const entity = updatedEntities[i];
                    if(currentEntity.getID() === entity.getID())
                    {
                        this.onGlobalTransformUpdated(label);
                        break;
                    }
                }
            }
            while(currentEntity === currentEntity.getParent());
        }
    }

    //--------------------------------------------------------------------------
    reparentEntity = (movingEntity) =>
    {
        this.updateEntitiesLocalTransform([movingEntity]);
    }

    //--------------------------------------------------------------------------
    deleteEntities = (deletedEntityRTIDs) =>
    {
        for(var i in deletedEntityRTIDs)
        {
            const indexFound = this.labelEntities.findIndex((e)=>
            {
                return e.getID() === deletedEntityRTIDs[i];
            });

            if(indexFound !== -1)
            {
                const label = this.labelEntities[indexFound];
                if(this.sdk.webAPI.deletePointOfInterestThumbnail)
                {
                    this.sdk.webAPI.deletePointOfInterestThumbnail(label.getEUID());
                }

                if(this.displayLabels)
                {
                    this.removeLabelElement(label);
                }

                this.labelEntities.splice(indexFound, 1);
            }

            if(this.currentSelectedLabel && this.currentSelectedLabel.getID() === deletedEntityRTIDs[i])
            {
                this.onLabelSelected(null);
                this.currentSelectedLabel = null;
            }
        }

        this.onLabelListUpdated(this.labelEntities);
    }

    //--------------------------------------------------------------------------
    updateEntitiesVisibility = (entityRTID) =>
    {
        if(!this.displayLabels)
        {
            return;
        }

        const labelEntities = this.labelEntities.filter(e => this.isChildren(e, entityRTID));
        for(const entity of labelEntities)
        {
            const newVisibleState = entity.isVisible();

            if(newVisibleState && !entity.labelElement)
            {
                entity.labelElement = this.createLabelElement(entity.labelIndex, entity);
                this.onGlobalTransformUpdated(entity);
            }
            else if(!newVisibleState && entity.labelElement)
            {
                this.removeLabelElement(entity);
            }
        }
    }

    //--------------------------------------------------------------------------
    isChildren(label, entityRTID)
    {
        if(entityRTID === label.getID())
        {
            return true;
        }

        const ancestors = label.getAncestors();

        return ancestors.some(ancestors => ancestors.getID() === entityRTID);
    }

    //--------------------------------------------------------------------------
    onGlobalTransformUpdated(entity)
    {
        if(entity.labelElement)
        {
            entity.labelElement.position = entity.getGlobalTransform().position;
        }
    }

    //--------------------------------------------------------------------------
    sortEntities = (entities) =>
    {
        return entities.sort((a, b) =>
        {
            const aExternalValue = a.isRuntime() ? 1 : 0;
            const bExternalValue = b.isRuntime() ? 1 : 0;

            if(aExternalValue !== bExternalValue)
            {
                return aExternalValue - bExternalValue;
            }

            if(a.isAttached('lineage') && b.isAttached('lineage'))
            {
                const ordinalDifference = a.getComponent('lineage').ordinal - b.getComponent('lineage').ordinal;
                if(ordinalDifference)
                {
                    return ordinalDifference;
                }
            }

            return a.getEUID() < b.getEUID() ? -1 : 1;
        });
    }

    //------------------------------------------------------------------------------
    createLabel(entity)
    {
        entity.labelIndex   = ++this.labelIndex;

        if(this.displayLabels && entity.isVisible())
        {
            entity.labelElement = this.createLabelElement(entity.labelIndex, entity);
        }

        this.labelEntities.push(entity);
        this.onGlobalTransformUpdated(entity);
    }

    //------------------------------------------------------------------------------
    createLabelElement(innerText, entity)
    {
        var labelComponent          = entity.getComponent('label');

        var containerElement        = document.createElement('div');
        containerElement.className  = 'label-container';

        var labelElement            = document.createElement('div');
        labelElement.className      = 'label';
        labelElement.innerText      = '';

        containerElement.appendChild(labelElement);

        var newImg = document.createElement('img');
        newImg.src = './img/icon/waste.png';
        newImg.alt = 'Description of the image';
        newImg.classList.add('collect');

        containerElement.appendChild(newImg);

        var newParagraph = document.createElement('p');
        newParagraph.textContent = '128';
        newParagraph.classList.add('attendees');

        containerElement.appendChild(newParagraph);

        var newParagraphAtt = document.createElement('p');
        newParagraphAtt.textContent = 'participants';
        newParagraphAtt.classList.add('attendees-txt');

        containerElement.appendChild(newParagraphAtt);

        var titleElement            = document.createElement('div');
        titleElement.className      = 'label-title';
        titleElement.innerText      = labelComponent.title;
        
        containerElement.appendChild(titleElement);
        
        containerElement.onmousedown    = (e, viewport) => this.onLabelClicked(entity, viewport);

        const domElement                = this.domRenderer.createDomElement(containerElement);
        domElement.renderedTitle        = labelComponent.title;

        return domElement;
    }

    //------------------------------------------------------------------------------
    removeLabelElement(entity)
    {
        if(entity.labelElement)
        {
            this.domRenderer.releaseDomElement(entity.labelElement);
            entity.labelElement = null;
        }
    }

    //------------------------------------------------------------------------------
    selectPrevious()
    {
        if(!this.currentSelectedLabel)
        {
            this.onLabelClicked(this.labelEntities[this.labelEntities.length-1]);
            return;
        }

        var index = this.labelEntities.indexOf(this.currentSelectedLabel);
        if(--index === -1)
        {
            index = this.labelEntities.length-1;
        }
        this.onLabelClicked(this.labelEntities[index]);
    }

    //------------------------------------------------------------------------------
    selectNext()
    {
        if(!this.currentSelectedLabel)
        {
            this.onLabelClicked(this.labelEntities[0]);
            return;
        }

        var index = this.labelEntities.indexOf(this.currentSelectedLabel);
        if(++index === this.labelEntities.length)
        {
            index = 0;
        }
        this.onLabelClicked(this.labelEntities[index]);
    }

    //------------------------------------------------------------------------------
    onLabelClicked(label, viewport)
    {
        if(!viewport)
        {
            viewport = this.sdk.engineAPI.cameraAPI.currentViewportEnabled;
        }

        const labelComponent = label.getComponent('label');
        const cameraPosition = labelComponent.camera.slice(0, 3);
        const cameraOrientation = labelComponent.camera.slice(3, 7);

        const labelCameraTransform =
        {
            position    : vec3.fromValues(...cameraPosition),
            orientation : quat.fromValues(...cameraOrientation)
        };

        if(label.linker)
        {
            const globalMatrix    = label.linker.getGlobalMatrix();
            const globalTransform = label.linker.getGlobalTransform();

            vec3.transformMat4(labelCameraTransform.position, vec3.clone(labelCameraTransform.position), globalMatrix);
            quat.mul(labelCameraTransform.orientation, globalTransform.orientation, quat.clone(labelCameraTransform.orientation));
        }

        const eventProperties = {
            label,
            viewport,
            destination : {
                position    : Array.from(labelCameraTransform.position),
                orientation : Array.from(labelCameraTransform.orientation),
            }
        };

        this.sdk.notifier.emit('onLabelTravelBegins', eventProperties);

        this.sdk.engineAPI.cameraAPI.travel(
            viewport,
            eventProperties.destination.position,
            eventProperties.destination.orientation,
            labelComponent.speed
        ).then(() =>
        {
            this.sdk.notifier.emit('onLabelTravelEnds', eventProperties);
        });

        this.currentSelectedLabel = label;
        this.onLabelSelected(this.currentSelectedLabel);
    }

    //------------------------------------------------------------------------------
    overloadWebAPI()
    {
        this.sdk.webAPI.deletePointOfInterestThumbnail = async function(uuid)
        {
            await this.httpDelete('scene/deletePointOfInterestThumbnail',
            {
                token       : this.apiToken,
                sceneUUID   : this.sceneUUID,
                uuid        : uuid
            });
        };
    }
}
