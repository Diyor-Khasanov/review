// O'zgaruvchilar
let a = 15  //optimal variant o'zgartirsa bo'ladi
const b = 16 //optimal variant o'zgartirsa bo'lmaydi
var c = 17  //nooptimal variant o'zgartirsa bo'ladi

let e; // null

// console.log
console.log("hello")
console.log(a)

// ma'lumot turlari
let int = 15
let float = 15.16
let bool = true || false
let str = "5151512asdasdad" || '666asdas56asd55' || `dsfsdasdasd45s4d65adsa`

// alert, prompt, confirm 
alert("Salom")

let p = prompt("Biron nima kiriting")

let davomEtish = confirm("Saytga kirishni davom ettirasizmi?");
if (davomEtish) {
    alert("Xush kelibsiz!");
} else {
    alert("Xayr!");
}


// amaliy mashq
let ism = prompt("Ismingizni kiriting")
let yosh = prompt("Yoshingizni kiriting")

alert(`Sizning yoshingiz ${yosh}`)
alert(`Sizning ismingiz ${ism}`)