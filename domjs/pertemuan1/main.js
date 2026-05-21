//get by id
const judul = document.getElementById("judul");
// judul.innerText = "Judul Saya Ubah";
// judul.innerHTML = "<p>ini anaknya</p>"
judul.style.fontSize = "5px";
judul.style.color = "red";

//get by classname
const judul2 = document.getElementsByClassName("judul2");
// judul2[0].innerText = "Judul2 Juga Diubah";
// judul2[0].innerHTML = "<p>ini anaknya judul2</p>"
judul2[0].style.color = "blue";
judul2[0].style.fontSize = "30px";

//get by tagname
const paragraf = document.getElementsByTagName("p");
paragraf[0].innerText = "Paragraf saya ganti";
paragraf[0].innerHTML = "<p>ini anaknya paragraf</p>"