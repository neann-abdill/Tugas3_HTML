// const text = document.querySelector("#text");
// const button = document.querySelector("#btn");
// const resetButton = document.querySelector("#btn2");

// button.addEventListener("click", function(){
//     text.innerText = "Button di klik Text berubah";
// });

// resetButton.addEventListener("click", function(){
//     text.innerText = "Riset berhasil";
// });

//mouse over
// const mouseover = document.querySelector("#muover");

// mouseover.addEventListener("mouseover", function(){
//     mouseover.style.backgroundColor = "red";

// });

// const allmouse = document.querySelector("#muover");

// allmouse.addEventListener("mouseout", function(){
//     allmouse.style.backgroundColor = "blue";
// })

keydown
const kata = document.querySelector("#input");

kata.addEventListener("keydown", function(){
    console.log("Yang di tekan", event.key);
})

keyup
const cari = document.querySelector("#input2");

cari.addEventListener("keyup", function(){
    console.log(`yang dicari ${cari.value}`)
})