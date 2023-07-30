

setTimeout(()=>{
    console.log('Helllo');
},3000)
//above is async code because it doesnot execute immediately

//below is sync code 
console.log('Hiii');
console.log('kese ho');


const fetchdata = callback=>{
    setTimeout(()=>{
        callback('Done hogya');
    },1000)
};

setTimeout(()=>{
    console.log('Helllo');
    fetchdata(text=>{
        console.log(text);
    });
},2000);


//Now using promises
const fetchdata1 = ()=>{
    const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve('Done hogya');
        },1000)
    });
    return promise;
};

setTimeout(()=>{
    console.log('Helllo');
    fetchdata1()
    .then(text=>{
        console.log(text);
        return fetchdata1()
    })
    .then(
        text2=>{
        console.log(text2);
        });
},2000);





Task by sharpener
1
console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
console.log('d');

2
console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)
console.log('e');

//to print abcde by above code using promise


function print(x) {
  return new Promise(resolve => setTimeout(resolve, x));
}
function printA() {
  console.log('a');
  return print(1);
}
function printB() {
  console.log('b');
}
function printC() {
  console.log('c');
}
function printD() {
  console.log('d');
}
function printE() {
  console.log('e');
}
printA()
  .then(printB)
  .then(printC)
  .then(printD)
  .then(printE);


//now by async await  
function print(x) {
  return new Promise(resolve => setTimeout(resolve, x));
}
async function printSequence() {
  await print(1);
  console.log('a');
  await
  console.log('b');
  await 
  console.log('c');
  await 
  console.log('d');
  console.log('e');
}
printSequence();





