# Portofolio Haedar Mujaddid

Website portofolio pribadi untuk menampilkan proyek nyata, termasuk:
- RumahDataku Kapasa (live di Vercel)
- SIMRS V2
- Galeri gambar proyek yang bisa digeser (carousel/swipe)
- Mode gelap dan terang

## Live Project

- RumahDataku: https://rumahdataku-kapasa.vercel.app/

## Social Links

- LinkedIn: https://www.linkedin.com/in/haedarmujaddid/
- GitHub: https://github.com/Hadid512
- Instagram: https://www.instagram.com/hadid__03/

## Fitur Utama Portofolio

- Frontend framework: Tailwind CSS (CDN)
- Ikon: Lucide
- Theme switcher dark/light (tersimpan di localStorage)
- Kartu proyek dengan gambar bukti kerja
- Slider gambar pada proyek RumahDataku (prev/next + swipe/drag)
- Tombol link langsung ke demo proyek

## Struktur File

```text
portofolio/
|- index.html
|- assets/
|  |- css/
|  |  `- style.css
|  |- js/
|  |  `- main.js
|  `- images/
|     `- projects/
`- README.md
```

## Jalankan di Local

Karena ini static website, cukup buka lewat web server lokal (Laragon):

```text
http://localhost/portofolio/
```

## Catatan

- Gambar proyek diambil dari hasil kerja asli.
- Jika menambah proyek baru, update data `projects` di `assets/js/main.js`.
