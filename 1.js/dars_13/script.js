let productInput = document.querySelector("#productInput");
let addBtn = document.querySelector("#addBtn");
let productList = document.querySelector("#productList");

let editId = null;
let products = JSON.parse(localStorage.getItem("products")) || [];

const renderProducts = () => {
  productList.innerHTML = "";

  products.forEach((p, i) => {
    const li = document.createElement("li");

    li.innerHTML = `
        ${p}
        <button onclick='editProduct(${i})'>Edit</button>
        <button onclick='deleteProduct(${i})'>Delete</button>
        `;
    productList.appendChild(li);

    localStorage.setItem("products", JSON.stringify(products));
  });
};

addBtn.addEventListener("click", () => {
  const productName = productInput.value.trim();

  if (productName === "") return;

  if (editId === null) {
    products.push(productName);
  } else {
    products[editId] = productName;
    editId = null;
    addBtn.textContent = `Qo'shish`;
  }

  productInput.value = "";
  renderProducts();
});

const editProduct = (i)  => {
    productInput.value = products[i]
    editId = i
    addBtn.textContent = `Yangilash`
}

const deleteProduct = (i) => {
    products.splice(i, 1)
    renderProducts()
}

renderProducts()