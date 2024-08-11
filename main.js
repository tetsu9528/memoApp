"use-strict";
{
  const createElementWithText = (tag, textContent, className = null) => {
    const element = document.createElement(tag);
    element.textContent = textContent;
    if (className) element.classList.add(className);
    return element;
  };

  const createBoxLeft = (box) => {
    const left = document.createElement("div");
    left.classList.add("box-left");

    const img = document.createElement("img");
    img.src = "comic-1.jpg";

    left.appendChild(img);
    box.appendChild(left);
  };
  

  const createBoxLight = (box,a) => {
    const light = document.createElement("div");
    light.classList.add("box-light");
    createTitle(light);
    createProgression(light);
    createInteresting(light);
    createFinishReading(light);
    box.appendChild(light);

    // 最後に全体をDOMに追加する
    document.getElementById("container").append(a);
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
  const box = document.createElement("div");
  box.classList.add("box");
  a.appendChild(box);
  
    createBoxLeft(box);
  createBoxLight(box,a);
  }

  document.getElementById("create").addEventListener("click",()=>{
    createBox();
  })
}
