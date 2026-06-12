# Website Portofolio Pribadi

Website portofolio pribadi yang dibuat sebagai proyek akhir individu untuk mata kuliah Dasar Desain Antarmuka Pengguna. Website ini menampilkan profil, pengalaman, proyek, teknologi yang digunakan, serta informasi kontak.

## Identitas Mahasiswa

- **Nama:** `Emyr Fauzan`
- **NIM:** `255150700111012`
- **Kelas:** `TI - C`

## Informasi Proyek Akhir

Proyek ini dikembangkan untuk tugas akhir Semester Genap 2025-2026. Fokus utama pengembangan adalah menerapkan prinsip UI/UX, menjaga konsistensi desain, menyediakan navigasi yang jelas, membuat tata letak yang responsif, dan memastikan website dapat diakses secara daring.

## Tautan

- Website: [careerportofio.netlify.app](webalmira.vercel.app/)
- Repositori GitHub: [github.com/Emir-A/Personal-Website](https://github.com/Emir-A/Personal-Website)


## Fitur Utama

- Bagian perkenalan dan profil
- Riwayat pengalaman dan pendidikan
- Daftar proyek beserta teknologi dan tautan repositori
- Daftar teknologi berdasarkan kategori
- Informasi kontak dan media sosial
- Pilihan tema terang dan gelap
- Navigasi responsif untuk desktop, tablet, dan perangkat seluler
- Halaman blog untuk catatan dan tulisan teknis

## Penerapan UI/UX

- **Konsistensi desain:** Warna, jarak, tipografi, kartu, dan gaya interaksi digunakan secara konsisten.
- **Navigasi yang jelas:** Navigasi tetap menyediakan akses langsung menuju setiap bagian utama.
- **Hierarki visual:** Judul, warna aksen, jarak, dan tata letak membantu pengguna memahami informasi dengan cepat.
- **Tata letak responsif:** Tampilan menyesuaikan ukuran desktop, tablet, dan perangkat seluler.
- **Umpan balik interaksi:** Efek hover, penanda navigasi aktif, animasi, dan tombol tema menunjukkan elemen yang dapat digunakan.
- **Tipografi yang mudah dibaca:** Inter digunakan untuk teks isi dan Space Grotesk digunakan untuk judul.

## Teknologi yang Digunakan

- [Astro](https://astro.build/) untuk pembuatan website statis dan struktur komponen
- [Tailwind CSS](https://tailwindcss.com/) untuk tampilan responsif
- [Astro Icon](https://www.astroicon.dev/) dan Iconify untuk ikon
- TypeScript dan JavaScript untuk fitur interaktif
- Netlify untuk hosting

## Atribusi Template

Website ini dikembangkan dan dimodifikasi dari template sumber terbuka:

- [nbakh16/career-portfolio-template](https://github.com/nbakh16/career-portfolio-template)

Template tersebut digunakan sebagai dasar struktur dan desain awal. Konten, tampilan, fitur blog, data proyek, dokumentasi, serta beberapa komponen telah disesuaikan untuk kebutuhan portofolio pribadi dan proyek akhir ini.

## Menjalankan Website Secara Lokal

Persyaratan:

- Node.js versi 22.12.0 atau lebih baru
- npm

```bash
git clone https://github.com/Emir-A/Personal-Website.git
cd Personal-Website
npm install
npm run dev
```

Website dapat diakses melalui `http://localhost:4321`.

## Struktur Proyek

```text
public/                 Berkas statis yang dapat diakses publik
src/
  assets/               Gambar profil dan proyek
  components/           Komponen Astro yang dapat digunakan kembali
  content/blog/         Konten blog
  data/                 Data portofolio dalam format JSON
  layouts/              Tata letak halaman
  pages/                Rute halaman website
  styles/               Gaya global dan tema
```
