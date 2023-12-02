let parent = document.querySelector("#parent");

let buttonDiv = document.createElement("div");

buttonDiv.textContent="How many rows do you want? Max 100";

let inputted = document.createElement("input");
inputted.setAttribute("type","number");

buttonDiv.appendChild(inputted);

let button = document.createElement("button");
button.textContent="Enter";
buttonDiv.appendChild(button);

parent.appendChild(buttonDiv);

let boxDiv=document.createElement("div");
boxDiv.classList.add("boxdiv");
parent.appendChild(boxDiv);



button.addEventListener('click',()=>{
   
   let inputContent = inputted.value;
   console.log(inputContent);
   if(inputContent>100){
        inputContent=100;   
        window.confirm("You can't go over 100. \n We maxed out your choice to 100.")
    }
    removeDivs();
    createDivs(inputContent);
    inputContent="";
})
inputted.focus();



function createDivs(num){
    for(let j=1;j<=num;j++){
    let row=document.createElement("div");
    row.classList.add("row");
    boxDiv.appendChild(row);
        for(let i=1;i<=num;i++){
            let div = document.createElement("div");
            div.classList.add("boxes");
            row.appendChild(div);
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor="red";
               
            })
            
        
        }
    }
}

function removeDivs(){
   
   let removeRows = document.querySelectorAll(".row");
   removeRows.forEach(element =>{
    element.remove();
    
   })
   
}

window.addEventListener('load',()=>{
    createDivs(16);
})