// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (par) => {
   let prop = Symbol(par);
   return prop;
};
const createProtoMagicObject = () => {};

let count = 0;
const incrementor = () => {
    count++;
    return incrementor;
};
incrementor.toString = () => count;

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
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