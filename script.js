const judul = document.getElementById("judul");
const menuItems = document.querySelectorAll(".menu-item");


const kartu = {
  statistik: document.getElementById("statistik"),
  progres:   document.getElementById("progres"),
  aktifitas: document.getElementById("aktifitas"),
  lampiran:  document.getElementById("lampiran"),
};


function resetMerah() {
  Object.values(kartu).forEach((el) => el.classList.remove("merah"));
}


const aksi = {
  home() {
    judul.textContent = "Selamat Datang";
  },
  mahasiswa() {
    judul.textContent = "Putri Nabila";
  },
  kelas() {
    judul.textContent = "Putri Nabila Kelas SI-3C";
  },
  aktifitas() {

    kartu.aktifitas.classList.add("merah");
    kartu.progres.classList.add("merah");
  },
  statistik() {
    kartu.statistik.classList.add("merah");
  },
  dokumen() {
    kartu.lampiran.classList.add("merah");
  },
};

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = item.dataset.menu;
    if (!aksi[menu]) return; 


    menuItems.forEach((m) => m.classList.remove("active"));
    item.classList.add("active");


    resetMerah();
    aksi[menu]();
  });
});