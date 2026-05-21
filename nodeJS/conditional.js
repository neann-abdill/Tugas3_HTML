//Soal 1

function hitungTotalBelanja(totalBelanja, isMember){

    let diskon = 0;

    if (totalBelanja >= 500000) {
        diskon = 0.2; //20%

    } else if (totalBelanja >= 300000) {
        diskon = 0.1; //10%
    }

    //jika isMember true eksekusi code ini, kalau is member false jangan eksekusi
    if (isMember) {
        diskon = diskon + 0.05; //5%
    }

    let totalBayar = totalBelanja - (totalBelanja * diskon);
    console.log(`Total yang harus di bayar adalah: ${totalBayar}`);
}

hitungTotalBelanja(700000, true)



// //soal 2
const Login = (Username, Password) => {
    if (Username !== "admin"){
        console.log("Username salah")
    } else if (Password !== "12345") {
        console.log("Password salah")
    } else
        console.log("Login berhasil")
}

Login("admin", "12345");


//soal3
const tahunKabisat = (tahun) => {
    if (tahun % 400 === 0 || tahun % 4===0) {
        console.log("Ini tahun kabisat")
    } else {
        console.log("Ini bukan tahun kabisat")
    }
}

tahunKabisat(2016);