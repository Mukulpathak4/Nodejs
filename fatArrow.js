class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    // setPlacementAge(minPlacementAge){
    //     console.log(this);
    //     return function eligibleOrNot(minMarks){
    //         console.log('inside eligible function' ,this);  //Here this will have undefined beacause no object is calling eligibleornot above function is calling it 
    //         if(this.marks>minMarks)
    //         console.log("Eligible for placement");
    //         else
    //         console.log("not Eligible for placement");
    //     }
    // }



    // When we use fat arrow function then this will come from parent object of current function which is calling it
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) =>{
            console.log('inside eligible function',this);
            if(this.marks>minMarks)
            console.log("Eligible for placement");
            else
            console.log("not Eligible for placement");
        }
    }

}





const mukul = new Student('Mukul Pathak',24,29);
const atul = new Student('Atul Pathak',27,90);

atul.setPlacementAge(18)(40);
