"use-strict"
{
    const createChapter=()=>{
        const chapter=document.createElement("div");
        chapter.classList.add("chapter");

        const a=document.createElement("a");
        a.href="chapter.html";
        a.id="chapterLink";

        chapter.appendChild(a);
        const title=document.createElement("p");
        title.textContent="チャプター１";

        const img=document.createElement("img");
        img.src="https://placehold.jp/1080x720.png";

        a.appendChild(title);
        a.appendChild(img);

       

        document.getElementById("memoContainer").appendChild(chapter);
    }
   
document.getElementById("createChapterButton").addEventListener("click",()=>{
    createChapter();
})
}