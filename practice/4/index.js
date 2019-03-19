function temp(event){
    var Bigbox = document.querySelector('.item1')
    var small1 = document.querySelector('.item2')
    var small2 = document.querySelector('.item3')
    var small3 = document.querySelector('.item4')
    var small4 = document.querySelector('.item5')
    
    Bigbox.setAttribute('id','')
    Bigbox.innerHTML = ''

    small1.setAttribute('id', '')
    small2.setAttribute('id', '')
    small3.setAttribute('id', '')
    small4.setAttribute('id', '')

    var text = event.target.getAttribute('class')

    if (text == 'item2'){ event.target.setAttribute('id', 'London');Bigbox.setAttribute('id', 'London');Bigbox.innerHTML = "<h1>London</h1><p>London is the Capital City of England.</p>";}
    else if(text == 'item3'){event.target.setAttribute('id', 'Paris');Bigbox.setAttribute('id', 'Paris');Bigbox.innerHTML = "<h1>Paris</h1><p>Paris is the Capital City of France.</p>"}
    else if(text == 'item4'){event.target.setAttribute('id', 'Tokyo');Bigbox.setAttribute('id', 'Tokyo');Bigbox.innerHTML = "<h1>Tokyo</h1><p>Tokyo is the Capital City of Japan.</p>"}
    else if(text == 'item5'){event.target.setAttribute('id', 'Oslo');Bigbox.setAttribute('id', 'Oslo');Bigbox.innerHTML = "<h1>Oslo</h1><p>Oslo is the Capital City of Norway.</p>"}

    console.log(text)
}

function main(){
var Bigbox = document.querySelector('.item1')

var small1 = document.querySelector('.item2')
var small2 = document.querySelector('.item3')
var small3 = document.querySelector('.item4')
var small4 = document.querySelector('.item5')

small1.addEventListener('click',temp)
small2.addEventListener('click',temp)
small3.addEventListener('click',temp)
small4.addEventListener('click',temp)








console.log(Bigbox)
}
window.onload = main;