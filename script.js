// 5
const stok = 7;

if (stok === 0) {
    console.log("Habis");
} else if (stok < 5) {
    console.log("Stok menipis");
} else {
    console.log("Stok aman");
}

// 6
for (let i = 10; i >= 1; i--) {
    console.log("Perulangan ke-", i);
}
for (let i = 10; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log("Perulangan ke-" + i + " (" + i + " itu angka genap)");
    } else {
        console.log("Perulangan ke-" + i + " (" + i + " itu angka ganjil)");
    }
}

// 7
const daftarBarang = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor"
];

console.log(daftarBarang.length);

for (let i = 0; i < daftarBarang.length; i++) {
    console.log(daftarBarang[i]);
}

// 8
function sapa() {
     console.log("Halo, selamat datang!");
 }
 sapa();


// 9
function tentukanStatusStok(stok) {
  if (stok === 0) {
    return "Habis";
  } else if (stok < 5) {
    return "Menipis";
  } else {
    return "Aman";
  }
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));

// 10
const hitungLuas = function (panjang, lebar) {
    return panjang * lebar;
};

console.log(hitungLuas(5, 3));

// 11

// catatan :
// 1. kalau objeck itu = {}, dan kalau rey itu []
