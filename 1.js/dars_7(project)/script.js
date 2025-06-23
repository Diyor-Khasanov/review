// Mahsulotlar ro'yxati
let products = [];

// HTML elementlarini olish
let productInput = document.getElementById("productInput");
let addBtn = document.getElementById("addBtn");
let searchInput = document.getElementById("searchInput");
let productList = document.getElementById("productList");

// Mahsulot qo'shish
addBtn.addEventListener("click", function () {
  let productName = productInput.value.trim();

  if (productName !== "") {
    products.push(productName); // Massivga qo'shish
    productInput.value = ""; // Inputni tozalash
    renderProducts(products); // Mahsulotlarni chizish
  }
});

// Mahsulotni ekranga chiqarish
function renderProducts(list) {
  productList.innerHTML = ""; // Oldingi ro'yxatni tozalash

  list.forEach(function (product, index) {
    let li = document.createElement("li");
    li.textContent = product;

    // O'chirish tugmasi
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "O'chirish";
    deleteBtn.addEventListener("click", function () {
      products.splice(index, 1); // Massivdan o'chirish
      renderProducts(products); // Yangi ro'yxatni chizish
    });

    li.appendChild(deleteBtn);
    productList.appendChild(li);
  });
}

// Qidirish funksiyasi
searchInput.addEventListener("input", function () {
  let searchText = searchInput.value.toLowerCase();

  let filtered = products.filter(function (product) {
    return product.toLowerCase().includes(searchText);
  });

  renderProducts(filtered);
});
