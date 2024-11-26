let myImage=document.getElementById("slideshow");
let images= ["css/WhatsApp Image 2024-11-26 at 12.32.25_31653aa9.jpg",
"css/WhatsApp Image 2024-11-26 at 12.32.25_cbdb831d.jpg",
"css/WhatsApp Image 2024-11-26 at 12.32.25_fc9d5fad.jpg"];
let i=0;

function slideshow(){
 myImage.setAttribute('src',images[i]);

 if(i == images.length-1){
    i=0;
 }else{
    i++;
 }
 setTimeout(function (){
    slideshow();
 },2000)
}
slideshow();


