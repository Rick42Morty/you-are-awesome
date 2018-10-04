// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (par) => {
   let prop = Symbol(par);
   return prop;
};
const createProtoMagicObject = () => {
    function foo(){};
    foo.prototype = foo.__proto__;
    return foo;
};

let count = 0;
const incrementor = () => {
    count++;
    return incrementor;
};
incrementor.toString = () => count;

let count1 = 0;
const asyncIncrementor = () => {
    count1++;
    return asyncIncrementor;
};
asyncIncrementor.toString = () => count1;

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (par) => {
    let promise = new Promise((resolve) => {

        setTimeout(() => {
          resolve();
        }, 1100);
      
      });      
      return promise.then(() => par);
};

const getDeepPropertiesCount = (obj) => {
    let counter = 0;
    function count(obj) {
      for (let key in obj) {
        counter++;
        count(obj[key]);
      }
    }
    count(obj);
  
    return counter;
  };
const createSerializedObject = () => {
    let obj = new Number(10);
    return obj;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a, b) => a.__proto__ - b.__proto__);
}

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;