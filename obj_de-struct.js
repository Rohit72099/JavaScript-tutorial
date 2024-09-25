const obj={
    name:"rohit",
    reg_no:"12215108",
    age:"25"
}

const { name,age} = obj;
// console.log(name,age);

var colors = ["red", "green", "blue", "orange","voilet","pink","black","white"];
var [a,b,c,d,...args] = colors;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(args);


// var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

//     // destructuring assignment
//     var [a,b,...args] = colors;
//     console.log(a);
//     console.log(b);
//     console.log(args);

function cal(a,b){
     let add=a+b;
     let sub = a-b;
     let mul = a*b;
     let div = a/b;
     return[add,sub,mul,div];
}
let [add,sub,mul,div] =cal(3,4);
console.log(add);
function f1(){
    return[100,200]
}
let [x,y]=f1();
console.log(x)
console.log(y);