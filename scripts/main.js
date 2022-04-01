// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello World!";

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == "images/fire-fox.jpeg"){
        myImage.setAttribute('src', 'images/fire-fox2.jpeg');
    }else{
        myImage.setAttribute('src', 'images/fire-fox.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('输入你的名字');
    if(!myName || myName === null){
        setUserName()
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了,'+myName;
    }

}

function init(){
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
      }
}

init()
myButton.onclick = function(){
    setUserName();
}