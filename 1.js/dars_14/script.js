const userInput = document.getElementById("userInput");
const userBtn = document.getElementById("userBtn");
const userList = document.getElementById("userList");

let users = JSON.parse(localStorage.getItem("users")) || [];
let editId = null;

function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user}
      <button onclick="editUser(${index})">Tahrirlash</button>
      <button onclick="deleteUser(${index})">O'chirish</button>
    `;
    userList.appendChild(li);
  });

  localStorage.setItem("users", JSON.stringify(users));
}

userBtn.onclick = function () {
  const userName = userInput.value.trim();

  if (userName === "") return;

  if (editId === null) {
    users.push(userName); 
  } else {
    users[editId] = userName; 
    editId = null;
    userBtn.textContent = "Qo'shish";
  }

  userInput.value = "";
  renderUsers();
};

function editUser(index) {
  userInput.value = users[index];
  editId = index;
  userBtn.textContent = "Yangilash";
}

function deleteUser(index) {
  users.splice(index, 1); 
  renderUsers();
}

renderUsers();
