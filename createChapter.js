"use-strict"
{
    const createChapter=()=>{
        const chapter=document.createElement("div");
        chapter.classList.add("chapter");
        const title=document.createElement("p");
        title.textContent="チャプター１";
        const img=document.createElement("img");
        img.src="https://placehold.jp/1080x720.png";

        chapter.appendChild(title);
        chapter.appendChild(img);

        document.getElementById("memoContainer").appendChild(chapter);
    }
   
document.getElementById("createChapterButton").addEventListener("click",()=>{
    createChapter();
})
}