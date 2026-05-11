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
            teksTugas: teksTugas,
            tglTugas: tglTugas,
            status: 'todo'
        });
    }else{
        tasks[editIndeks].name = teksTugas;
        tasks[editIndeks].date = tglTugas;
        editIndeks = -1;
        btnTambah.innerText = "Tambah Tugas";
        btnTambah.style.background = "#4135ea";
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
        listBaru.classList.add(item.status);

        if (index % 2 === 0) {
            listBaru.style.color = "red";
        } else {
            listBaru.style.color = "green";
        }
            listBaru.innerHTML = `
        <div>
        <strong>${item.teksTugas}</strong> <br>
        <small>${item.tglTugas}</small>
        </div>
        <div class="btn-group">
        <select onchange="updateStatus(${index}, this.value)">
            <option value="todo" ${item.status === 'todo' ? 'selected' : ''}>Todo</option>
            <option value="on-progress" ${item.status === 'on-progress' ? 'selected' : ''}>On Progress</option>
            <option value="done" ${item.status === 'done' ? 'selected' : ''}>Done</option>
        </select>
        <button class="edit" onclick="persiapanEdit(${index})">Edit</button>
        <button class="hapus" onclick="hapusTugas(${index})">Hapus</button>
        </div>
    `;

    daftarTugas.appendChild(listBaru);
 });
}

function persiapanEdit(index) {
    inputTugas.value = tasks[index].teksTugas;
    inputTanggal.value = tasks[index].tglTugas;
    
    editIndeks = index; 
    btnTambah.innerText = "Simpan"; 
    btnTambah.style.background = "#f59e0b";
    inputTugas.focus();
}

function hapusTugas(index) {
    if(confirm("Yakin hapus?")) {
        tasks.splice(index, 1);
        render();
    }
}

function updateStatus(index, statusBaru) {
    tasks[index].status = statusBaru;
    render();
}