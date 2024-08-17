"use-strict"
{
    const createInterestingList=()=>{
        const fun=document.createElement("h3");
        fun.textContent="面白かった箇所";
    
       
        const reason=document.createElement("h3");
        reason.textContent="理由";
    
      
       const interesting=document.getElementById("interesting");
       const list=document.createElement("div");
       list.classList.add("list");
        list.appendChild(fun);
        list.appendChild(createPointList());
        list.appendChild(reason);
        list.appendChild(createReasonList());
       interesting.appendChild(list);
    }

    const createPointList=()=>{
        const ul=document.createElement("ul");
        const li=document.createElement("li");
        li.contentEditable="true";
        li.id="interestingPoint"
        ul.appendChild(li);
        return ul;
    }

    const createReasonList=()=>{
        const ul=document.createElement("ul");
        const li=document.createElement("li");
        li.contentEditable="true";
        li.id="interestingReason";
        ul.appendChild(li);
       return ul;
        
    }

    
    document.getElementById("createListButton").addEventListener("click",()=>{
        createInterestingList();
    })

}