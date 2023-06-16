var listPesan = JSON.parse(localStorage.getItem('listPesan')) || [];
console.log(listPesan);

// Tampilkan pesan yang telah disimpan pada saat halaman dimuat
window.addEventListener('DOMContentLoaded', function() {
    tampilkanDataPesan();
});

function kirimPesan() {
    var namas = document.getElementById("nama").value;
    var pesans = document.getElementById("pesan").value;
    
    // Lakukan validasi jika diperlukan
    if (nama === "" || pesan === "") {
      alert("Silakan lengkapi semua field.");
      return;
    }
    
    // Simpan pesan ke Local Storage
    var pesanData = {
      nama: namas,
      pesan: pesans
    };
    listPesan.push(pesanData);
    
    localStorage.setItem('listPesan', JSON.stringify(listPesan));

    
    tampilkanDataPesan()
    
    // Clear field setelah pengiriman pesan
    document.getElementById("nama").value = "";
    document.getElementById("pesan").value = "";
}

// Fungsi untuk mengedit pesan
function editPesan() {
    var index = parseInt(this.getAttribute("data-index"));
    var pesanData = localStorage.getItem('listPesan');
    var pesanArray = JSON.parse(pesanData);
    var pesanObj = pesanArray[index];
    
    // Mengisi kembali input field dengan nilai pesan yang akan di-edit
    document.getElementById("nama").value = pesanObj.nama;
    document.getElementById("pesan").value = pesanObj.pesan;
    
    // Menghapus pesan yang akan di-edit dari Local Storage
    pesanArray.splice(index, 1);
    localStorage.setItem('listPesan', JSON.stringify(pesanArray));
    
    // Menampilkan kembali data pesan dalam tabel
    tampilkanDataPesan();
}
  
// Fungsi untuk menghapus pesan
function hapusPesan() {
    var index = parseInt(this.getAttribute("data-index"));
    var pesanData = localStorage.getItem('listPesan');
    var pesanArray = JSON.parse(pesanData);

    // Menghapus pesan dari array
    pesanArray.splice(index, 1);
    localStorage.setItem('listPesan', JSON.stringify(pesanArray));

    // Menampilkan kembali data pesan dalam tabel
    tampilkanDataPesan();
}

//Fungsi untuk menampilkan pesan
function tampilkanDataPesan() {
    var table = document.getElementById("pesanTable");
    listPesan = JSON.parse(localStorage.getItem('listPesan')) || [];
    while (table.rows.length > 1) {
        table.deleteRow(-1);
      }


    listPesan.forEach(function(pesan,index) {
        if (pesan){
            // Buat baris baru dalam tabel
            var row = table.insertRow(-1);
    
            // Tambahkan sel nama
            var cell1 = row.insertCell(0);
            cell1.innerHTML = pesan.nama;
    
            // Tambahkan sel pesan
            var cell2 = row.insertCell(1);
            cell2.innerHTML = pesan.pesan;

            // Tambahkan tombol Edit
            var cell3 = row.insertCell(2);
            var editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            editButton.setAttribute("data-index", index);
            editButton.addEventListener("click", editPesan);
            cell3.appendChild(editButton);
        
            
            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute("data-index", index);
            deleteButton.addEventListener("click", hapusPesan);
            cell3.appendChild(deleteButton);
            
        }
      });
}
    