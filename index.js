"use strict";

const [insertBtn, addBtn, subtractBtn, multiplyBtn, divideBtn,insertTempBtn,farBtn,kelvinBtn,displayBtn] = 
  ["#insert", "#add", "#subtract", "#multiply","#divide", "#insertTemp","#toFar","#toKelvin","#display"].map(id => document.querySelector(id));


let a;
let b;


let calObj={
    check:function(){
        a=parseFloat(a);
        b=parseFloat(b);
        if(isNaN(a) || isNaN(b) ){
            alert("Enter a valid input (number only)");
            return false;
        }
        return true;
    },
    read:function(){
        a=prompt("Enter first Value:","");
        b=prompt("Enter second value:","");
        if(this.check() === false)return;
        alert(`The value of a & b are respectively :${a} , ${b}`);
    },
    add:function(){
        if(this.check() === false)return;
        let sum=a+b;
        alert(`The sum is: ${sum}`);
    },
    subtract:function(){
        if(this.check() === false)return;
        let subtraction=a-b;
        alert(`The subtraction is: ${subtraction}`);
     },
     multiply:function(){
        if(this.check() === false)return;
        let multiplication=a*b;
        alert(`The multiplication is: ${multiplication}`);
     },
     divide:function(){
        if(this.check() === false)return;
        let division=a/b;
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
    check:function(){
        t=parseFloat(t);
        if(isNaN(t)){
            return false;
        }
        return true;
    },
    read:function(){
       t=prompt("Enter the temperature in degree celsius","");
       if(this.check()==false){
        alert("Enter valid input only");
        return;
       }
    },
    toFahrenheit:function(){
        t_F=(9/5)*t+32;
        alert(`The temperature in farheneit:${t_F}`);
    },
    toKelvin:function(){
        t_K=t+273.15;
        alert(`The temperature in kelvin:${t_K}`);
    },
    display:function(){
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

