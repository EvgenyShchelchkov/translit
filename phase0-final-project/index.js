const input = document.querySelector("input");
const left = document.querySelector(".left");
const button = document.querySelector("button");
const ruWord = document.querySelector(".ruWord");
input.placeholder = "Начните вводить текст";
const box = document.querySelector(".box");
const svg = document.querySelector(".del");
const right = document.querySelector(".right");
const enWord = document.querySelector(".enWord");
const del = document.querySelector(".del");
const allIndex = document.querySelectorAll(".index");
const input1 = document.querySelector("#input");

function inputText() {
  const miniBox = document.createElement("div");
  miniBox.className = "miniBox";
  box.append(miniBox);

  const newLeft = document.createElement("div");
  newLeft.className = "left";
  miniBox.append(newLeft);

  const newRight = document.createElement("div");
  newRight.className = "right";
  miniBox.append(newRight);

  const newString1 = document.createElement("div");
  newString1.className = "ruWord";

  const newString2 = document.createElement("div");
  newString2.className = "enWord";

  newString1.innerText = input.value;
  if (input.value.length > 7) {
    newString1.innerText = input.value.slice(0, 7) + "...";
    const newClue = document.createElement("div");
    newClue.className = "clue";
    newClue.style.display = "none";
    newClue.innerText = input.value;
    newString1.addEventListener("mouseenter", () => {
      newClue.style.display = "block";
    });
    newString1.addEventListener("mouseleave", () => {
      newClue.style.display = "none";
    });
    newString1.append(newClue);
  } else {
    newString1.innerText = input.value;
  }

  newString2.innerText = translator(input.value);
  if (input.value.length > 7) {
    newString2.innerText = translator(input.value).slice(0, 7) + "...";
    const newClue2 = document.createElement("div");
    newClue2.className = "clue2";
    newClue2.style.display = "none";
    newClue2.innerText = translator(input.value);
    newString2.addEventListener("mouseenter", () => {
      newClue2.style.display = "block";
    });
    newString2.addEventListener("mouseleave", () => {
      newClue2.style.display = "none";
    });
    newString2.append(newClue2);
  } else {
    newString2.innerText = translator(input.value);
  }

  const newIndex = document.createElement("span");

  newString1.prepend(newIndex);
  newLeft.append(newString1);
  newRight.append(newString2);

  const btn = document.createElement("span");
  btn.className = "del";
  newRight.appendChild(btn);
  btn.addEventListener("click", () => {
    miniBox.remove();
    const allIndex = document.querySelectorAll(".index");
    allIndex.forEach((elem, i) => (elem.innerText = i + 1));
  });

  const allIndex = document.querySelectorAll(".index");
  newIndex.className = "index";

  for (let i = 0; i < allIndex.length; i++) {
    newIndex.innerText = i + 2;
  }

  input.value = "";
}

const delAll = document.querySelector(".downButton");
delAll.addEventListener("click", () => {
  location.reload();
});

button.addEventListener("click", () => {
  inputText();
});

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    inputText();
  }
});

function translator(ruLetters) {
  let result = "";
  let allLetters = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  for (let i = 0; i < ruLetters.length; i++) {
    if (allLetters[ruLetters[i]] === undefined) {
      result += ruLetters[i];
    } else {
      result += allLetters[ruLetters[i]];
    }
  }
  return result;
}
