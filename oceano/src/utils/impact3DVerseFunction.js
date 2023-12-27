import { getAllLabelPosition } from "./3DVerse";

export async function placeLight() {
    const labelPosition = await getAllLabelPosition()
    labelPosition.map((label) =>
        entityTemplate = new window.SDK3DVerse.EntityTemplate(),

        //window.SDK3DVerse.extensions.LabelDisplay.labelIndex = 200 a modifier par la variable qu on recuperera
        entityTemplate.attachComponent('label'),

        entityTemplate.entityTemplate.local_transform.position[0] = label[0],
        entityTemplate.entityTemplate.local_transform.position[1] = label[1],
        entityTemplate.entityTemplate.local_transform.position[2] = label[2],

        entityTemplate.instantiateEntity(),

    );
}