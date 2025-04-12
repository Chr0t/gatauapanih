# Undangan Pernikahan Digital

Website undangan pernikahan digital yang elegan dengan fitur lengkap dan responsif.

## Fitur

- Halaman pembuka (cover) dengan nama mempelai dan tombol "Lihat Undangan"
- Navigasi menu (sticky bar) dengan bagian-bagian lengkap
- Animasi smooth dan elegan antar section
- Bagian Mempelai dengan foto dan biodata
- Cerita Cinta dalam bentuk timeline
- Detail acara (akad & resepsi)
- Peta lokasi dengan Google Maps
- Galeri foto
- Form ucapan dan doa
- Countdown ke hari-H

## Cara Penggunaan

1. Clone atau download repository ini
2. Buka file `index.html` di browser
3. Sesuaikan konten dengan data pernikahan Anda

## Kustomisasi

### Mengubah Data Pernikahan

1. Buka file `index.html`
2. Ubah nama mempelai di bagian cover:
```html
<h1 class="couple-names">Nama Mempelai Pria<br>&<br>Nama Mempelai Wanita</h1>
```

3. Ubah tanggal pernikahan:
```html
<p class="wedding-date">Sabtu, 1 Januari 2025</p>
```

4. Ubah data mempelai di bagian "Mempelai"

5. Ubah detail acara di bagian "Acara"

### Mengubah Foto

1. Siapkan foto-foto berikut:
   - `images/cover-bg.jpg` (background cover)
   - `images/bride.jpg` (foto mempelai wanita)
   - `images/groom.jpg` (foto mempelai pria)
   - `images/gallery1.jpg`, `images/gallery2.jpg`, dll (foto galeri)

2. Letakkan foto-foto tersebut di folder `images/`

### Mengubah Warna

1. Buka file `css/style.css`
2. Ubah variabel warna di bagian `:root`:
```css
:root {
    --primary-color: #F8E1E1;
    --secondary-color: #F5F5F5;
    --accent-color: #D4AF37;
    --text-color: #333;
}
```

### Mengubah Peta Lokasi

1. Buka file `index.html`
2. Ganti URL iframe Google Maps dengan lokasi Anda:
```html
<iframe src="URL_GOOGLE_MAPS_ANDA" ...></iframe>
```

## Teknologi yang Digunakan

- HTML5
- CSS3 (dengan animasi dan transisi)
- JavaScript (vanilla)
- Google Fonts (Playfair Display & Open Sans)
- Font Awesome (untuk ikon)
- Google Maps API

## Catatan

- Website ini tidak memerlukan backend dan dapat dihosting di layanan hosting statis
- Ucapan dan doa disimpan di localStorage browser
- Pastikan semua foto dioptimalkan untuk web
- Sesuaikan tanggal pernikahan di file `js/script.js` untuk countdown yang akurat

## Lisensi

Proyek ini tersedia di bawah lisensi MIT. 
