//your JS code here. If required.
// let height = this.innerHeight;
// let width = this. innerWidth;
// let div=document.getElementById("sizeInfo");
// let h=div.firstchild;
// h.innerText = "Width:"+width "and Height:" + height;
// window.addEventListner("resize",function(){
// 	let height = this.innerHeight;
// 	let width = this. innerWidth;
// 	let div=document.getElementById("sizeInfo");
// 	let h=div.firstchild;
// 	h.innerText = "Width:"+width "and Height:" + height;
// })
let height=this.innerHeight;
    let width=this.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;
    h.innerText="Width: "+width+" and Height: "+height;  
window.addEventListener("resize",function(){
    let height=this.innerHeight;
    let width=this.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;
 
    h.innerText="Width: "+width+" and Height: "+height; 
  
  })


