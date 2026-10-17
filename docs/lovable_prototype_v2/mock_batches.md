# Data mock batch (dihasilkan dari reference/rules.ts, hari ini = 2026-10-15, target bulan ini = 87)
Semua data FIKTIF. ID pelatihan 13107-13113 adalah rekaan. Berkas sumber: `mock_data.ts` (dihasilkan, jangan disunting tangan).

## Batch
| id | ID pelatihan | Tema | Level | Masuk capaian PK | Tanggal | Modul | Pendaftar / Mengikuti / Onboarding | Hasil fetch terakhir | Terakhir diperbarui |
|---|---|---|---|---|---|---|---|---|---|
| b1 | 13107 | OIAT | Fundamental | ya | 10-31 Agu | 28 | 28 / 26 / 21 | tidak berubah | 15 Okt 07:00 |
| b2 | 13108 | FAWD | Fundamental | ya | 1-31 Okt | 28 | 52 / 46 / 40 | ok | 15 Okt 07:00 |
| b3 | 13109 | UXDS | Fundamental | ya | 5-20 Okt | 45 | 38 / 34 / 30 | ok | 15 Okt 07:00 |
| b4 | 13110 | CLDP | Fundamental | ya | 12 Okt-20 Nov | 28 | 20 / 15 / 12 | akses ditolak | 11 Okt 07:00 (BASI) |
| b5 | 13111 | DSAN | Intermediate | tidak (non-capaian) | 10 Okt-10 Nov | 36 | 30 / 27 / 25 | ok | 15 Okt 07:00 |
| b6 | 13112 | NTWK | level sementara | belum (sementara) | 8-28 Okt | 28 | 24 / 20 / 18 | tab hilang | 15 Okt 07:00 |
| b7 | 13113 | MBLA | Fundamental | ya | 2-30 Nov | 28 | 10 / 0 / 0 | ok | 15 Okt 07:00 |

b1 memakai angka yang sama dengan `sampel_peserta_fiktif.csv` (28 baris, 2 pembatalan, onboarding 21, lulus 18, capaian 85,7%).

## Skenario A (default): ada peringatan
Kumulatif resmi: onboarding 103, lulus 86, capaian 83,5% vs target 87%. Portofolio: **Waspada** (K=4, B=14, R=0,29).

| Urutan | Batch | Fase (sisa hari) | Onboarding | Lulus | K | B | R | Tingkat | Alasan (kode) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | b3 UXDS | Akhir (5) | 30 | 28 | 4 | 2 | 2,00 | Kritis | tidak_mungkin_tercapai |
| 2 | b2 FAWD | Aktif (16) | 40 | 36 | 4 | 4 | 1,00 | Kritis | beban_tinggi_fase_aktif |
| 3 | b1 OIAT | Selesai | 21 | 18 | 4 | 3 | 1,33 | Kritis | batch_selesai_target_belum_tercapai |
| 4 | b4 CLDP | Pantau (36) | 12 | 4 | 4 | 8 | 0,50 | Waspada | perlu_dipantau |
| 5 | b5 DSAN | Pantau (26) | 25 | 20 | - | - | - | Non-capaian PK | Intermediate |
| 6 | b6 NTWK | Pantau (13) | 18 | 6 | - | - | - | Belum dapat dinilai | level_belum_terkonfirmasi |
| 7 | b7 MBLA | Belum mulai | 0 | 0 | - | - | - | Belum dapat dinilai | belum_mulai |

## Skenario B: target tercapai
Lulus b2=38, b3=29, b4=5 (b1 tetap 18). Kumulatif 103 onboarding, 90 lulus = 87,4%. Portofolio: **Aman** (K=0). Semua batch capaian PK Aman; b5, b6, b7 tetap seperti skenario A.

## Catatan membaca angka
- K sama untuk semua batch capaian PK karena K dihitung terhadap kumulatif (batch lain dianggap tetap). Itu perilaku aturan, bukan kesalahan mock. Angka tanpa hitung ganda ada di ringkasan portofolio (K_total, B_total).
- Batch Selesai dengan K > 0 selalu Kritis (target belum tercapai; batch lain harus mengompensasi).
- Jan-Apr: target 0 -> tampilkan "belum ada target bulan ini" dan tanpa tingkat capaian (tidak ada di mock; cukup ditampilkan sebagai teks statis bila pemilih bulan dipakai).

## Tindak lanjut batch b2 (FAWD, 28 modul, ambang onboarding 26)
| Alias | Modul selesai | Status | No. registrasi tersamar |
|---|---|---|---|
| P-A1B2 | 25/28 | tepi ambang | ****2001 |
| P-A583 | 25/28 | tepi ambang | ****2002 |
| P-A954 | 25/28 | tepi ambang | ****2003 |
| P-AD25 | 26/28 | belum lulus | ****2004 |
| P-B0F6 | 27/28 | belum lulus | ****2005 |
| P-B4C7 | 27/28 | belum lulus | ****2006 |
| P-B898 | 22/28 | belum lulus (di bawah ambang) | ****2007 |
| P-BC69 | 17/28 | belum lulus (di bawah ambang) | ****2008 |
Catatan: daftar ini rekaan dan tidak bersumber dari CSV (CSV sampel tidak punya peserta 25 modul). Nomor penuh (FKT-200x) ada di `mock_data.ts` hanya untuk dialog 10 detik.
