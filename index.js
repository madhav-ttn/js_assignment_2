"use strict";

const [insertBtn, addBtn, subtractBtn, multiplyBtn, divideBtn,insertTempBtn,farBtn,kelvinBtn,displayBtn] = 
  ["#insert", "#add", "#subtract", "#multiply","#divide", "#insertTemp","#toFar","#toKelvin","#display"].map(id => document.querySelector(id));


let a;
let b;


let calObj={
    check:function(n){
        if(n===null || n===undefined)return false;
        if(n.length===0)return false;
        let parsed = parseFloat(n);
        if (!isNaN(n) && parsed.toString() === n ) {
            return true;
        }
        return false;
    },
    read:function(){
        a=prompt("Enter first Value:","");
        if(this.check(a)===false){
            alert("Invalid Input");
            return;
        }
        b=prompt("Enter second value:","");
        if(this.check(b)===false){
            alert("Invalid Input");
            return;
        }
        alert(`The value of a & b are respectively :${a} , ${b}`);
    },
    add:function(){
        if(this.check(a)===false || this.check(b)===false){
            alert("Invalid Input");
            return;
        }
        let sum=parseFloat(a)+parseFloat(b);
        alert(`The sum is: ${sum}`);
    },
    subtract:function(){
        if(this.check(a)===false || this.check(b)===false){
            alert("Invalid Input");
            return;
        }
        let subtraction=parseFloat(a)-parseFloat(b);
        alert(`The subtraction is: ${subtraction}`);
     },
     multiply:function(){
        if(this.check(a)===false || this.check(b)===false){
            alert("Invalid Input");
            return;
        }
        let multiplication=parseFloat(a)*parseFloat(b);
        alert(`The multiplication is: ${multiplication}`);
     },
     divide:function(){
        if(this.check(a)===false || this.check(b) === false){
            alert("Invalid Input");
            return;
        }
        if(parseFloat(b)==0){
            alert("Can't divide by 0");
            return;
        }
        let division=parseFloat(a)/parseFloat(b)
        alert(`The division is: ${division}`);
     }
}

insertBtn.addEventListener("click",()=>{
    calObj.read();
})

addBtn.addEventListener("click",()=>{
    calObj.add();
})
subtractBtn.addEventListener("click",()=>{
    calObj.subtract();
})
multiplyBtn.addEventListener("click",()=>{
    calObj.multiply();
})
divideBtn.addEventListener("click",()=>{
    calObj.divide();
})

let t,t_F,t_K;

const temperatureConverter={
    check:function(n){
        if(n===null || n===undefined)return false;
        if(n.length===0)return false;
        let parsed = parseFloat(n);
        if (!isNaN(n) && parsed.toString() === n ) {
            return true;
        }
        return false;
    },
    read:function(){
       t=prompt("Enter the temperature in degree celsius","");
       if(this.check(t)===false){
        alert("Invalid Input");
        return;
       }
    },
    toFahrenheit:function(){
        if(this.check(t)===false){
            alert("Invalid Input");
            return;
        }
        t_F=(9/5)*(this.check(t))+32;
        alert(`The temperature in farheneit:${t_F}`);
    },
    toKelvin:function(){
        if(this.check(t)===false){
            alert("Invalid Input");
            return;
        }
        t_K=this.check(t)+273.15;
        alert(`The temperature in kelvin:${t_K}`);
    },
    display:function(){
        if(this.check(t)===false){
            alert("Invalid Input");
            return;
        }
        alert(`The temp in kelvin is ${t_K} and temperature in farehneit is ${t_F}`)
    }
}


insertTempBtn.addEventListener("click",()=>{
    temperatureConverter.read();
})
farBtn.addEventListener("click",()=>{
    temperatureConverter.toFahrenheit();
})
kelvinBtn.addEventListener("click",()=>{
    temperatureConverter.toKelvin();
})
displayBtn.addEventListener("click",()=>{
    temperatureConverter.display();
})

