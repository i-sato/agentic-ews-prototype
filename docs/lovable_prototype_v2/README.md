# Paket Lovable v2 (prototipe)
Pengganti terstruktur untuk `docs/lovable_prototype/` (berkas lama tidak diubah).

| Berkas | Fungsi |
|---|---|
| `knowledge_v2.md` | Tempel ke Project Knowledge Lovable (aturan, tanggal tetap, privasi, istilah) |
| `prompts_v2.md` | 14 prompt kecil berurutan (0-13) dengan kriteria "Selesai bila" |
| `mock_data.ts` | Data mock FIKTIF dihasilkan dari `reference/rules.ts` (dua skenario, snapshot harian, tindak lanjut) |
| `mock_batches.md` | Tabel yang dapat dibaca manusia untuk memeriksa hasil Lovable |

Lama: `sampel_peserta_fiktif.csv` di folder lama tetap dipakai (cocok dengan batch b1 dan rekap 28/26/21/18/85,7%).

## Urutan kerja
1. Proyek Lovable baru, tanpa Cloud. Tempel `knowledge_v2.md`.
2. Prompt 0 (lampirkan `mock_data.ts`), lalu prompt 1 sampai 12 satu per satu. Tinjau tiap "Selesai bila" memakai `mock_batches.md`.
3. Prompt 13 (audit). Lalu serah terima: hanya tangkapan layar dan komponen.

## Yang diperbaiki dari versi lama
- Data mock kini ada dan konsisten dengan aturan; UI tidak menghitung.
- Aturan EWS, fase, K/B/R dan "hari ini" tetap tersedia di Knowledge.
- Prompt padat dipecah; Kartu Agent mencakup 8 agent termasuk Pemantau Harian; jenis validasi `pk_formula` ditambahkan; tindak lanjut masuk urutan.
- CSV punya perilaku tetap pada unggahan (tanpa membaca isi).

## Temuan di repo (di luar prototipe)
- `reference/rules.ts`: batch Intermediate dievaluasi sebagai `belum_dapat_dinilai` dengan alasan `level_belum_terkonfirmasi` (karena `levelTerkonfirmasi && masukCapaianPk`), padahal `SPEC.md` bagian 3 butir 10 menyatakan Intermediate tetap masuk EWS. Perlu diputuskan: alasan yang tepat atau perilaku yang dimaksud. Prompt v2 menampilkannya sebagai "Non-capaian PK".
- `.github/workflows/test.yml` menjalankan `node --test rules.test.ts`; di Node 22 berjalan, tetapi bergantung pada pengelupasan tipe bawaan. Pertimbangkan menaruh versi Node pada `reference/package.json`.
- Nilai tingkat per batch mengikuti K portofolio (sama untuk semua batch); batch Selesai dengan K > 0 selalu Kritis. Sesuai dokumentasi, tetapi perlu penjelasan di UI (sudah ada di prompt 3).
