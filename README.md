# generators-async-utils
Foreach async using generators. 

> One limitation of the Promise.all API arises when attempting to serialize an array of promises, especially when each promise has varying delays.


### API

```ts
import { foreachAsync } from "..."

foreachAsync (arr: Promise<T>[], callback: (value: T, index: number) => void) : void

```

### Example with callback interface

```ts
    foreachAsync([
    
        () => new Promise(resolve => setTimeout(() => resolve(3), 1000)),
        () => new Promise(resolve => setTimeout(() => resolve(4), 2000)),
        () => new Promise(resolve => setTimeout(() => resolve(5), 3000))
    
    ], (value, i) => console.log(value, i));

// output
// 3 0
// 4 1
// 5 2
```
