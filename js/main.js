let n1=parseInt(prompt("Enter the value"));
let n2=parseInt(prompt("Enter the value"));
let n3=parseInt(prompt("Enter the value"));



let promise1= new Promise((resolve,reject)=>{
    let ans=true
    if(ans){
        resolve()
    }
    else{
        reject()
    }
})
let promise2= new Promise((resolve,reject)=>{
    let ans=true
    if(ans){
        resolve()
    }
    else{
        reject()
    }
})
let promise3= new Promise((resolve,reject)=>{
    let ans=true
    if(ans){
        resolve();
    }
    else{
        reject();
    }
})

Promise.all([promise1,promise2,promise3]).then(sum_and_average)



function sum_and_average(){
       let sum=n1+n2+n3
         document.write(`Sum of number ${sum} <br>`);
       let average=sum/3
       document.write(`average ${average}`); 
}