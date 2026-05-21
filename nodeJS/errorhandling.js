//throw error
const age = -5;

if (age <= 0) {
    throw new Error('Belom cukup umur dek dekk');
}

// error handling
try {
    const hasil = 10;
    const hasil2 = hasil.topUpperCase();
    console.log(hasil2);
} catch (error) {
    console.error(error)
}

//soal 1
function cekUmur(umur) {
    try {
        if (isNaN(umur)) {
            throw new Error('Input harus berupa angka');
        }

        //cek apakah umur nya 0
        if (umur < 0) {
            throw new Error('Umur tidak valid');
        }

        console.log('Umur:', umur);

    }

    //catch error
    catch (error) {
        console.log(error.message);
    }

    finally {
        console.log('selesai');
    }
}

cekUmur(-5);

//soal 2
function parseData(parsingdong) {
    try {
        let hasil = JSON.parse(parsingdong);
        console.log(hasil);
    } catch (error) {
        console.log('error');
        console.log('JSON tidak valid');
    }
}

parseData('{"nama": "Nehan" }');

//soal 3
function transfer(saldo, jumlahTransfer) {
    try {
        if (jumlahTransfer > saldo) {
            throw new Error('Saldo Tidak Cukup');
        }

        else {
            console.log(`Transfer Berhasil`);
        }

    } catch (error) {
        console.log(error.message);
    }
}

transfer(100000, 200000);

//soal 4
function bagiAngka(a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa dibagi dengan nol");
        }
        let hasil = a / b;
        console.log(`Hasil pembagian: ${hasil}`);
    } catch (error) {
        console.log(error.message);
    }
}


bagiAngka(5, 5);


//soal 5
const validasiUmur = (umur) => {
    try {
        if (umur < 18) {
            throw new Error("Umur belum mencukupi");
        }
        console.log("Akses diberikan");
    } catch (error) {
        console.log(error.message);
    }
}

validasiUmur(18);