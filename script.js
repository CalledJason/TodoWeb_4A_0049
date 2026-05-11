let tasks=[];
let editIndeks = -1;

const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("dateInput");

// function edit tambah dan hapus
btnTambah.addEventListener("click", function(){
    const teksTugas = inputTugas.value;
    const tanggal = inputTanggal.value;

    if(teksTugas === "" || tanggal === "") {
        alert("Data harus diisi!")
        return;
    }

    let listBaru = document.createElement("li");
    let spanBaru = document.createElement("span");

    spanBaru.innerHTML = teksTugas;

    listBaru.appendChild(spanBaru);

    daftarTugas.appendChild(listBaru);

    const warnaBaru = document.querySelectorAll("li");
    warnaBaru.forEach((item, index) => {
        if(index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.value = "";
});
