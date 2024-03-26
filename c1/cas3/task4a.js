
const take=require("./task4")

let student=await take.getAllStudents();
console.log(student);


let student1=take.getSingleStudent();
console.log(student);

for(let i=0;i<3;i++){
    take.addNewStudent()
}