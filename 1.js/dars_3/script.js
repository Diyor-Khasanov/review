// | Tushuncha | Ma’nosi                             |
// | --------- | ----------------------------------- |
// | Function  | Kodlar blokini yaratish             |
// | Parametr  | Funktsiyaga beriladigan o‘zgaruvchi |
// | Return    | Funktsiyadan qiymat qaytarish       |

// funksiya
function salom() {
  console.log("Assalomu alaykum!");
}

salom();

// function with param
function salomBer(ism) {
  console.log("Salom, " + ism + "!");
}

salomBer("Diyor"); // argument
salomBer("Ali");

// function with params
function hisobla(a, b) {
  console.log(a + b);
}

hisobla(5, 3);

// return
function kvadrat(son) {
  return son * son;
}

let natija = kvadrat(4);
console.log(natija);

function yigindi(a, b) {
  return a + b;
}

let nat = yigindi(10, 5);
console.log("Yig‘indi: " + nat);

// amaliy ish
const katta = (a, b, c) => {
  if (a > b && a > c) {
    alert(a);
  } else if (b > a && b > c) {
    alert(b);
  } else if (c > a && c > b) {
    alert(c);
  } else {
    alert("Iltimos format son bo'lsin");
  }
};

katta(1, 2, 3);
