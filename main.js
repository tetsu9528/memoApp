"use-strict";
{
  const createElementWithText = (tag, textContent, className = null) => {
    const element = document.createElement(tag);
    element.textContent = textContent;
    if (className) element.classList.add(className);
    return element;
  };

  const createBoxLeft = (a) => {
    const left = document.createElement("div");
    left.classList.add("box-left");

    const img = document.createElement("img");
    img.src = "comic-1.jpg";

    left.appendChild(img);
    a.appendChild(left);
  };
  

  const createBoxLight = (a) => {
    const light = document.createElement("div");
    light.classList.add("box-light");
    createTitle(light);
    createProgression(light);
    createInteresting(light);
    createFinishReading(light);
    a.appendChild(light);

   
  };

  const createTitle = (light) => {
    const h2 = createElementWithText("h2", "マンガのタイトル");
    light.appendChild(h2);
  };

  const createProgression = (light) => {
    const progression = createElementWithText("div", "", "progression");
    const h3Progress = createElementWithText("h3", "進行度：");
    const progressDiv = createElementWithText("div", "", "progress");
    const n = createElementWithText("p", "2/4");
    const progress = document.createElement("progress");
    progress.id = "file";
    progress.max = "100";
    progress.value = "50";

    light.appendChild(progression);
    progression.append(h3Progress, progressDiv);
    progressDiv.append(n, progress);
  };

  const createInteresting = (light) => {
    const fun = createElementWithText("div", "", "fun");
    const interesting = createElementWithText("h3", "面白さ：");
    const stars = createElementWithText("div", "", "stars");
    for (let i = 0; i < 5; i++) {
      const star = createElementWithText("p", "☆");
      stars.appendChild(star);
    }

    fun.append(interesting, stars);
    light.appendChild(fun);
  };

  const createFinishReading = (light) => {
    const finish = createElementWithText("div", "", "finish");
    const finishDay = createElementWithText("h3", "読了日：");
    const detail = createElementWithText("div", "", "detail");
    const unFinish = createElementWithText("p", "未読了");

    finish.append(finishDay, detail);
    detail.appendChild(unFinish);
    light.appendChild(finish);
  };

  const createBox=()=>{
    const a=document.createElement("a");
  a.href="memo.html";
  a.id="memoLink";
  const box = document.createElement("div");
  box.classList.add("box");
  box.appendChild(a);
  
    createBoxLeft(a);
  createBoxLight(a);
   // 最後に全体をDOMに追加する
   document.getElementById("container").append(box);
  }

  document.getElementById("createBoxButton").addEventListener("click",()=>{
    createBox();
  })
  
}
