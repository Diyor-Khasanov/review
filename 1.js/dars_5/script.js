// push(). Oxiriga element qo‘shadi.
let cars = ["cobalt", "gentra"];
cars.push("malibu");
console.log(cars);

// pop(). Oxirgi elementni o'chiradi
cars.pop();
console.log(cars);

// shift(). Boshidagi elementni o'chiradi
cars.shift();
console.log(cars);

// unshift(). Boshiga element qo'shadi
cars.unshift("nexia");
console.log(cars);

// splice(). element qo'shadi yoki o'chiradi
let nums = [1, 2, 3, 4, 5];
// nums.splice(index, o'chirish soni,( majburiy emas( qo'shiladigan raqam yoki son)))
nums.splice(1, 2, 99);
console.log(nums);

// slice(). arraydan nusxa olib o'ziga kerakli bo'lak kesadi
const NEW = nums.slice(0, 2);
console.log(NEW);

// concat(). bergan arraylarni birlashtiradi
let a = [1, 2];
let ab = [3, 4];
let abс = [5, 6];
let res = a.concat(ab, abc);
console.log(res);

// indexOf(). array ichidagi element indexini topadi
console.log(res.indexOf(3));

// includes(). Arrayni ichida shunday element mavjud yoki yo'qligini tekshiradi
console.log(res.includes(8));

// forEach(). array ichidagi har bir element ichida yuradi. callback function qabul qiladi. param qabul qiladi argument emas
res.forEach((item) => {
  console.log(item);
});

// map(). array ichidagi har bir elementni o'zgartirib yangi array yaratadi. callback function qabul qiladi param bilan bu ham argument qabul qilmaydi
let result = res.map((item) => {
  return item * 2;
});
console.log(result);

// filter(). bergan shartingizga ko'ra elementlarni filterlaydi
let big = res.filter((item) => {
  return item > 2;
});
console.log(big);

// find(). bergan shartingizga mos arrayni ichida 1-elementni topadi
let top = res.find((item) => {
  return item > 2;
});
console.log(top);

// findIndex(). bergan shartingizga mos 1-elementning indexini topadi
let findIndex = res.findIndex((item) => {
  return item > 2;
});
console.log(findIndex);

// reduce(). arraydagi barcha elementlarni 1 taga qisqartirib yig'adi
let summa = res.reduce((item) => {
  return total + item;
}, 0);
console.log(summa);

// sort(). Elementlarni tartiblaydi
let tartib = [3, 1, 4, 2];
tartib.sort();
console.log(tartib);

// reverse(). arrayni teskariga o'tkazadi
tartib.reverse();
console.log(tartib);

// join(). Arrayni 1 ta stringga o'tkazadi
let text = ["salom", "dunyo"];
console.log(text.join(" "));

// every(). arraydagi barcha element bergan shartingizga mos bo'lsa true qytaradi
let raqamlar = [2, 6, 8];
let natija = raqamlar.every((item) => {
  return item % 2 === 0;
});
console.log(natija);

// some(). kamida 1 ta element shartga mos bo'lsa true
let nat = raqamlar.some((item) => {
  return item > 5;
});
console.log(nat);

// amaliy mashq
let foydalanuvchilar = [
  "Ali",
  "Diyor",
  "Shoxrux",
  "Jasur",
  "Samandar",
  "Temur",
];

function foydalanuvchiQidir(Qism) {
  let natija = foydalanuvchilar.filter(function (ism) {
    return ism.toLowerCase().includes(Qism.toLowerCase());
  });

  if (natija.length > 0) {
    console.log("Topildi: " + natija.join(", "));
  } else {
    console.log("Foydalanuvchi topilmadi.");
  }
}

foydalanuvchiQidir("di");
foydalanuvchiQidir("a");
foydalanuvchiQidir("zafar");
