"use-strict";
{
 
  

  const createInterestingList = () => {
    const fun = document.createElement("h3");
    fun.textContent = "面白かった箇所";

    const reason = document.createElement("h3");
    reason.textContent = "理由";

    const interesting = document.getElementById("interesting");
    const list = document.createElement("div");
    list.classList.add("list");
    list.appendChild(fun);
    list.appendChild(createPointList());
    list.appendChild(reason);
    list.appendChild(createReasonList());
    interesting.appendChild(list);
  };

  const createPointList = () => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.contentEditable = "true";
    li.id = "point";
    ul.appendChild(li);
    return ul;
  };

  const createReasonList = () => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.contentEditable = "true";
    li.id = "reason";
    ul.appendChild(li);
    return ul;
  };

  const createList = () => {
    const list = createPointList();
    document.getElementById("factor").appendChild(list);
  };

  const createList02 = () => {
    const list = createPointList();
    document.getElementById("factor-2").appendChild(list);
  };

  const createList03 = () => {
    const list = createPointList();
    document.getElementById("factor-3").appendChild(list);
  };

  document
    .getElementById("createInterestingListButton")
    .addEventListener("click", () => {
      createInterestingList();
      
    });

  document.getElementById("createListButton").addEventListener("click", () => {
    createList();
  });

  document.getElementById("createListButton02").addEventListener("click", () => {
    createList02();
  });
  document.getElementById("createListButton03").addEventListener("click", () => {
    createList03();
  });






}
