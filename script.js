//your JS code here. If required.

let height=window.innerHeight;
    let width=window.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;
    h.innerText="Width: "+width+" and Height: "+height;  
window.addEventListener("resize",function(){
    let height=window.innerHeight;
    let width=window.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;
    h.innerText="Width: "+width+" and Height: "+height; 
  })


