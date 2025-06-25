// | Tushuncha | Ma’nosi                          |
// | --------- | -------------------------------- |
// | try       | Xato bo‘lishi mumkin bo‘lgan joy |
// | catch     | Xato bo‘lsa ishlaydi             |
// | throw     | O‘zim xato yarataman             |
// | Error     | Yangi xato yaratish              |

// try {
//   console.log("Dastur ishga tushdi");
//   let ism = undefined;
//   console.log(ism.toUpperCase());
//   console.log("Dastur davom etmoqda");
// } catch (xato) {
//   console.log(`Xatolik: ${xato}`);
// }

// console.log("Dastur tugadi");

// amaliy mashq
try {
  let yosh = prompt("Yoshingizni kiriting");
  if (isNaN(yosh)) {
    throw new Error("Siz kira olmaysiz");
  }
  if (yosh > 100) {
    throw new Error("Siz kira olmaysiz");
  }
  if (yosh < 1) {
    throw new Error("Siz kira olmaysiz");
  }
} catch (xato) {
  console.log("Xatolik: " + xato);
}
