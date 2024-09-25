let arr=[1,2,3,4,5,6,7,8,9,10];


// let number= arr.forEach((num)=>{
//         // return num;
//         console.log(num);
// })
// console.log(number);


// const n1 = arr.map( (num)=> num*10)
// console.log(n1);

// const n2 = arr.filter( (nums)=> nums>=5)
// console.log(n2)

const n3 = arr.reduce( (acc,curr)=> {
    return acc+curr;
},0);
console.log(n3);



// let name = Array.from("rohitKumat")
// console.log(name)
// console.log(name.length) 

let arr1 = [1,2,3];
let newarr= [...arr1];
newarr.push(5);
// let newarr2 = arr1;
// newarr2.push(6)
console.log(newarr);
// console.log(newarr2);
console.log(arr1)