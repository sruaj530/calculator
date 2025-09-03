let buttons=document.querySelectorAll(".box");
let input=document.querySelector(
"input"
)
let string="";

buttons.forEach(btn => {

    btn.addEventListener("click",()=>{

console.log(string)


if(btn.innerHTML==="="){
    string=eval(string)
    input.value=string; 


}



else if(btn.innerHTML==="AC")
{string="";
    input.value=string;

}  

else if(btn.innerHTML==="DEL")
{
    string=string.substring(0,string.length-1);
input.value=string;
}  
else{

string+=btn.innerHTML
 input.value=string; 
}







}



    



    );

  
});