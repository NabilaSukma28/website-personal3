// Carousel functionality (for previous and next buttons)
let currentIndex = 0;
const carouselItems = document.querySelector('.carousel-items');
const totalItems = document.querySelectorAll('.promo-item').length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 3000); // Ganti slide setiap 10 detik

document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});
function updateCarousel() {
    const offset = -currentIndex * 100; // Menggeser item sesuai index
    carouselItems.style.transform = `translateX(${offset}%)`;
}
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol promo
  const buttons = document.querySelectorAll(".promo-buttons button");
  const promoContents = document.querySelectorAll(".promo-content");

  // Tambahkan event listener ke setiap tombol
  buttons.forEach(button => {
      button.addEventListener("click", function () {
          // Ambil ID konten yang akan ditampilkan berdasarkan tombol yang diklik
          let targetId = "";
          if (this.textContent.includes("Lihat Produk")) {
              targetId = "lihat-produk-content";
          } else if (this.textContent.includes("Tukar Poin")) {
              targetId = "tukar-poin-content";
          } else if (this.textContent.includes("Klaim Voucher")) {
              targetId = "klaim-voucher-content";
          } else if (this.textContent.includes("Info Promo")) {
              targetId = "info-promo-content";
          }

          // Sembunyikan semua konten terlebih dahulu
          promoContents.forEach(content => content.style.display = "none");

          // Tampilkan hanya konten yang sesuai dengan tombol yang diklik
          if (targetId) {
              document.getElementById(targetId).style.display = "block";
          }
      });
  });

  // **Perbaikan Carousel**
  const leftBtn = document.querySelector(".carousel-btn.left");
  const rightBtn = document.querySelector(".carousel-btn.right");
  const carouselItems = document.querySelector(".carousel-items");

  let currentIndex = 0;
  const totalItems = document.querySelectorAll(".promo-item").length;

  function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselItems.style.transform = `translateX(${offset}%)`;
  }

  leftBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  rightBtn.addEventListener("click", function () {
      if (currentIndex < totalItems - 1) {
          currentIndex++;
          updateCarousel();
      }
  });
});
function openPage(page) {
  console.log("Button clicked, navigating to: " + page); // Debug log untuk memeriksa
  switch(page) {
      case 'produk':
          window.location.href = 'produk.html';  // URL yang benar untuk halaman produk
          break;
      case 'tukar-poin':
          window.location.href = 'tukar-poin.html';
          break;
      case 'klaim-voucher':
          window.location.href = 'klaim-voucher.html';
          break;
      case 'info-promo':
          window.location.href = 'info-promo.html';
          break;
      default:
          alert("Halaman tidak ditemukan");
  }
}
// Fungsi untuk mengedit profil
function editProfile() {
  // Logika untuk mengedit profil (misalnya membuka halaman edit profil)
  alert('Fitur Edit Profil belum tersedia.');
}

// Fungsi untuk mengubah kata sandi
function changePassword() {
  // Logika untuk mengubah kata sandi (misalnya membuka halaman ganti kata sandi)
  alert('Fitur Ubah Kata Sandi belum tersedia.');
}

// Fungsi untuk logout
function logout() {
  // Logika untuk logout pengguna
  alert('Anda telah keluar.');
  window.location.href = "index.html";  // Arahkan ke halaman utama setelah logout
}