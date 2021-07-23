var images=[
    'http:/www.sololearn.com/uploads/slider/1.jpg',
    'http:/www.sololearn.com/uploads/slider/2.jpg',
    'http:/www.sololearn.com/uploads/slider/3.jpg'
];
var num=0;
var prev=document.getElementById('prev');
var next=document.getElementById('next');
prev.addEventListener("click",function(){
  
    prevImage();
});
next.addEventListener("click",function()
{

    nextImage();
});

function nextImage() {
    var slider=document.getElementById('slider');
    num++;
    if(num>=images.length)//3
    {
        num=0;
    }
    slider.src=images[num];
}
function prevImage() {
    var slider=document.getElementById('slider');
    num--;
    if(num<0)
    {
        num=images.length-1;
    }
    slider.src=images[num];
 
}