function pilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gunting") return comp == "batu" ? "KALAH" : "MENANG";
  if (player == "batu") return comp == "kertas" ? "KALAH" : "MENANG";
  if (player == "kertas") return comp == "gunting" ? "KALAH" : "MENANG";
}

// const tombolGunting = document.querySelector(".gunting");
// tombolGunting.addEventListener("click", function () {
//   const pilihanKomputer = pilihanComputer();
//   const pilihanPlayer = tombolGunting.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//   const gambarComputer = document.querySelector(".area-komputer img");
//   gambarComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// // console.log("komputer: " + pilihanKomputer);
// // console.log("player: " + pilihanPlayer);
// // console.log(hasil);

// const tombolBatu = document.querySelector(".batu");
// tombolBatu.addEventListener("click", function () {
//   const pilihanKomputer = pilihanComputer();
//   const pilihanPlayer = tombolBatu.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//   const gambarComputer = document.querySelector(".area-komputer img");
//   gambarComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const tombolKertas = document.querySelector(".batu");
// tombolKertas.addEventListener("click", function () {
//   const pilihanKomputer = pilihanComputer();
//   const pilihanPlayer = tombolKertas.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//   const gambarComputer = document.querySelector(".area-komputer img");
//   gambarComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

// });

function loop() {
  //ambil gambar
  const imgComputer = document.querySelector(".img-komputer");
  const img = ["gunting", "batu", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  //buat setInterval(fungsi untuk melakukan sesuatu selama berulang-ulang selama interval yang ditentukan)
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      return;
    }
    imgComputer.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

//

const tombol = document.querySelectorAll("li img");
tombol.forEach(function (x) {
  x.addEventListener("click", function () {
    const pilihanKomputer = pilihanComputer();
    const pilihanPlayer = x.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    loop();

    setTimeout(function () {
      const gambarComputer = document.querySelector(".area-komputer img");
      gambarComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
