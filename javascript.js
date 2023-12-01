let parent = document.querySelector("#parent");

let buttonDiv = document.createElement("div");

let input = document.createElement("input");

buttonDiv.appendChild(input);

let button = document.createElement("button");

buttonDiv.appendChild(button);

parent.appendChild(buttonDiv);

let boxDiv=document.createElement("div");
boxDiv.classList.add("boxdiv");
parent.appendChild(boxDiv);



function createDivs(){
    for(let j=1;j<=16;j++){
    let row=document.createElement("div");
    row.classList.add("row");
    boxDiv.appendChild(row);
        for(let i=1;i<=16;i++){
            let div = document.createElement("div");
            div.classList.add("boxes");
            row.appendChild(div);
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor="red";
                console.log("get here?");
            })
            
        
        }
    }
}

window.addEventListener('load',()=>{
    createDivs();
})