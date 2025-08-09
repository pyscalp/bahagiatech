# Kawasan Bahagia Teknologi

Website profesional untuk Perusahaan Teknologi Kawasan Bahagia. Dibangun dengan Vite, React, dan Tailwind CSS.

## Cara Menjalankan Proyek

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:5173](http://localhost:5173) untuk melihat hasilnya di browser.

## Cara Deploy ke GitHub

**PERINGATAN KEAMANAN:** Jangan pernah menuliskan Personal Access Token (PAT) atau kredensial sensitif lainnya langsung di dalam file seperti ini atau membagikannya. Token di bawah ini adalah contoh dan telah diganti dengan placeholder. Gunakan token Anda sendiri dengan hati-hati dan simpan di tempat yang aman.

1.  **Inisialisasi Git & Commit Awal**
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Setup project Kawasan Bahagia Teknologi"
    ```

2.  **Buat Repository di GitHub**
    Buat repository baru di [GitHub](https://github.com) dengan nama `bahagiatech`.

3.  **Hubungkan & Push ke GitHub**
    Ganti `<USERNAME>` dengan username GitHub Anda.

    ```bash
    git remote add origin https://github.com/<USERNAME>/bahagiatech.git
    git branch -M main
    git push -u origin main
    ```
    
    Jika diminta, masukkan username dan Personal Access Token (PAT) Anda sebagai password.

## Build untuk Produksi

Untuk membuat versi produksi yang siap di-deploy ke layanan seperti Netlify atau Vercel:

```bash
npm run build
```
Folder `dist` akan berisi file statis yang siap untuk di-deploy.
