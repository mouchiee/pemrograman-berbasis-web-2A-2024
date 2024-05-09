// Mendapatkan elemen input dan daftar tugas
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas
function addTask() {
    let taskText = taskInput.value;
    if (taskText.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = '<input type="checkbox" onclick="toggleCompleted(this)">' + taskText 
        + '<button onclick="editTask(this)" class="newButton1">Ubah</button> <button onclick="deleteTask(this)" class="newButton2">Hapus</button>';
        taskList.appendChild(li);
        taskInput.value = "";

    } else {
        alert("Silakan masukkan teks untuk tugas!");
    }
}

// Fungsi untuk menandai atau menghapus tugas sebagai selesai
function toggleCompleted(checkbox) {
    let listItem = checkbox.parentNode;
    if (checkbox.checked) {
        listItem.classList.add("completed");
    } else {
        listItem.classList.remove("completed");
    }
}

// Fungsi untuk mengedit tugas
function editTask(element) {
    console.log(element)
    let listItem = element.parentNode;
    let taskText = listItem.childNodes[1].nodeValue;
    console.log(taskText)
    let newText = prompt("Edit tugas:", taskText);
    if (newText !== null && newText.trim() !== "") {
        listItem.childNodes[1].nodeValue = newText;
    }
}

// Fungsi untuk menghapus tugas
function deleteTask(element) {
    let listItem = element.parentNode;
    taskList.removeChild(listItem);
}