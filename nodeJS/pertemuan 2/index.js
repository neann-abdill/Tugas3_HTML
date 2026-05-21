// Variable
// Const untuk variabel yang tidak akan di ubah nilainya nanti (permanen)
const Nama_Lengkap = "Nehan Abdillah"
const kelas = 10;

// Let untuk variabel yang bisa di ubah nilainya nanti
let nama = "nehan";

// Cara penulisan variable
const nama_lengkap = "Nehan Abdillah"
const namaLengkap = "Nehan Abdillah"


// Tipe data
// String, Number, Boolean (True atau False), Array, Object
// 1. String
const Teks = "Saya sedang belajar JS"

// 2. Number
const Umur = 16;

// Boolean (True atau False)
const Jawaban = 10 < 20;
console.log(jawaban);

// 4. Array
const namaSiswa = ["Nehan", "Paros", "Rafie"];

// 5. Object
const identitasSiswa = {
    id: 1,
    nama_lengkap: "Nehan Abdillah",
    username: "neann",
    umur: 16,

};

// 6. Array of Object
const Kumpulan_object = [{}, {}, {}];

// operator aritmatika

let a = 10;
let b = 3;

console.log("penjumalahan", a + b);
console.log("pengurangan", a - b);
console.log("perkalian", a * b);
console.log("pembagian", a / b);
console.log("modulus", a % b);
console.log("perpangkatan", a ** b);

// operator penugasan

let x = 10;

x = x + 3;
x += 3;
console.log(x);

// operator logika (boolean)
let logika1 = true;
let logika2 = false;

//AND
console.log(logika1 && logika2);
//OR
console.log(logika1 || logika2);
//NOT (!)
console.log(logika1);

// operator perbandingan
let z = 10;
let v = 20;
let c = "20";

console.log("perbandingan ==" ,v == c);
console.log("perbandingan ===",v === c);
console.log("lebih dari", z > v);
console.log("kurang dari", z < v);
console.log("lebih dari sama dengan", z >= v);
console.log("kurang dari sama dengan", z <= v);
