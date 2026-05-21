// 1. spread operator
//contoh spread operator
const obj1 = {
    name: "nehan",
    age: 16
};

const obj2 = {...obj1};
console.log(obj2);

//penggabungan object
const mentor = {
    name: "irwan",
    age: 22
};

const mapel = {
    mapel: "IT",
    club: "programming"
};

const gabungan = {...mentor,...mapel};
console.log(gabungan);

//Array
const buah = ["apel", "jeruk", "pepaya"];
const buahBaru = [...buah];

console.log(buahBaru);

//penggabungan array
const tim1 = ["farros", "rafie", "salim"];
const tim2 = ["nahdan", "rehan", "qeis"];
const timGabungan = [...tim1,...tim2];

console.log(timGabungan);
console.log(timGabungan[5]);

// 2. rest Operator
const belajarRest = (siswa, nama) => {
    console.log(siswa)
    console.log(nama)
};

belajarRest("Daftar Siswa","farros", "rafie", "salim");