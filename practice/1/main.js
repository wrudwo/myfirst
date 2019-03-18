function setUserName(){
    var name = prompt('Please enter your name');
    var myheading = document.querySelector('h1');
    localStorage.setItem('name',name)
    myHeading.innerHTML = 'Mozilla is cool' + name;
}

function main(){
var mybutton = document.querySelector('button')
var myheading = document.querySelector('h1')

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name')
    myheading.innerHTML = 'Mozilla is cool ' + storedName;
}
mybutton.onclick =function(){
    setUserName();
}

}
window.onload = main;