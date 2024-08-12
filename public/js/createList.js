"use-strict"
{
    const createInterestingList=()=>{
        const fun=document.createElement("h3");
        fun.textContent="面白かった箇所";
    
       
        const reason=document.createElement("h3");
        reason.textContent="理由";
    
      
       const review=document.getElementById("review");
       const interesting=document.createElement("div");
       interesting.classList.add("interesting");
        interesting.appendChild(fun);
        interesting.appendChild(createList());
        interesting.appendChild(reason);
        interesting.appendChild(createList());
       review.appendChild(interesting);
    }

    const createList=()=>{
        const ul=document.createElement("ul");
        const li=document.createElement("li");
    
        ul.appendChild(li);
        return ul;
    }
   
    document.getElementById("createListButton").addEventListener("click",()=>{
        createInterestingList();
    })

}