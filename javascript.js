let parent = document.querySelector("#parent");

function createDivs(){
    for(let j=1;j<=16;j++){
    let row=document.createElement("div");
    row.classList.add("row");
    parent.appendChild(row);
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