# Brief proyek (tempel ke Project Knowledge Lovable) - v2
PROTOTIPE saja, data fiktif. Aplikasi "EWS dan Laporan PK" untuk tim pelatihan talenta digital (bahasa Indonesia). Tujuan: memperlihatkan layar dan alur untuk ditinjau pengguna. Bukan produksi.

## Aturan teknis
- React + Vite + Tailwind + shadcn/ui + Recharts. Tanpa backend, tanpa Lovable Cloud, tanpa data asli.
- Semua angka dibaca dari `src/mock/mock_data.ts`. UI TIDAK menghitung capaian, K, B, R, fase, atau tingkat EWS. Jangan ubah berkas mock kecuali diminta.
- AI dimock (teks statis). Setiap teks buatan AI diberi label "Contoh".
- "Hari ini" TETAP = 15 Oktober 2026 (konstanta `HARI_INI`). Jangan pakai tanggal sistem. Waktu di UI: WIB.
- Pasang badge "Prototipe - data contoh" di header semua halaman.
- Tingkat EWS selalu ikon + teks + warna (bukan warna saja).

## Konsep (hanya untuk label dan teks, bukan untuk dihitung)
- Capaian = lulus / onboarding x 100, dibandingkan target bulan berjalan (PK 2026: Jan-Apr 0 = "belum ada target bulan ini"; Mei-Des 87%).
- Onboarding = selesai modul >= 90%. Lulus = semua modul selesai. Pembatalan tidak dihitung.
- Kumulatif tertimbang = jumlah lulus / jumlah onboarding semua batch capaian PK (bukan rata-rata persen).
- Hanya level Fundamental yang masuk capaian PK. Intermediate = "Non-capaian PK" (tetap dipantau). Level belum terkonfirmasi = "sementara".
- K = kekurangan lulus agar kumulatif >= target. B = onboarding yang belum lulus. R = K/B (beban).
- Fase batch: Belum mulai, Pantau (<40% durasi), Aktif (40-75%), Akhir (>=75% atau sisa <=7 hari), Selesai.
- Tingkat: Aman, Waspada, Kritis, Belum dapat dinilai. Alasan singkat selalu ditampilkan (dari mock).
- Data "basi" bila tidak diperbarui lebih dari 2 hari.
- Satu gerbang manusia: persetujuan laporan, plus Antrean Validasi. AI bukan pengambil keputusan.

## Privasi (wajib tampak di UI)
- Nama dan instansi TIDAK ditampilkan dan tidak disimpan. Peserta hanya berupa alias (P-A1B2).
- Nomor registrasi selalu tersamar (empat karakter terakhir). Tampil penuh 10 detik hanya lewat dialog dengan alasan minimal 10 karakter. Tanpa ekspor.
- Panel "Data yang dikirim ke AI" hanya memuat alias dan angka.

## Layar
Login admin; Dashboard portofolio; Batch (+ unggah + hasil parsing nama berkas yang dapat diedit + tab Tindak lanjut); Antrean Validasi; Laporan (draf -> tinjau -> setujui -> unduh simulasi); Aktivitas Agent (timeline); Kartu Agent; Privasi dan Kepatuhan.

## Status agent
Menunggu, Berjalan, Selesai, Selesai dengan peringatan, Perlu keputusan Anda, Gagal, Dibatalkan.
