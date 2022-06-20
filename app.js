import data from "./items.json" assert { type: "json" };

const last = document.querySelector(".last");
const prices = document.querySelectorAll(".price");
const sellBtns = document.querySelectorAll(".sell");
const buyBtns = document.querySelectorAll(".buy");
const adet = document.querySelector(".adet");
const sepetim = document.querySelector(".sepetim");
const item = document.querySelectorAll(".item");
const itemName = document.querySelectorAll(".item-name");
const container = document.querySelector(".section-container");
const takeMoneyBtn = document.querySelector(".take-money-btn");
const corap = document.querySelector(".corap");
const sakiz = document.querySelector(".sakiz");
const bisiklet = document.querySelector(".bisiklet");
const araba = document.querySelector(".araba");
const apartman = document.querySelector(".apartman");
const sepetItems = document.querySelectorAll(".sepetim > p");
const img = document.querySelectorAll("img");
const pieces = document.querySelectorAll(".adet");

let totalMoney = 1000000;
last.innerHTML = `${totalMoney} TL paranız var`;

pieces.forEach((a, b) => {
  a.innerText = `Ürün Fiyatı : ${data.piece[b]} TL`;
});

prices.forEach((a, b) => {
  a.innerText = `Ürün Fiyatı : ${data.price[b]} TL`;
});

itemName.forEach((a, b) => {
  a.innerText = `Ürün Adı : ${data.items[b]}`;
});
img.forEach((a, b) => {
  a.setAttribute("src", `${data.images[b]}`);
});

buyBtns.forEach((buyBtn, idx) => {
  buyBtn.addEventListener("click", (e) => {
    if (totalMoney >= data.price[idx]) {
      totalMoney -= data.price[idx];
      last.innerHTML = `${totalMoney} TL paranız var`;
      data.piece[idx]++;
      pieces.forEach((a, b) => {
        a.innerText = `Ürün Fiyatı : ${data.piece[b]} TL`;
        corap.innerHTML = `Çorap : ${data.piece[0]} Adet`;
        sakiz.innerHTML = `Sakız : ${data.piece[1]} Adet`;
        bisiklet.innerHTML = `Bisiklet : ${data.piece[2]} Adet`;
        araba.innerHTML = `Araba : ${data.piece[3]} Adet`;
        apartman.innerHTML = `Apartman : ${data.piece[4]} Adet`;
      });
    } else {
      alert("Yetersiz Bakiye");
    }
  });
});

sellBtns.forEach((buyBtn, idx) => {
  buyBtn.addEventListener("click", (e) => {
    if (data.piece[idx] > 0) {
      totalMoney += data.price[idx];
      last.innerHTML = `${totalMoney} TL paranız var`;
      data.piece[idx]--;
      pieces.forEach((a, b) => {
        a.innerText = `Ürün Fiyatı : ${data.piece[b]} TL`;
        a.innerText = `Ürün Fiyatı : ${data.piece[b]} TL`;
        corap.innerHTML = `Çorap : ${data.piece[0]} Adet`;
        sakiz.innerHTML = `Sakız : ${data.piece[1]} Adet`;
        bisiklet.innerHTML = `Bisiklet : ${data.piece[2]} Adet`;
        araba.innerHTML = `Araba : ${data.piece[3]} Adet`;
        apartman.innerHTML = `Apartman : ${data.piece[4]} Adet`;
      });
    } else {
      alert("Satmaya çalıştığın ürün sepetinde bulunmuyor");
    }
  });
});

takeMoneyBtn.addEventListener("click", () => {
  totalMoney += 500000;
  last.innerHTML = `${totalMoney} TL paranız var`;
});
