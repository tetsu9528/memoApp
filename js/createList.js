"use strict";
{
  // Interestingポイントのリストを作成する関数
 

  // 他のリストを作成する関数
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

  const createPointList04 = (savedContent = "") => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.contentEditable = "true";
    li.textContent = savedContent;
    li.id = "point04";
    ul.appendChild(li);
    return ul;
  };

  // Interestingポイントのリストを作成する関数
  
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

  const createList04 = () => {
    const list = createPointList04();
    document.getElementById("factor04").appendChild(list);
    saveListData04();
  };

  // interestingPointのリストデータを保存する関数
 

  // その他のリストデータを保存する関数
  const saveListData01 = () => {
    const factors = document.querySelectorAll("#point01");
    const listData = Array.from(factors).map(li => li.textContent);
    localStorage.setItem("listItems01", JSON.stringify(listData));
  };

  const saveListData02 = () => {
    const factors = document.querySelectorAll("#point02");
    const listData = Array.from(factors).map(li => li.textContent);
    localStorage.setItem("listItems02", JSON.stringify(listData));
  };

  const saveListData03 = () => {
    const factors = document.querySelectorAll("#point03");
    const listData = Array.from(factors).map(li => li.textContent);
    localStorage.setItem("listItems03", JSON.stringify(listData));
  };

  const saveListData04 = () => {
    const factors = document.querySelectorAll("#point04");
    const listData = Array.from(factors).map(li => li.textContent);
    localStorage.setItem("listItems04", JSON.stringify(listData));
  };

 

  const loadListData01 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems01")) || [];
    savedListData.forEach(content => {
      const list = createPointList01(content);
      document.getElementById("factor01").appendChild(list);
    });
  };

  const loadListData02 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems02")) || [];
    savedListData.forEach(content => {
      const list = createPointList02(content);
      document.getElementById("factor02").appendChild(list);
    });
  };

  const loadListData03 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems03")) || [];
    savedListData.forEach(content => {
      const list = createPointList03(content);
      document.getElementById("factor03").appendChild(list);
    });
  };

  const loadListData04 = () => {
    const savedListData = JSON.parse(localStorage.getItem("listItems04")) || [];
    savedListData.forEach(content => {
      const list = createPointList04(content);
      document.getElementById("factor04").appendChild(list);
    });
  };

  // データ削除ボタンのイベントリスナー
  document.getElementById("deleteListButton").addEventListener("click", function () {
    localStorage.clear();
    alert("LocalStorageのすべてのデータが削除されました。");
  });

  

  // 他のリスト作成ボタンのイベントリスナー
  document.getElementById("createListButton01").addEventListener("click", () => {
    createList01();
  });

  document.getElementById("createListButton02").addEventListener("click", () => {
    createList02();
  });

  document.getElementById("createListButton03").addEventListener("click", () => {
    createList03();
  });

  document.getElementById("createListButton04").addEventListener("click", () => {
    createList04();
  });
  // ページが読み込まれたときに保存されたリストをロード
  window.addEventListener("load", loadListData01);
  window.addEventListener("load", loadListData02);
  window.addEventListener("load", loadListData03);
  window.addEventListener("load", loadListData04);

  // リストが編集されたときに自動的に保存
  document.addEventListener("input", saveListData01);
  document.addEventListener("input", saveListData02);
  document.addEventListener("input", saveListData03);
  document.addEventListener("input", saveListData04);
}
