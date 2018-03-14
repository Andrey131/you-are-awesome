// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName;};
const createNotEnumerableProperty = (propertyName) => {return Symbol(propertyName)};
const createProtoMagicObject = () => {
  createProtoMagicObject.prototype =  createProtoMagicObject.__proto__;
  return createProtoMagicObject;
};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = (array) => {return array.sort();};

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
