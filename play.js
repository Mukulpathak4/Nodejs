let a=12;
let b=23;

const ans = ((a,b)=>{
   return a*b;
})

console.log(ans(a,b));

const student1 = {
    name : 'Mukul',
    class : '8',
    rollNo : 212,
    greet: ()=>{
        console.log('Hi myself' + ' ' + this.name +' '  + 'and I am really happy to see you.')
    }
}
const student2 = {
    name : 'Atul',
    class : '12',
    rollNo : 21,
    greet() {
        console.log('Hi myself' + ' ' + this.name  + ' '+ 'and I am really happy to see you.')
    }
}
console.log(student1);
console.log(student2);
student1.greet();
student2.greet();