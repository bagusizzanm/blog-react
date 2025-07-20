<!--  -->
# 📘 Blog Statis dengan React.js

Sebuah proyek **blog statis** yang dibuat dengan **React.js**, menggunakan data lokal berupa file JSON. Aplikasi ini dirancang dengan pendekatan **mobile-friendly**, mendukung **pagination**, dan layout yang fleksibel berbasis **CSS Grid** dan **Flexbox**.

---

## ✨ Fitur Utama

- ✅ **Blog Statis**: Menggunakan data lokal (file `.json`) tanpa backend.
- 📱 **Responsive Design**: Optimal untuk perangkat mobile dan desktop.
- 📄 **Pagination**: Navigasi halaman blog yang efisien.
- 🎨 **Grid & Flexbox**: Layout modern dan rapi.
- 🧩 **Komponen Modular**: Dibangun dengan struktur komponen terpisah untuk skalabilitas.
- 💬 **Komentar Statis**: Komponen komentar tersedia untuk simulasi interaksi pengguna.
- 📙 Menggunakan arsitektur MVC (Model View Controller).

---

## 📁 Struktur Folder

```
src/
├── assets/                 # Gambar, ikon, dan aset statis lainnya
├── components/             # Komponen UI dan fungsional
│   ├── ui/                 # Komponen UI tambahan (button, input, dll)
│   ├── Articles.jsx        # Komponen utama daftar artikel
│   ├── Card.jsx            # Komponen kartu artikel
│   ├── Navbar.jsx          # Navigasi utama
│   ├── Hero.jsx            # Section pembuka blog
│   ├── Pagination.jsx      # Komponen pagination
│   └── Comments.jsx        # Komentar statis
├── controller/
│   └── useBlog.js          # Custom hook untuk pengambilan data artikel
├── layout/
│   ├── DetailArticle.jsx   # Halaman detail artikel
│   ├── RightPanel.jsx      # Panel sisi kanan (artikel terbaru, dsb.)
│   └── RootLayout.jsx      # Tata letak utama aplikasi
├── pages/
│   └── Index.jsx           # Halaman utama blog
└── services/
    └── api.js              # Modul untuk fetch data JSON lokal
```

---

## 🚀 Cara Menjalankan Proyek

1. **Clone Repository**
   ```bash
   git clone https://github.com/bagusizzanm/blog-react.git
   cd blog-react
   ```

2. **Install Dependency**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```

---

## 📦 Teknologi yang Digunakan

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) (digunakan untuk styling)
- [Shadcn UI](https://ui.shadcn.com/docs/installation) (digunakan untuk build component)
- JavaScript (ES6+)
- JSON (sebagai data sumber)

---

## 📌 Catatan

- Proyek ini bersifat **statis** tanpa backend.
- Data artikel diambil dari file `.json` lokal melalui custom hook pada file **controller/useBlog.js.**
- Ideal untuk studi kasus blog sederhana atau personal portfolio blog.

---

## 🧑‍💻 Author

**Bagus Izzan Muafy**  
Frontend Developer | Blog Builder Enthusiast  
[GitHub](https://github.com/bagusizzanm)

---

## 📄 License

MIT License — free to use, modify, and distribute.