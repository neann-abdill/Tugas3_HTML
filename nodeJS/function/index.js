// Function
// kode blok yang bisa kita pakai secara berulang ulang

// Basic Function
function HelloWorld() {
    console.log("Haloo Dunia");
    console.log("Selamat Datang");
    console.log("Saya Sedang Belajar Function");
};


//Arrow function
const HelloWorld3 = () => {
    console.log("Halo Dunia 2")
}

HelloWorld();
HelloWorld3();


// Function Parameter
//function biasa
function HelloWorld2(nama) {
    console.log("Selamat Sore", nama);
}

HelloWorld2("Nehan");
HelloWorld2("Pria Solo");

function Matematika(x,y){
    console.log(3*x + y)
};

Matematika(5,7);
Matematika(2,22);

//Arrow Function
const Matematika2 = (x,y) => {
console.log(x+y)
}

Matematika2(2,5);

//Return Function
//Function yang menghasilkan sebuah nilai dan nilai tsb bisa di pakai di luar function
//Function biasa
function Tambah(a,b){
    return a+b;
}

let hasil = Tambah(2,2); //isi variable = 4
console.log(hasil);

function Sapa(nama){
    // const hasil = "Selamat Datang " + nama;
    const hasil = `Selamat Pagi ${nama}`
    return hasil;
}

let tangkap = Sapa("Nehan");
console.log(tangkap);

//Arrow function
const Sapa2 = (nama, saya) => {
    const hasil = `Selamat atas Kemenangan nya ${nama}, Saya ${saya}`;
    return hasil;
};

let tangkap2 = Sapa2("Lebron", "Nehan Abdill",);
console.log(tangkap2);

