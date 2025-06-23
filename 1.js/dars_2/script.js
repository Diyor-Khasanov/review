// operatorlar
5 + 3; //qo'shish
5 - 3; // ayirish
5 * 3; //ko'paytirish
6 / 3; // bo'lish
5 % 2; // qoldiqli bo'lish

// Taqqoslash operatorlari
5 == "5"; // Teng (qiymat) -> true
5 === "5"; // Qatiy teng (tip+qiymat) -> false
5 != 3; // teng emas -> true
5 !== "5"; // qat'iy teng emas -> true
5 > 3; // katta -> true
5 < 3; // kichik -> false
5 <= 5; // kichik yoki teng -> true
5 >= 5; // katta yoki teng -> true

// Mantiqiy operatorlar
5 && 5; // va ikki taraf ham true bo'lishi kerak
5 || 5; // yoki bir taraf true bo'lsa yetarli
!true; // inkor belgisi -> false

// if operatori
// to'gri bo'lsa bajariladi
let yosh = 18;

if (yosh >= 18) {
  console.log("Siz balog'at yoshidasiz.");
}
// ifElse operatori
// to'g'ri bo'lsa if bo'lmasa else ishlaydi. Ko'proq shart qo'yish uchun else if ham qo'ysa bo'ladi lekin shart emas bu additional
let num = 16;

if (num >= 18) {
  console.log("Siz balog'at yoshidasiz.");
} else {
  console.log("Siz voyaga yetmagansiz.");
}

let baho = 4;

if (baho == 5) {
  console.log("A'lo");
} else if (baho == 4) {
  console.log("Yaxshi");
} else if (baho == 3) {
  console.log("Qoniqarli");
} else {
  console.log("Yomon");
}

// switch operatori:
// Ko‘p holatlarni tekshirish uchun qulay.

let kun = 3;

switch (kun) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  default:
    console.log("Bunday kun yo‘q");
}

// amaliy ish
let a = prompt("Son kiriting");
let b = prompt("Son kiriting");

if (a > b) {
  alert(`${a} ${b} dan katta`);
} else if (a < b) {
  alert(`${b} ${a} dan katta`);
} else {
  alert("Iltimos son kiriting");
}
