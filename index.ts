
export type ArrayOfAsync<T> = Array<() => Promise<T>>;


/**
 * @param asyncs
 * @private
 */
async function* makeIterator(asyncs: ArrayOfAsync<any>) {

    for (let i = 0; i < asyncs.length; i++) {

        let ret = await asyncs[i]();

        yield ret;
    }
}


/**
 * Async for each loop.
 *
 * @param arr
 * @param cb
 * @returns {Promise<void>}
 */
export async function foreachAsync<T>(arr: ArrayOfAsync<T>, cb: Function) {

    let it = makeIterator(arr);

    let index = 0;

    for await (let value of it) {

        cb(value, index++);
    }

}

/*
// test

foreachAsync([

    () => new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 2000)),
    () => new Promise(resolve => setTimeout(() => resolve(5), 3000))

], (value, i) => console.log(value, i));

// output
// 3 0
// 4 1
// 5 2
*/
