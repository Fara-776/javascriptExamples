var box=document.getElementsByClassName("cont")
// console.log(box);
var arr=[...box]
// console.log(arr);
arr.map((element,index)=>{
    // console.log(index);
    element.addEventListener("click",()=>{
        // console.log(index);
        if(element.style.backgroundColor=="black")
        element.style.backgroundColor="white";

        else
        element.style.backgroundColor="black";

    })
})