//------------------------------------------------------------------------------
export default class SDK3DVerse_ExtensionInterface
{
    //--------------------------------------------------------------------------
    constructor(sdk, extensionName)
    {
        this.sdk       = sdk;
        this.cameraAPI = sdk.engineAPI.cameraAPI;
        this.name      = extensionName;
    }

    //--------------------------------------------------------------------------
    onInit() {}

    //--------------------------------------------------------------------------
    dispose() {}
}
