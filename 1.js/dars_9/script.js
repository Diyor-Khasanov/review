// Promise turlari
// | Holat                | Ma’nosi                    |
// | -------------------- | -------------------------- |
// | Pending              | Jarayonda (hali tugamagan) |
// | Fulfilled (Resolved) | Muvaffaqiyatli tugadi      |
// | Rejected             | Xatolik yuz berdi          |

// | Tushuncha   | Vazifasi                              |
// | ----------- | ------------------------------------- |
// | Promise     | Asinxron natijani boshqarish          |
// | then/catch  | Promise tugashi yoki xatosini ushlash |
// | async       | Funksiyani asinxron qilish            |
// | await       | Promise tugaguncha kutish             |
// | try...catch | Xatolarni boshqarish                  |

// to'g'ri promise
let vada = new Promise((resolve, reject) => {
  let xato = false;

  if (!xato) {
    resolve("Muvaffaqiyatli tugadi");
  } else {
    reject("Muvaffaqiyatsiz tugadi ya'ni xatolik yuz berdi");
  }
});

vada
  .then((natija) => {
    console.log(natija);
  })
  .catch((xato) => {
    console.log(xato);
  });

//   xato promise
let bironVada = new Promise((resolve, reject) => {
  let err = false;

  if (err) {
    console.log("To'g'ri");
  } else {
    console.log("Xato");
  }
});

bironVada
  .then((natija) => {
    console.log(natija);
  })
  .catch((xatolik) => {
    console.log(xatolik);
  });

// async await promise try catch
async function getData() {
  try {
    console.log("Ma'lumot kutilmoqda");

    let natija = await fakePromise();

    console.log(`Natija ${natija}`);
  } catch (xato) {
    console.log(`Xatolik ${xato}`);
  }
}

function fakePromise() {
  return new Promise((resolve, reject) => {
    let tugri = false;

    setTimeout(() => {
      if (tugri) {
        resolve("To'g'ri");
      } else {
        reject("Xato");
      }
    }, 2000);
  });
}

getData();

// amaliy ish
function simulatsiya() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ma'lumot keldi");
    }, 2000);
  });
}

async function ishlash() {
  console.log("Ma'lumot kelmoqda");
  let natija = await simulatsiya();
  console.log(`Natija ${natija}`);
}
