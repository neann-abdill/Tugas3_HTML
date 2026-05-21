
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitung(ekspresi) {

    ekspresi = ekspresi.trim();

    const pola = /^(-?\d+\.?\d*)\s*([\+\-\*\/\%])\s*(-?\d+\.?\d*)$/;
    const cocok = ekspresi.match(pola);

    if (!cocok) {
        return "format salah, contoh: 10 + 5";
    }

    const a = parseFloat(cocok[1]);
    const op = cocok[2];
    const b = parseFloat(cocok[3]);

    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) return "Error, bilangan tidak bisa dibagi dengan nol"
            return a / b;
        case '%': return a % b;
    }
};

function tampilkanBantuan() {
    console.log("")
    console.log("operator yang di dukung: ")
    console.log("+ penjumlahan")
    console.log("- pengurangan")
    console.log("* perkalian")
    console.log("/ pembagian")
    console.log("% modulus")
    console.log("");
    console.log("contoh: 10 + 5 atau 20 * 3.5");
    console.log('ketik "keluar" untuk berhenti');
    console.log("");

}

function tanya() {
    rl.question('>>', (input) => { input = input.trim();

        if (input === "keluar" || input === "exit" || input === "q") {
            console.log("sampai jumpaa...")
            rl.close()
            return;
        }

        if (input === "bantuan" || input === "help") {
            tampilkanBantuan();
            tanya();
            return;
        }

        const hasil = hitung(input);

        console.log(' =' + hasil)
        console.log("")
        tanya();
    })
}

tanya();

