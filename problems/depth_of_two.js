
/*
Given an object that has other objects nested inside of it, write a
function that takes that object and returns an array of all values
that are at a depth of 2.

BONUS:
Given a nested object with any number of levels, write a function
"anyDepthBonus" that returns an array of the key values contained
at any chosen level. The second argument of "anyDepthBonus" will be
a number designating the chosen level.

Hint: you may want to use recursion.
*/

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    },
    t: ['asadasd']
}

const depthOfTwo = (obj) => {
  let result = [];
  // your code here
  //want to return all data at depth 2 (meaning second nested object)
  //let temp = {}
  for (i in obj) {//gets us keys
    //console.log(obj[i], typeof obj[i], Array.isArray(obj[i]))
    //if (typeof obj[i] === 'Object')
    if (typeof obj[i] === 'object' && !Array.isArray(obj[i])){
      //console.log('obji is::', obj[i], Object.values(obj[i]))
      result.push(...Object.values(obj[i]));
      //Object.assign(temp, obj[i]);
    }
  }
  //temp now contains 2nd level items.

  //console.log('o, r == ', obj, '\nAAA', result, '\nBBB', temp)
  return result

}

const anyDepthBonus = (obj, depth) => {
    // your code here
    let result = [];
    if (depth < 1) return result;

    if (depth === 1){
      result.push(...Object.values(obj));

      //console.log('depth111 ==== ', obj, result)
      // if (Array.isArray(obj)){
      //   console.log('depth111 ==== ', obj)
      //   return obj;

      // }
      // for (i in obj) {//gets us keys
      //     result.push(Object.values(obj[i]));
      // }
      return result;
    }


    for (i in obj) {//loop through each item in obj
      //if it is an object
      if (typeof obj[i] === 'object' && !Array.isArray(obj[i])){
        result = [...result, ...anyDepthBonus(obj[i], depth -1)];
      }
    }
    //console.log('returning d o', depth, obj, result)
    return result;
}



 //console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
 //console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

/*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }
