### fast-helpers.js

*Its Open Source, please contribute if you can [Here](https://github.com/Haider-Ali-Dev/fast-helps.js)*


Python has a range method, ruby has a range method. Why not JavaScript?

**Introducing Range Method**


```js
import { range } from "fast-helpers.js";
for (number of range(0, 10)) {
    console.log(number);
}
```


**Introducing Advance Math**


```js
import { divide } from 'fast-helpers.js/math.js';

divide((number=10, divideByNumber=2, array=null, divideArray=false) // Returns 5;
// Now lets get into whats array and divideArray//

const data = [
    10, 30, 38, 98, 27, 88, 177, 109, 872
]
divide((number=null, divideByNumber=2, array=null, divideArray=false) // this returns an object

// ouput
{
  answer: [
       5,   15,  19,
      49, 13.5,  44,
    88.5, 54.5, 436
  ],
  remainder: [
    0, 0, 0, 0, 1,
    0, 1, 1, 0
  ]
}
```


**Introducing Random**

*Python has a bulit in module called random why does JavaScript don't have it, Well know it kinda does*


```js
import random from 'fast-helpers.js/random.js';

console.log(random.randint(1, 10))
```


```js
import random from 'fast-helpers.js/random.js';
const meme = [
    "Very Funny",
    "Yes LOLOL",
    "SHEESH"
]
console.log(random.choice(meme))
```

