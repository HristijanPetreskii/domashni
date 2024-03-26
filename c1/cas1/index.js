//const { name } = require("tar/lib/types")

//console.log("Welcome HRISTIJANn")

//function arr(){
//    const test=[1,2,3]
//}

//var - refers to global object or value
//const constanta,a za niza raboti,za primitivni ne raboti
//let - block scope we can change primitive and complex one

//const complexTip=[2,4,6]
//complexTip.push(10)
//complexTip.pop()


function name1(){
    console.log("Hristijan Petreski")
}
name1()

let name2=function(){
    console.log("Hristijan Petreski")
}
name2()

let name3=()=>{
    console.log("Hristijan Petreski")
}

name3()

let calc=(a,b)=>{
     console.log(a+b)
     console.log(a-b)
     console.log(a*b)
     console.log(a/b)
}
calc(5,3)

let calc2=(a,b,operator)=>{
     switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            return "Invalid operator"                 
     }
}
console.log(calc2(5,3,'*'));


//podgotovki
//