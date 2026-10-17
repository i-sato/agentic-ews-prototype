# Prompt Lovable v2 (bertahap, satu layar per prompt)

Cara pakai: kirim SATU prompt, tinjau hasilnya dengan daftar "Selesai bila", perbaiki, baru lanjut. Jangan gabungkan prompt.
Persiapan sekali di awal: buat proyek Lovable baru, TANPA Lovable Cloud/backend, tempel `knowledge_v2.md` ke Project Knowledge, siapkan `mock_data.ts` (lihat prompt 0).
Sisipkan kalimat ini di awal setiap prompt setelah prompt 1: **"Hanya ubah halaman/komponen yang disebut. Jangan ubah halaman lain dan jangan ubah src/mock/."**

---
## 0. Berkas mock
"Buat berkas src/mock/mock_data.ts dengan isi persis seperti lampiran (jangan ubah angka, jangan hitung ulang). Tambahkan src/mock/index.ts yang mengekspor helper: useSkenario() (state 'A' atau 'B', default SKENARIO_DEFAULT, disimpan di memori), dan getBatchView(skenario) yang menggabungkan batchMeta, lulusPerSkenario, evaluasi dan snapshotHarian. Jangan ada logika hitung capaian/EWS di mana pun."
Lampirkan `mock_data.ts` sebagai berkas, atau tempel isinya di prompt ini.
**Selesai bila:** berkas ada, aplikasi tetap berjalan, tidak ada halaman baru.

## 1. Kerangka
"Buat aplikasi React (Vite, Tailwind, shadcn/ui, Recharts) berbahasa Indonesia. Layar login administrator (form saja, tanpa backend; tombol Masuk langsung ke Dashboard). Sidebar: Dashboard, Batch, Antrean Validasi, Laporan, Aktivitas Agent, Kartu Agent, Privasi dan Kepatuhan. Header: pemilih Tahun Anggaran (2026), badge 'Prototipe - data contoh', dan pemilih kecil 'Skenario contoh' (A: ada peringatan, B: target tercapai) yang mengubah useSkenario(). Tiap menu berisi halaman kosong berjudul dulu. Tampilkan 'Hari ini: 15 Okt 2026 (contoh)' dari HARI_INI."
**Selesai bila:** 7 menu bisa dibuka; badge dan pemilih skenario tampak di semua halaman.

## 2. Dashboard: kartu dan tabel
"Isi halaman Dashboard dari src/mock. Kartu atas: capaian kumulatif tertimbang (evaluasi[skenario].kumulatif) dibanding target bulan ini (TARGET_BULAN_INI), K total, B total, dan tingkat portofolio dengan alasan singkat berbahasa Indonesia. Di bawahnya tabel batch SESUAI URUTAN evaluasi[skenario].perBatch: nama program (tema + ID pelatihan), level, fase dengan sisa hari, onboarding, lulus, K, B, R, tingkat (ikon + teks + warna) dengan alasan singkat, lencana data 'segar' atau 'basi' + waktu pembaruan terakhir, tombol 'Perbarui' (simulasi: spinner 2 detik lalu toast 'Contoh: tidak ada perubahan'). Batch Intermediate di bagian terpisah 'Non-capaian PK' dengan tingkat 'Non-capaian PK' (jangan tampilkan 'level belum terkonfirmasi'). Batch level sementara diberi label 'sementara' dan tidak masuk kumulatif. Batch belum mulai tampil 'Belum dapat dinilai: belum mulai'. Jangan hitung apa pun di komponen."
**Selesai bila:** skenario A menampilkan 83,5% vs 87%, urutan b3, b2, b1, b4; skenario B menampilkan 87,4% dan 'Aman'; b4 berlabel 'basi'.

## 3. Dashboard: tren dan ringkasan harian
"Tambahkan di Dashboard: (a) grafik garis tren harian onboarding dan lulus per batch (pilih batch lewat tab/select) dari snapshotHarian, dengan garis target; (b) kotak 'Ringkasan harian' berisi teks contoh dari agent Pemantau Harian, berlabel 'Contoh' dan 'Dibuat AI, ditinjau manusia'. Isi ringkasan: 4 batch dipantau berhasil diperbarui, b4 akses ditolak (data basi 4 hari), b6 tab 'All Pendaftar Web' tidak ada, tingkat b3 Kritis perlu analisis. Tambahkan juga peringatan data basi dan penjelasan 'K dihitung terhadap kumulatif sehingga sama untuk semua batch'."
**Selesai bila:** grafik b2 tampil dengan garis target; ringkasan menyebut b4 dan b6.

## 4. Batch: daftar dan pembaruan
"Halaman Batch bagian daftar: tabel batch dari batchMeta dengan status pemantauan (aktif/nonaktif, saklar simulasi), waktu pembaruan terakhir, hasil terakhir (ok, tidak berubah, gagal, tab hilang, akses ditolak) dalam lencana, tombol 'Perbarui sekarang' per batch dan 'Perbarui semua' (simulasi spinner lalu toast), info 'Pembaruan otomatis setiap hari 07:00 WIB'. Klik baris membuka halaman detail batch dengan tab 'Ringkasan' (rekap pendaftar, mengikuti, onboarding, lulus) dan tab 'Tindak lanjut' (kosong dulu)."
**Selesai bila:** 7 batch tampil; b4 'akses ditolak', b6 'tab hilang' dengan peringatan 'Tab All Pendaftar Web tidak ada'.

## 5. Batch: tambah batch dan parsing nama berkas
"Di halaman Batch tambahkan kotak 'Tambah batch': area teks untuk menempel BANYAK tautan Google Sheets (satu per baris; simulasi) dan tombol 'Unggah berkas (cadangan)'. Setelah menekan 'Tambah', tampilkan hasil parsing nama berkas contoh 'MIRROR - DTA VBL 13107 OIAT 10 -31 Agustus' sebagai form yang dapat diedit: ID pelatihan (13107, dengan tautan https://digitalent.komdigi.go.id/pelatihan/13107), tema/alias (OIAT), level (Fundamental/Intermediate, dengan penanda sumber 'dari nama berkas' atau 'diubah manual'), tanggal mulai dan selesai, Tahun Anggaran otomatis dari tanggal mulai (peringatan jika lintas tahun), tingkat keyakinan. Bila 'Unggah berkas' dipakai atau berkas bernama sampel_peserta_fiktif.csv dipilih, tampilkan SELALU rekap tetap: pendaftar 28, mengikuti 26, onboarding 21, lulus 18, capaian 85,7%, 2 pembatalan tidak dihitung. Jangan membaca isi CSV. Tautan duplikat ditolak dengan pesan."
**Selesai bila:** rekap 28/26/21/18/85,7% tampil; form parsing dapat diedit; peringatan tab hilang muncul untuk contoh kedua 'MIRROR - DTA VBL 13108 FAWD 1-31 Sept' (tanggal tidak valid, keyakinan sedang).

## 6. Antrean Validasi
"Halaman Antrean Validasi: daftar item dengan jenis (level, id_pelatihan, tema_tidak_dikenal, lintas_tahun, lms_tidak_cocok, tab_hilang, pk_formula), batch terkait, detail, saran, status (baru, diterima, diubah, ditolak), tombol Terima/Ubah/Tolak yang mengubah status di memori. Isi dengan 7 item contoh: level b6 belum dikonfirmasi; tab_hilang b6; tema_tidak_dikenal; lintas_tahun; lms_tidak_cocok (progres mundur 2 alias di b4); id_pelatihan ganda; pk_formula (rumus berbeda dari yang dikenal). Tiap item tampilkan siapa yang membuat ('Agent Validator' atau 'Pemantau Harian')."
**Selesai bila:** 7 item; menekan tombol mengubah status dan menampilkan toast.

## 7. Aktivitas Agent: daftar dan timeline laporan
"Halaman Aktivitas Agent: daftar run (filter Semua/Manual/Terjadwal) dengan status dari daftar: Menunggu, Berjalan, Selesai, Selesai dengan peringatan, Perlu keputusan Anda, Gagal, Dibatalkan. Detail run 'Penyusunan laporan Oktober 2026' berupa timeline vertikal 11 langkah: pilih periode, ambil batch, cek validasi, hitung capaian, proyeksi, rencana, tulis bagian, isi angka dari perhitungan, pemeriksaan otomatis, verifikator, menunggu persetujuan Anda. Tiap langkah: status, durasi, ringkasan, alat yang dipakai, sumber pengetahuan (PK 2026, Aturan Talenta Digital v1, Template Laporan, SE Menkominfo 9/2023, UU 27/2022), dan tombol 'Lihat data yang dikirim ke AI' yang membuka panel berisi HANYA alias dan angka (tidak ada nama, instansi, atau nomor registrasi). Tombol 'Putar ulang' mensimulasikan kemajuan dengan timer 1 detik per langkah; langkah terakhir berstatus 'Perlu keputusan Anda'."
**Selesai bila:** timeline 11 langkah berjalan dengan timer; panel data AI tidak memuat PII.

## 8. Aktivitas Agent: Pemantauan harian
"Tambahkan run terjadwal 'Pemantauan harian 15 Okt 2026 07:00' berlencana 'Terjadwal' (run laporan berlencana 'Manual'). Detail berlangkah per batch: ambil data, bandingkan dengan kemarin, evaluasi EWS (sekali untuk portofolio), triase anomali (AI) dengan penilaian 'kemungkinan_perubahan_wajar' / 'perlu_cek_manusia' / 'tidak_jelas', pilih batch untuk analisis (alasan wajib: tingkat Kritis atau berubah), ringkasan harian. Hasilkan contoh: b4 gagal akses (lanjut ke batch berikutnya), b6 tab hilang, anomali progres_mundur di b4 dinilai 'perlu_cek_manusia' dan membuat item validasi, status akhir 'Selesai dengan peringatan'. Tampilkan kotak 'Batas otonomi': boleh/tidak boleh (tidak boleh menambah sumber, mengubah level, aturan, parameter, target, menyetujui laporan, membuka alias)."
**Selesai bila:** lencana Terjadwal/Manual; b4 gagal tidak menghentikan batch lain.

## 9. Laporan
"Halaman Laporan: pilih bulan dan TA, tombol 'Susun draf' (simulasi, arahkan ke run di Aktivitas Agent). Draf berupa bagian yang dapat diedit: Ringkasan Capaian, Tabel Batch, Kondisi Batch, Non-capaian (Intermediate), Analisis, Rekomendasi, Sumber Data (daftar berkas + tanggal pengambilan data), Catatan Penggunaan AI. Angka dalam narasi tampil sebagai nilai dari mock, bagian bertanda AI berlabel 'Contoh'. Alur status: Draf, Ditinjau, Disetujui; tombol 'Setujui' (konfirmasi), lalu 'Unduh' (simulasi toast, tanpa berkas). Pemeriksaan otomatis: tampilkan daftar centang (angka cocok, tidak ada PII)."
**Selesai bila:** edit teks berfungsi; Unduh hanya aktif setelah Setujui.

## 10. Kartu Agent
"Halaman Kartu Agent: kartu untuk 8 agent: Pembaca PK, Validator Masukan, Pemantau Harian (terjadwal), Analis EWS, Perencana Laporan, Penulis Laporan, Verifikator Laporan, dan Penjawab Tanya (MVP-2, tampil redup). Tiap kartu: tujuan, sumber pengetahuan, alat yang dipakai, data yang dikirim ke AI (alias + angka saja), model (teks 'Gemini, contoh'), batas otonomi, pengambil keputusan (manusia). Pemantau Harian: tambahkan keterangan 'berjalan terjadwal, otonomi terbatas'. Tambahkan saklar kill-switch AI (simulasi) dengan teks 'Tanpa AI: ambil data, hitung, snapshot, EWS tetap jalan; triase dan ringkasan diganti pesan standar'."
**Selesai bila:** 8 kartu; saklar mengubah teks status.

## 11. Privasi dan Kepatuhan
"Halaman Privasi dan Kepatuhan dengan tab: log pembukaan nomor registrasi (waktu, pengguna, alias, alasan), inventaris pemrosesan (aktivitas, tujuan, dasar, data, penerima, retensi), retensi, permintaan subjek data, log insiden dengan pengingat 'notifikasi 3x24 jam', log akses pemetaan alias (alasan wajib). Catatan tetap di atas: 'Pertimbangan terhadap UU 27/2022 dan SE Menkominfo 9/2023; bukan klaim kepatuhan atau nasihat hukum.' Seluruh isi contoh. Log pembukaan nomor registrasi bertambah satu baris ketika dialog di prompt 12 dipakai."
**Selesai bila:** 5 tab terisi contoh; catatan bukan-klaim tampak.

## 12. Tindak lanjut (tab di detail batch)
"Di detail batch b2 (FAWD), tab 'Tindak lanjut': tabel dari tindakLanjutB2 dengan kolom alias, modul selesai/total (bar kecil), status (tepi ambang, belum lulus), nomor registrasi tersamar. Tombol 'Tampilkan nomor registrasi' membuka dialog yang mewajibkan alasan (minimal 10 karakter; tombol nonaktif sebelum itu), lalu menampilkan noregSementara selama 10 detik dengan hitung mundur, lalu kembali tersamar. Tanpa tombol ekspor, tanpa salin massal. Catatan tetap: 'Nama dan instansi tidak disimpan di sistem.' Untuk batch lain tab ini menampilkan 'Data contoh tidak tersedia'. Setiap pembukaan menambah baris ke log di halaman Privasi."
**Selesai bila:** alasan 9 karakter ditolak; timer 10 detik; baris log muncul.

## 13. Pemeriksaan akhir (prompt audit, tanpa fitur baru)
"Periksa seluruh aplikasi dan LAPORKAN tanpa mengubah kode: (1) apakah ada logika hitung capaian/K/B/R/fase/tingkat di komponen (harus nol), (2) halaman yang tidak memiliki badge 'Prototipe - data contoh', (3) teks AI tanpa label 'Contoh', (4) tempat yang menampilkan nama, instansi, atau nomor registrasi penuh di luar dialog, (5) tingkat EWS yang hanya memakai warna, (6) ketergantungan pada tanggal sistem. Daftar temuan dengan nama berkas."
**Selesai bila:** daftar temuan; perbaiki satu per satu dengan prompt kecil.

---
## Setelah semua selesai (serah terima ke AI Studio)
- Ambil tangkapan layar tiap halaman dan daftar komponen sebagai REFERENSI. Jangan jadikan skema, mock, atau kode data Lovable sebagai skema produksi.
- Impor repo Lovable ke AI Studio belum terverifikasi (SPEC bagian 10). Uji dulu pada repo salinan; jalur utama tetap prompt di `docs/ai_studio_prompts/`.
- Aturan hitung produksi hanya dari `reference/rules.ts`.
