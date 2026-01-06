Evaluasi Harian 
Bab 1.1 : Pengenalan React dan Setup Environtment

## 2. Perbedaan JSX dengan HTML

**Penjelasan:**
JSX (JavaScript XML) adalah sintaks ekstensi untuk JavaScript yang digunakan dalam React untuk mendeskripsikan tampilan UI. Meskipun mirip dengan HTML, JSX memiliki beberapa perbedaan penting:

**Perbedaan utama:**
1. **Atribut camelCase** - JSX menggunakan camelCase untuk atribut (misal: `className`, `onClick`)
2. **Penulisan atribut tanpa tanda kutip** - Nilai atribut bisa ekspresi JavaScript
3. **Self-closing tags wajib** - Tag tunggal harus ditutup (`<img />`)
4. **Ekspresi JavaScript di dalam {}** - Bisa menulis kode JavaScript langsung
5. **Return single parent element** - Harus mengembalikan satu elemen induk

**Contoh kode:**

```jsx
// HTML biasa
<div class="container">
  <h1 onclick="handleClick()">Hello World</h1>
  <p>Nilai: 5</p>
  <img src="image.jpg">
</div>

// JSX di React
function Component() {
  const nilai = 5;
  
  return (
    <div className="container">
      <h1 onClick={handleClick}>Hello World</h1>
      <p>Nilai: {nilai * 2}</p>
      <img src="image.jpg" alt="deskripsi" />
      {nilai > 3 && <p>Nilai besar!</p>}
    </div>
  );
}
```

## 3. Konsep Virtual DOM

**Ringkasan Virtual DOM:**
Virtual DOM adalah representasi JavaScript yang ringan dari DOM sebenarnya. Ini adalah konsep di React yang meningkatkan performa aplikasi dengan meminimalkan manipulasi DOM langsung.

**Cara kerja:**
1. **Pembuatan Virtual DOM** - React membuat salinan virtual dari struktur DOM
2. **Perubahan State** - Ketika state berubah, React membuat Virtual DOM baru
3. **Minimal Update** - Hanya bagian yang berbeda saja yang diperbarui di DOM sebenarnya
4. **Batch Update** - Beberapa perubahan digabungkan dalam satu update DOM

**Contoh visual:**
```
DOM Asli: <div><p>Hello</p></div>
↓
Virtual DOM: { type: 'div', children: [{ type: 'p', children: 'Hello' }] }
↓
State berubah → Virtual DOM baru
↓
React bandingkan → Hanya update bagian yang berubah di DOM asli
```

## 4. Perbedaan SPA vs MPA

**Perbedaan SPA (Single Page Application) vs MPA (Multi Page Application):**

| Aspek | SPA | MPA |
|-------|-----|-----|
| **Loading Halaman** | Hanya sekali di awal | Setiap navigasi halaman baru |
| **User Experience** | Lebih cepat, seperti aplikasi desktop | Mirip website tradisional |
| **Komunikasi Server** | API calls (JSON/XML) | Request halaman lengkap (HTML) |
| **Framework Contoh** | React, Vue, Angular | PHP Laravel, Ruby on Rails |
| **SEO** | Lebih rumit (butuh SSR) | Lebih mudah |

**Kelebihan & Kekurangan:**

**SPA:**
*Kelebihan:*
1. **User Experience lebih baik** - Transisi antar halaman cepat tanpa reload
2. **Mirip aplikasi native** - Bisa di-cache dan bekerja offline dengan PWA

*Kekurangan:*
1. **SEO lebih sulit** - Butuh server-side rendering (SSR) untuk SEO optimal
2. **Initial load lebih berat** - Harus download semua resource di awal

**MPA:**
*Kelebihan:*
1. **SEO-friendly** - Setiap halaman bisa di-crawl dengan mudah oleh mesin pencari
2. **Initial load ringan** - Hanya download konten halaman yang dibutuhkan

*Kekurangan:*
1. **User Experience kurang smooth** - Ada reload setiap ganti halaman
2. **Beban server lebih besar** - Server harus render HTML setiap request

**Contoh Use Case:**
- **SPA**: Aplikasi dashboard, email client, social media apps (Gmail, Facebook)
- **MPA**: Website berita, blog, e-commerce katalog (CNN, Wikipedia)