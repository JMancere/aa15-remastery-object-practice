/*
Write function "convertNested" that will convert an array of nested objects into
a normalized object containing only flattened data. The final object must be
normalized by ids - each key is an id with a value of all the data in the
original obj, flattened. You must exclude the key of "details" but make sure to
flatten its original data.

ex: {
    [id]: { <all keys from original object, flattened. 'details' key is
    excluded>
    }
}

Use console logging to inspect the data you are working with.
*/

/*** do not change or modify below setup code ***/
const { faker } = require('@faker-js/faker')
const genNestedData = (length=10, result=[]) => {
    for(let i=0; i<length; ++i){
        result.push({
            id: faker.database.mongodbObjectId(),
            name: faker.company.name(),
            location: faker.address.cityName(),
            details: {
                account_number: faker.finance.account(),
                account_name: faker.finance.accountName(),
                routing_number: faker.finance.routingNumber(),
                balance: faker.finance.amount()
            }
        })
    }
    return result
}

const dataArray = genNestedData(5)

const convertNested = (arr) => {
  //const clone = structuredClone(arr);
  //console.log(arr, 'RRR==', clone)
  //return clone

  // your code here
    //convert arr
    let result = {};
    arr.forEach(e => {
      result[e.id] = {...e};
      delete result[e.id].details

      //want to take the info out of details and move it up one level.
      Object.assign(result[e.id], e.details);
    });
    //console.log('arr==', arr, 'RRR==', result)
    return result

    // let result = {};
    // clone.forEach(e => {
    //   result[e.id] = {...e};
    //   delete result[e.id].details
    // });
    // console.log('clone==', clone, 'RRR==', result)
    // return result
}

// console.log('dataArray: ', dataArray)
// console.log(convertNested(dataArray))

/*** Do not change the code after this line ***/
module.exports = {
    convertNested,
    genNestedData
};
