import readline from "readline/promises";
import { index, store, destroy } from "./controller.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let jalan = true;

while (jalan) {
  console.log("");
  console.log("A. Lihat data");
  console.log("B. Tambah data");
  console.log("C. Hapus data");
  console.log("D. Keluar");
  const pilihan = await rl.question("Pilih menu: ");
  console.log("-----------------------------");

  if (pilihan == "A") {
    index();
  } else if (pilihan == "B") {
    const nama = await rl.question("Nama: ");
    const umur = await rl.question("Umur: ");
    const alamat = await rl.question("Alamat: ");
    const email = await rl.question("Email: ");
    store({nama: nama, umur: Number(umur), alamat: alamat, email: email});
    console.log("Data berhasil ditambahkan");
  } else if (pilihan == "C") {
    index();
    const nomor = await rl.question("Hapus data nomor berapa: ");
    const berhasil = destroy(Number(nomor));
    if (berhasil) {
      console.log("Data berhasil dihapus");
    } else {
      console.log("Nomor tidak ditemukan");
    }
  } else if (pilihan == "D") {
    jalan = false;
  } else {
    console.log("Pilihan tidak ada");
  }
}

rl.close();