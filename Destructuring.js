const person ={
    name : 'Mukul',
    age : 46,
    marks : 290
}
const printName = (personObj)=>{
    console.log(personObj.name);
}

printName(person);

//Now by destructuring
const getData = ({name,age})=>{
    console.log(name,age);
}
getData(person);
//destructuring will make new variables by getting data from obj or array

const sports = ['Cricket' , 'Basketball' , 'Football'];
const [hoby1,hoby2] = sports;
console.log(hoby1);
console.log(hoby2);


//Task by sharpener
//1
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
const { key1, key3} = { ...obj1}
console.log(key1, key3);



//2
const arr1 = ['value1', 'value2']
const [ val1, val2 ] = arr1
console.log(val1)
console.log(val2)



//3
const obj11 = {'key11': 1, "key22": 2, "key33": 1000}
let { key11, key33} = obj11
key11 = 20;
key33 = 123
console.log(obj11.key11, obj11.key33)