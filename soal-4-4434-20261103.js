const daftarProduk = ["Keyboard", "Mouse", "Monitor", "Flashdisk", "Headset", "Webcam"];

console.log("1. Jumlah seluruh produk:", daftarProduk.length);
console.log("2. Indeks produk terakhir:", daftarProduk.length - 1);
console.log("3. Nama produk terakhir:", daftarProduk[daftarProduk.length - 1]);

const indeksTengah = Math.floor((daftarProduk.length - 1) / 2);
console.log("4. Nama produk tengah:", daftarProduk[indeksTengah]);