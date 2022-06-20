<<<<<<< HEAD
=======
import data from "./items.json" assert { type: "json" };

>>>>>>> 07b9b69a44ead2da1c3c580185c6af38a359e5e4
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
const yuzuk = document.querySelector(".yuzuk");
const sepetItems = document.querySelectorAll(".sepetim > p");
const img = document.querySelectorAll("img");
const pieces = document.querySelectorAll(".adet");

const data = {
  items: ["Çorap", "Sakız", "Bisiklet", "Araba", "Apartman", "Yüzük"],
  price: [3, 1, 1500, 250000, 500000, 1000000],
  images: [
    "https://www.pngarts.com/files/1/Socks-PNG-Background-Image.png",
    "https://www.pngmart.com/files/7/Gum-PNG-Transparent-Picture.png",
    "https://www.pngarts.com/files/4/Bicycle-PNG-Pic.png",
    "https://cdn.pixabay.com/photo/2013/07/12/14/47/car-148786_960_720.png",
    "https://www.muhasebenews.com/wp-content/uploads/2019/08/ev-apartman-daire-emlak-al%C4%B1m-sat%C4%B1m-komisyon-daire.png",
    "https://www.erospirlanta.com/pirlanta-090-karat-tektas-yuzuk-pirlanta-tektas-eros-pirlanta-6126-37-B.png",
  ],
  piece: [0, 0, 0, 0, 0, 0],
};

let totalMoney = 1000000;
last.innerHTML = `${totalMoney} TL paranız var`;

pieces.forEach((a, b) => {
  a.innerText = `Ürün Adeti : ${data.piece[b]} `;
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
        a.innerText = `Ürün Adeti : ${data.piece[b]} `;
        corap.innerHTML = `Çorap : ${data.piece[0]} Adet`;
        sakiz.innerHTML = `Sakız : ${data.piece[1]} Adet`;
        bisiklet.innerHTML = `Bisiklet : ${data.piece[2]} Adet`;
        araba.innerHTML = `Araba : ${data.piece[3]} Adet`;
        apartman.innerHTML = `Apartman : ${data.piece[4]} Adet`;
        yuzuk.innerHTML = `Yüzük : ${data.piece[5]} Adet`;
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
        a.innerText = `Ürün Adeti : ${data.piece[b]} `;
        corap.innerHTML = `Çorap : ${data.piece[0]} Adet`;
        sakiz.innerHTML = `Sakız : ${data.piece[1]} Adet`;
        bisiklet.innerHTML = `Bisiklet : ${data.piece[2]} Adet`;
        araba.innerHTML = `Araba : ${data.piece[3]} Adet`;
        apartman.innerHTML = `Apartman : ${data.piece[4]} Adet`;
        yuzuk.innerHTML = `Yüzük : ${data.piece[5]} Adet`;
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
