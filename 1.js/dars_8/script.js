// | Tushuncha   | Vazifasi                                      |
// | ----------- | --------------------------------------------- |
// | Callback    | Funksiya ichida boshqa funksiya chaqirish     |
// | setTimeout  | Funksiyani belgilangan vaqtdan keyin bajarish |
// | setInterval | Funksiyani har belgilangan vaqtda takrorlash  |

// callback function
// Real hayotda: serverdan ma’lumot kelsa, shundan keyin ishlash kerak bo‘lganda juda muhim.

function salomBer(ism, callback) {
  console.log("Salom" + ism);
  callback();
}

function xayrlashish() {
  console.log("Xayr");
}

salomBer("Diyor", xayrlashish);

// setTimeout - kodni belgilangan vaqtdan keyin ishga tushirish
console.log("1 - boshlanishi");

setTimeout(() => {
  console.log("3 sekund kuting");
}, /* ms da beriladi 1000ms = 1s */ 3000);

console.log("3 - tugashi");

// setInterval- kodni belgilangan vaqta qayta-qayta bajarish
let son = 1;

let interval = setInterval(() => {
  console.log(`Son ${son}`);
  son++;

  if (son > 5) {
    clearInterval(interval);
  }
}, 1000);

// amaliy mashq
let body = document.querySelector('body')

setTimeout(() => {
    body.innerText = "Salom"
}, 5000)