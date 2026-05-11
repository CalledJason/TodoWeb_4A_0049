let tasks=[];
let editIndeks = -1;

const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("dateInput");

// function edit tambah dan hapus
btnTambah.addEventListener("click", function(){
    const teksTugas = inputTugas.value;
    const tglTugas = inputTanggal.value;

    if(teksTugas === "" || tglTugas === "") {
        alert("Data harus diisi!");
        return;
    }

    if(editIndeks === -1){
        tasks.push({
            name: teksTugas
            date: tglTugas
            status: 'todo'
        });
    }else{
        tasks[editIndeks].name = teksTugas;
        tasks[editIndeks].date = tglTugas;
        editIndeks = -1;
        btnTambah.innerText = "Tambah Tugas";
        btnTambah.style.background = "#ff4b2b";
    }
    inputTugas.value = "";
    inputTanggal.value = "";
    render();
});

// function untuk update list
function render() {
    daftarTugas.innerHTML = "";

    tasks.forEach(function(item, index) {
        let listBaru = document.createElement("li");
        listBaru.classList.add(item.status); // Tambah warna berdasarkan status

        // Logika warna teks selang-seling (Request Dosenmu)
        if (index % 2 === 0) {
            listBaru.style.color = "red";
        } else {
            listBaru.style.color = "green";
        }
    }
};