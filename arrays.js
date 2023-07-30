const sports = ['Cricket' , 'Basketball' , 'Football'];

console.log(sports);

console.log(sports.map(sports=> 'SPORT :' + sports));
// Even when the sports is const we have updated it succesfully without any error because it is reference datatype and sports is storing just an address of array and we are not changing the address of sports we are changing value at that address.


//spread Operator for objects
const person ={
    name : 'Mukul',
    age : 46,
    marks : 290
}
const copyObject ={person};
console.log(copyObject);
//and now by using spread operator
const copyObject1 = {...person};
console.log(copyObject1);

//spread operator for arrays
const copyarray = [sports];
console.log(copyarray);

//now using spread operator
const copyarray1 = [...sports];
console.log(copyarray1);


//Now Rest operator
const toarray = (arg1,arg2,arg3)=>{
    return [arg1,arg2,arg3];
}
console.log(toarray(2,4,6,12));

//but when we try to pass more than 3 arg in this function the function will not take the extra arg
//using rest
const toarray1 = (...args)=>{
    return args;
}
console.log(toarray1(1,3,4,6));



//task to know output
//1
const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}
//Content can be same but still they two are different objects so give false when compared

//2
const obj11 = {'key1': 1 , 'key2' : 2}

const obj22 = { ...obj1, key1: 1000}//This line creates a new object obj2 using the spread operator (...) on obj1. The spread operator creates a shallow copy of obj1, meaning the top-level properties are copied into obj2. So obj2 now also contains 'key1': 1 and 'key2': 2.After that, the assignment key1: 1000 overwrites the value of 'key1' in obj2 with 1000. So now obj2 becomes {'key1': 1000, 'key2': 2}.



console.log(obj11)

console.log(obj22)



//Task by sharpener
const array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transformedArray = array.map((item) => {
  if (item.trim() === '') {
    return 'empty string';
  } else {
    return item;
  }
});

console.log(transformedArray);