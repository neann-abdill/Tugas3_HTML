const hobbies = ["membaca", "bersepeda", "bermain bola"];

console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

//for loop
const kegiatan = ["membaca", "bersepeda", "bermain bola"];

for(let loop = 0; loop < kegiatan.length; loop++){
    console.log(kegiatan[loop]);
}

//for in
const student = {
    name: "Nehan",
    class: 10,
    score: 100
};

for(const info in student) {
    console.log(`${info} = ${student[info]}`);
}

//soal 1
const bintang = ["*", "**", "***", "****", "*****"];
for(let loop = 0; loop < bintang.length; loop++){
    console.log(bintang[loop]);
}

//soal 2
const angka = [1, 2, 3, 4, 5, 6, 7, 8];
const genap = [];

for(let loop = 0; loop < angka.length; loop++){
    if(angka[loop] % 2 === 0){
        genap.push(angka[loop]);
    }
}
console.log(genap);

//soal 3
function factorial(parameter) {
    let hasil = 1;

    for (let i = 1; i <= parameter; i++) {
        hasil = hasil * i;
}
   console.log(hasil);
}

factorial(9);