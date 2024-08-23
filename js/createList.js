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
    list.appendChild(createPointList01());
    list.appendChild(reason);
    list.appendChild(createReasonList());
    interesting.appendChild(list);
  };

  const createPointList01 = (savedContent = "") => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.contentEditable = "true";
    li.textContent = savedContent;
    li.id = "point01";
    ul.appendChild(li);
    return ul;
  };

  const createPointList02 = (savedContent = "") => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.contentEditable = "true";
    li.textContent = savedContent;
    li.id = "point02";
    ul.appendChild(li);
    return ul;
  };

  const createPointList03 = (savedContent = "") => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.contentEditable = "true";
    li.textContent = savedContent;
    li.id = "point03";
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

  const createList01 = () => {
    const list = createPointList01();
    document.getElementById("factor01").appendChild(list);
    saveListData01();
  };

  const createList02 = () => {
    const list = createPointList02();
    document.getElementById("factor02").appendChild(list);
    saveListData02();
  };

  const createList03 = () => {
    const list = createPointList03();
    document.getElementById("factor03").appendChild(list);
    saveListData03();
  };

  const saveListData01 = () => {
    const factors = document.querySelectorAll("#point01");
    const listData = Array.from(factors).map((li) => li.textContent);
    localStorage.setItem("listItems01", JSON.stringify(listData));
  };

  const saveListData02 = () => {
    const factors = document.querySelectorAll("#point02");
    const listData = Array.from(factors).map((li) => li.textContent);
    localStorage.setItem("listItems02", JSON.stringify(listData));
  };

  const saveListData03 = () => {
    const factors = document.querySelectorAll("#point03");
    const listData = Array.from(factors).map((li) => li.textContent);
    localStorage.setItem("listItems03", JSON.stringify(listData));
  };

  const loadListData01 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems01")) || [];
    savedListData.forEach((content) => {
      // 指定したfactorの場所にリストを追加 (ここでは最初のfactorに追加する例)
      const list = createPointList01(content);
      document.getElementById("factor01").appendChild(list);
    });
  };

  const loadListData02 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems02")) || [];
    savedListData.forEach((content) => {
      // 指定したfactorの場所にリストを追加 (ここでは最初のfactorに追加する例)
      const list = createPointList02(content);
      document.getElementById("factor02").appendChild(list);
    });
  };

  const loadListData03 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems03")) || [];
    savedListData.forEach((content) => {
      // 指定したfactorの場所にリストを追加 (ここでは最初のfactorに追加する例)
      const list = createPointList03(content);
      document.getElementById("factor03").appendChild(list);
    });
  };

  document
    .getElementById("deleteListButton")
    .addEventListener("click", function () {
      // localStorageのすべてのデータを削除
      localStorage.clear();
      alert("LocalStorageのすべてのデータが削除されました。");
    });

  document
    .getElementById("createInterestingListButton")
    .addEventListener("click", () => {
      createInterestingList();
    });

  document
    .getElementById("createListButton01")
    .addEventListener("click", () => {
      createList01();
    });

  document
    .getElementById("createListButton02")
    .addEventListener("click", () => {
      createList02();
    });
  document
    .getElementById("createListButton03")
    .addEventListener("click", () => {
      createList03();
    });

  // ページが読み込まれたときに保存されたリストをロード
  window.addEventListener("load", loadListData01);
  window.addEventListener("load", loadListData02);
  window.addEventListener("load", loadListData03);

  // リストが編集されたときに自動的に保存
  document.addEventListener("input", saveListData01);
  document.addEventListener("input", saveListData02);
  document.addEventListener("input", saveListData03);
}
