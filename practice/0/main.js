function main(){
    var image = document.querySelector('img')

    image.onclick =function(){
        console.log("good;");
        var myimage = image.getAttribute('src');
        if(myimage === './0.png'){
            image.setAttribute ('src','./1.png');
        } else{
            image.setAttribute('src','./0.png');
        }
    }
}
window.onload=main;