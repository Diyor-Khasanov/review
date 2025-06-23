// | DOM Amali              | Misol                             |
// | ---------------------- | --------------------------------- |
// | Element tanlash        | `getElementById`, `querySelector` |
// | Matn o‘zgartirish      | `textContent`, `innerHTML`        |
// | Hodisa qo‘shish        | `onclick`, `addEventListener`     |
// | Yangi element yaratish | `createElement`, `appendChild`    |
// | Element o‘chirish      | `remove()`                        |

// id orqali html tanish
let input = document.getElementById("input").value;

// class orqali tanish
// let input1 = document.querySelector(".input").value;

// tag orqali html tanish
let input2 = document.getElementsByTagName("input");

// bir xil classli ko'p elementlarni tanish
let input3 = document.querySelectorAll(".input");

// textni o'zgartirish
let span = document.querySelector("span");
span.innerText = "Hello";

// html ni o'zgartirish
span.innerHTML = "<h1 style='color: red;'>Salom</h1>";

// events
let salom = document.querySelector("#salom");
salom.addEventListener("click", () => {
  alert("Salom");
});

// yangi element yaratish
let body = document.querySelector("body");
let p = document.createElement("p");
p.innerText = "salom";
body.appendChild(p);

// element o'chirish
p.remove();

// input qiymatini olish
let input1 = document.querySelector(".input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener('click', () => {
  let todo = input1.value;
  alert(todo)
});

