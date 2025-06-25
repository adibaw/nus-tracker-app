let checklist = JSON.parse(localStorage.getItem("nusGoals")) || [
  "Riset jurusan dan persyaratan NUS",
  "Persiapan nilai akademik dan rapor",
  "Persiapkan dokumen (paspor, sertifikat, dll)",
  "Belajar coding dan buat proyek",
  "Latihan English test (TOEFL/IELTS)",
  "Latihan interview dan essay NUS",
  "Submit aplikasi sebelum deadline!",
];

const checklistElement = document.getElementById("checklist");
const input = document.getElementById("new-item");
const button = document.getElementById("add-button");

function saveChecklist() {
  localStorage.setItem("nusGoals", JSON.stringify(checklist));
}

function renderChecklist() {
  checklistElement.innerHTML = "";
  checklist.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    checklistElement.appendChild(li);
  });
}

button.addEventListener("click", () => {
  const newItem = input.value.trim();
  if (newItem !== "") {
    checklist.push(newItem);
    input.value = "";
    saveChecklist();       // <-- simpan ke localStorage
    renderChecklist();
  }
});

renderChecklist();
