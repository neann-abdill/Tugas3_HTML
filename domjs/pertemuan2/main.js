// const judul = document.querySelector("#judul");
// judul.innerText = "Judul pertemuan 2 telah diubah";
// judul.style.color = "blue";
// judul.style.fontSize = "10px";

// const paragraf = document.querySelector(".paragraf");
// paragraf.innerText = "Paragraf telah di ganti";

// const paragraf2 = document.querySelector("span");
// paragraf2.innerText = ("Paragraf 2 telah di ganti");

// const h2 = document.querySelectorAll("h2");
// h2[0].innerText = ("H2 di ganti semua");

// const sp = document.querySelector("span");
// sp.innerText = ("Ganti dong");

function Login() {
    alert("Login berhasil");
    console.log("Halo, telah login");
};

const buttonAdd = document.querySelector("#btn");
buttonAdd.addEventListener("click", function(){
    alert("ini add event listener")
})
buttonAdd.addEventListener("click", function(){
    alert("ini add event listener ke 2")
})