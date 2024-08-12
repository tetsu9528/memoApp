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
        interesting.appendChild(createPointList());
        interesting.appendChild(reason);
        interesting.appendChild(createReasonList());
       review.appendChild(interesting);
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
        li.id="interestingReason"
        ul.appendChild(li);
        return ul;
    }

    document.addEventListener("DOMContentLoaded", function() {
        const interestingPoint = document.getElementById("interestingPoint");
        const interestingReason = document.getElementById("interestingReason");
    
        // ページが読み込まれたときにlocalStorageからメモを取得する
        interestingPoint.value = localStorage.getItem("interestingPoint") || "";
        interestingReason.value = localStorage.getItem("interestingReason") || "";
    
        // メモの内容が変更されたらlocalStorageに保存する
        interestingPoint.addEventListener("input", function() {
            localStorage.setItem("interestingPoint", interestingPoint.value);
        });
        interestingReason.addEventListener("input", function() {
            localStorage.setItem("interestingReason", interestingReason.value);
        });
    });
   
    document.getElementById("createListButton").addEventListener("click",()=>{
        createInterestingList();
    })

}