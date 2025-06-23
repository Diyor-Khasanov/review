// | Tushuncha | Ma'nosi                           |
// | --------- | --------------------------------- |
// | Array     | Qiymatlar ro‘yxati                |
// | Object    | Kalit-qiymat juftliklari          |
// | for       | Oldindan belgilangan takrorlash   |
// | while     | Shart to‘g‘ri bo‘lsa, davom etadi |

// Array (Massiv)
// Array — bu bir nechta qiymatlarni bitta o‘zgaruvchida saqlash uchun ishlatiladi.
let mevalar = ["olma", "banan", "uzum"];
// arraydagi narsalar elementlar deyiladi va ularga murojaat qilish uchun mana bunday murojaat qilinadi
console.log(mevalar[0]); // olma
console.log(mevalar[1]); // banan
// [] index deyiladi index takrorlanmaydi computer dasturlash tillarining barchasida index 0 dan boshlanadi !

// arrayga element qo'shib ham bo'ladi va u quyidagicha bo'ladi
mevalar.push("shaftoli"); // oxiriga qo‘shadi

// array uzunligini bilish uchun
console.log(mevalar.length); // 4 ta element bor

// Object (Obyekt)
// Object — bu o‘zgaruvchilar va qiymatlarni kalit-qiymat ko‘rinishida saqlash.
let men = {
  ism: "Diyor",
  yosh: 16,
  kasb: "dasturchi",
};

// objectga murojaat qilish
console.log(men.ism);
console.log(men["yosh"]);

// objectga yangi qiymat qo'shish
men.manzil = "Samarqand";

// object ichida array
let odam = {
  ism: "Diyor",
  yosh: 16,
  hobbi: ["futbol", "shaxmat", "kitob o‘qish"],
};

console.log(odam.hobbi[0]);
console.log(odam.hobbi[1]);

// array ichida object
let talabalar = [
  { ism: "Ali", yosh: 20 },
  { ism: "Diyor", yosh: 16 },
  { ism: "Shoxrux", yosh: 19 },
];

console.log(talabalar[0].ism);
console.log(talabalar[1].yosh);

// for loop (for sikli )
// Ma'lum miqdorda takrorlash, aylanish uchun ishlatiladi.
for (let i = 1; i <= 5; i++) {
  console.log("Salom " + i);
}
// Bunda natija Salom 1 Salom 2 ... Salom 5 gacha boradi bu bizga kodni optimallashtirish uchun kerak bo'ladi va arraydagi elementlar bilan ishlash osonlashishi uchun
let fruits = ["olma", "banan", "uzum"];

for (let i = 0; i < mevalar.length; i++) {
  console.log(fruits[i]);
}

// While (Takrorlash sikli)
// Shart to‘g‘ri bo‘lganda takrorlaydi(cheksiz) va unga o'zimiz false qiymat bersak keyin to'xtaydi (bu server ishlamasligiga olib keladi shuning uchun tavsiya etilmaydi)
let i = 1;

while (i <= 5) {
  console.log("Salom " + i);
  i++;
}

// Bunda ham natija Salom 1 Salom 2 ... Salom 5 gacha boradi

// forning ko'p turlari bor. 1.for...of (har bir element uchun qo'llaniladi)
let fs = ["olma", "banan", "shaftoli"];

for (let f of fs) {
  console.log(f);
}

// 2.for...in (har bir kalit uchun)
let human = { ism: "Diyor", yosh: 16, kasb: "dasturchi" };

for (let kalit in human) {
  console.log(kalit + ": " + human[kalit]);
}

// 3. forEach (arraylar uchun )
let m = ["olma", "banan", "shaftoli"];

m.forEach(function (meva, index) {
  console.log(index + " - " + meva);
});

// amaliy mashq
let mahsulotlar = [
  {
    id: 1,
    nomi: "Olma",
    narx: 5000,
    kategoriya: "Meva",
    mavjud: true,
  },
  {
    id: 2,
    nomi: "Banan",
    narx: 10000,
    kategoriya: "Meva",
    mavjud: true,
  },
  {
    id: 3,
    nomi: "Shokolad",
    narx: 15000,
    kategoriya: "Shirinlik",
    mavjud: false,
  },
  {
    id: 4,
    nomi: "Non",
    narx: 3000,
    kategoriya: "Non mahsuloti",
    mavjud: true,
  },
  {
    id: 5,
    nomi: "Sut",
    narx: 7000,
    kategoriya: "Ichimlik",
    mavjud: false,
  },
];

mahsulotlar.forEach((i) => {
  console.log(i.nomi, i.narx, i.kategoriya, i.mavjud);
});
