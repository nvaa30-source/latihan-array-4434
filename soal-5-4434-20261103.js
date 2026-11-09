const namaSiswa = ["lia", "ipah", "melia", "fahri", "faqih"];
const nilaiSiswa = [86, 90, 79, 89, 93];

console.log("1. Jumlah siswa:", namaSiswa.length);
console.log("2. Siswa pertama:", namaSiswa[0], "-", nilaiSiswa[0]);
console.log("3. Siswa terakhir:", namaSiswa[namaSiswa.length - 1], "-", nilaiSiswa[nilaiSiswa.length - 1]);

// Perbarui nilai Budi dan Eko
nilaiSiswa[1] = 88;
nilaiSiswa[4] = 95;

console.log("6. Siswa ketiga:", namaSiswa[2], "-", nilaiSiswa[2]);
console.log("7. Seluruh nama:", namaSiswa);
console.log("7. Seluruh nilai baru:", nilaiSiswa);