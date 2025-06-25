// | Tushuncha     | Ma’nosi                      |
// | ------------- | ---------------------------- |
// | Destructuring | Ma’lumotlarni ajratib olish  |
// | Spread (...)  | Ma’lumotlarni ochish         |
// | Rest (...)    | Qolgan ma’lumotlarni yig‘ish |

// | Operator | Maqsad | Misol               |
// | -------- | ------ | ------------------- |
// | `...`    | Spread | `let b = [...a]`    |
// | `...`    | Rest   | `function(a, ...b)` |

// object destructuring - user.name emas barcha joylarda name deb ishlatib ketsak bo'ladi endi
let user = { name: "Diyor", age: 16 };

let { name, age } = user;
console.log(name);
console.log(age);

// array destructuring - fruits[0] emas meva1 debishlati ketsak bo'ladi shu faylimizda
let fruits = ["olma", "limon", "olcha", "uzum"];
let [meva1, meva2] = fruits;

console.log(meva1);
console.log(meva2);

// array spread. array a dagi barcha ma'lumotlar array b ga keldi. Natija: 1, 2, 3, 4, 5
let a = [1, 2, 3];
let b = [...a, 4, 5];

console.log(b);

// object spread. user1dagi barcha ma'lumotlar newUserga o'tdi. Natija: Diyor, 16, Samarqand
let user1 = { ism: "Diyor", yosh: 16 };
let newUser = { ...user1, shahar: "Samarqand" };

console.log(newUser);

// rest. arrayda va functionda qo'llaniladi. arrayda
let [first, second, ...additional] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(additional); // 1 va 2 dan tashqari barchasi

// functionda rest
function yigindi(...sonlar) {
  let total = sonlar.reduce((a, b) => a + b, 0);
  console.log(total);
}

yigindi(1, 2, 3, 4, 5); // 15

// amaliy mashq
let obj = { nomi: "Olma", narxi: 15000 };
let { nomi, narxi } = obj;

console.log(nomi, narxi);
