// | Xususiyat       | LocalStorage                                           | SessionStorage                                          |
// | --------------- | ------------------------------------------------------ | ------------------------------------------------------- |
// | Saqlash muddati | Brauzer yopilmaguncha saqlanadi, ochilsa ham o'chmaydi | Faqat brauzer sessiyasi tugaguncha (yopilganda o'chadi) |
// | Hajmi           | Katta (taxminan 5-10 MB)                               | Cheklangan (taxminan 5 MB)                              |
// | Qo‘llanilishi   | Uzoq vaqt ma’lumot saqlash                             | Vaqtinchalik ma’lumot saqlash                           |
// | Brauzer yopilsa | Ma'lumot saqlanib qoladi                               | Ma'lumot o'chib ketadi                                  |

// local storage and session storage
// setItem -> Ma'lumot qo'shadi
// getItem -> Ma'lumot o'qiydi
// removeItem -> Bitta ma'lumotni o'chiradi
// clear -> Barcha ma'lumotni o'chiradi

// local storage
// Ma'lumot saqlash
localStorage.setItem("ism", "Diyor");
// 1-key  2-des

// Ma'lumot o'qish
let ism = localStorage.getItem("ism");
console.log(ism);

// Ma'lumot o'chirish bitta
localStorage.removeItem("ism");

// localStorageni tozalash
localStorage.clear();

// session storage

// Ma'lumot qo'shish
sessionStorage.setItem("yosh", 16);

// Ma'lumot o'qish
let yosh = sessionStorage.getItem("yosh");
console.log(yosh);

// Ma'lumot o'chirish
sessionStorage.removeItem("yosh");

// session storageni tozalash
sessionStorage.clear();

// amaliy ish
let mahsulotlar = JSON.parse(localStorage.getItem("mahsulotlar")) || [];


function mahsulotlarniChopEt() {
    let royxat = document.getElementById("mahsulotlarRo'yxati");
    royxat.innerHTML = ""; 

    mahsulotlar.forEach(mahsulot => {
        royxat.innerHTML += `<li>${mahsulot.nomi} - ${mahsulot.narx} so'm</li>`;
    });
}

mahsulotlarniChopEt();

document.getElementById("saqlashBtn").addEventListener("click", function() {
    let nomi = document.getElementById("mahsulotNomi").value.trim();
    let narx = document.getElementById("mahsulotNarxi").value.trim();

    if (nomi === "" || narx === "") {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    let yangiMahsulot = {
        id: mahsulotlar.length + 1,
        nomi: nomi,
        narx: narx
    };

    mahsulotlar.push(yangiMahsulot);

    // LocalStorage ga saqlash
    localStorage.setItem("mahsulotlar", JSON.stringify(mahsulotlar));

    // Ma'lumotni ekranga chiqarish
    mahsulotlarniChopEt();

    // Inputlarni tozalash
    document.getElementById("mahsulotNomi").value = "";
    document.getElementById("mahsulotNarxi").value = "";
});
