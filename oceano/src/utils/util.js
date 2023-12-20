//----------------------------------------------------------------------------------------------
export default class Utils
{
    //----------------------------------------------------------------------------------------------
    // use setTimeout tp delay a task that may be async (returning a promise) or not.
    // wrap the setTimeout in a Promise that can be awaited.
    static asyncSetTimeout(task, delay)
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                let result;
                try
                {
                    result = task();
                }
                catch(error)
                {
                    // the task has thrown an error
                    return reject(error);
                }

                if(result && typeof result.then === 'function')
                {
                    // the result is a promise so we deal with it
                    return result.then(resolve).catch(reject);
                }

                // the result is not a promise so we can resolve it
                return resolve(result);
            }, delay);
        });
    }

    //----------------------------------------------------------------------------------------------
    static sleep(delay)
    {
        return new Promise(resolve => setTimeout(resolve, delay));
    }
}
