// DIHASILKAN dari reference/rules.ts (evaluasiPortofolio). Data FIKTIF. Jangan ubah angka; UI hanya membaca.
// Hari ini tetap = 2026-10-15 (WIB). Skenario "A" = ada peringatan (default). Skenario "B" = target tercapai (Aman).
export const HARI_INI = "2026-10-15";
export const TARGET_BULAN_INI = 87;
export const SKENARIO_DEFAULT = "A" as const;
export type Skenario = "A" | "B";
export const batchMeta = [
  {
    "id": "b1",
    "idPelatihan": "13107",
    "nama": "MIRROR - DTA VBL 13107 OIAT 10 -31 Agustus",
    "tema": "OIAT",
    "level": "Fundamental",
    "mulai": "2026-08-10",
    "selesai": "2026-08-31",
    "totalModul": 28,
    "pendaftar": 28,
    "mengikuti": 26,
    "onboarding": 21,
    "lastFetch": "2026-10-15T07:00:00+07:00",
    "hasil": "tidak_berubah",
    "masukCapaian": true
  },
  {
    "id": "b2",
    "idPelatihan": "13108",
    "nama": "MIRROR - DTA VBL 13108 FAWD 1-31 Oktober",
    "tema": "FAWD",
    "level": "Fundamental",
    "mulai": "2026-10-01",
    "selesai": "2026-10-31",
    "totalModul": 28,
    "pendaftar": 52,
    "mengikuti": 46,
    "onboarding": 40,
    "lastFetch": "2026-10-15T07:00:00+07:00",
    "hasil": "ok",
    "masukCapaian": true
  },
  {
    "id": "b3",
    "idPelatihan": "13109",
    "nama": "MIRROR - DTA VBL 13109 UXDS 5-20 Oktober",
    "tema": "UXDS",
    "level": "Fundamental",
    "mulai": "2026-10-05",
    "selesai": "2026-10-20",
    "totalModul": 45,
    "pendaftar": 38,
    "mengikuti": 34,
    "onboarding": 30,
    "lastFetch": "2026-10-15T07:00:00+07:00",
    "hasil": "ok",
    "masukCapaian": true
  },
  {
    "id": "b4",
    "idPelatihan": "13110",
    "nama": "MIRROR - DTA VBL 13110 CLDP 12 Oktober-20 November",
    "tema": "CLDP",
    "level": "Fundamental",
    "mulai": "2026-10-12",
    "selesai": "2026-11-20",
    "totalModul": 28,
    "pendaftar": 20,
    "mengikuti": 15,
    "onboarding": 12,
    "lastFetch": "2026-10-11T07:00:00+07:00",
    "hasil": "akses_ditolak",
    "masukCapaian": true
  },
  {
    "id": "b5",
    "idPelatihan": "13111",
    "nama": "MIRROR - DTA INT 13111 DSAN 10 Oktober-10 November",
    "tema": "DSAN",
    "level": "Intermediate",
    "mulai": "2026-10-10",
    "selesai": "2026-11-10",
    "totalModul": 36,
    "pendaftar": 30,
    "mengikuti": 27,
    "onboarding": 25,
    "lastFetch": "2026-10-15T07:00:00+07:00",
    "hasil": "ok",
    "masukCapaian": false
  },
  {
    "id": "b6",
    "idPelatihan": "13112",
    "nama": "MIRROR - DTA 13112 NTWK 8-28 Oktober",
    "tema": "NTWK",
    "level": "Fundamental",
    "levelSementara": true,
    "mulai": "2026-10-08",
    "selesai": "2026-10-28",
    "totalModul": 28,
    "pendaftar": 24,
    "mengikuti": 20,
    "onboarding": 18,
    "lastFetch": "2026-10-15T07:00:00+07:00",
    "hasil": "tab_hilang",
    "masukCapaian": true
  },
  {
    "id": "b7",
    "idPelatihan": "13113",
    "nama": "MIRROR - DTA VBL 13113 MBLA 2-30 November",
    "tema": "MBLA",
    "level": "Fundamental",
    "mulai": "2026-11-02",
    "selesai": "2026-11-30",
    "totalModul": 28,
    "pendaftar": 10,
    "mengikuti": 0,
    "onboarding": 0,
    "lastFetch": "2026-10-15T07:00:00+07:00",
    "hasil": "ok",
    "masukCapaian": true
  }
];
export const lulusPerSkenario: Record<Skenario, Record<string, number>> = {
  "A": {
    "b1": 18,
    "b2": 36,
    "b3": 28,
    "b4": 4,
    "b5": 20,
    "b6": 6,
    "b7": 0
  },
  "B": {
    "b1": 18,
    "b2": 38,
    "b3": 29,
    "b4": 5,
    "b5": 20,
    "b6": 6,
    "b7": 0
  }
};
// Hasil evaluasi kode per skenario: kumulatif, portofolio (K,B,R,tingkat,alasan), perBatch (urut prioritas)
export const evaluasi = {
  "A": {
    "kumulatif": {
      "onboarding": 103,
      "lulus": 86,
      "capaian": 83.49514563106796
    },
    "portofolio": {
      "tingkat": "waspada",
      "alasan": "perlu_dipantau",
      "K": 4,
      "B": 14,
      "R": 0.2857142857142857
    },
    "perBatch": [
      {
        "id": "b3",
        "fase": "akhir",
        "sisaHari": 5,
        "tingkat": "kritis",
        "alasan": "tidak_mungkin_tercapai",
        "K": 4,
        "B": 2,
        "R": 2
      },
      {
        "id": "b2",
        "fase": "aktif",
        "sisaHari": 16,
        "tingkat": "kritis",
        "alasan": "beban_tinggi_fase_aktif",
        "K": 4,
        "B": 4,
        "R": 1
      },
      {
        "id": "b1",
        "fase": "selesai",
        "sisaHari": -45,
        "tingkat": "kritis",
        "alasan": "batch_selesai_target_belum_tercapai",
        "K": 4,
        "B": 3,
        "R": 1.3333333333333333
      },
      {
        "id": "b4",
        "fase": "pantau",
        "sisaHari": 36,
        "tingkat": "waspada",
        "alasan": "perlu_dipantau",
        "K": 4,
        "B": 8,
        "R": 0.5
      },
      {
        "id": "b5",
        "fase": "pantau",
        "sisaHari": 26,
        "tingkat": "belum_dapat_dinilai",
        "alasan": "level_belum_terkonfirmasi",
        "K": 0,
        "B": 0,
        "R": null
      },
      {
        "id": "b6",
        "fase": "pantau",
        "sisaHari": 13,
        "tingkat": "belum_dapat_dinilai",
        "alasan": "level_belum_terkonfirmasi",
        "K": 0,
        "B": 0,
        "R": null
      },
      {
        "id": "b7",
        "fase": "belum_mulai",
        "sisaHari": 46,
        "tingkat": "belum_dapat_dinilai",
        "alasan": "belum_mulai",
        "K": 0,
        "B": 0,
        "R": null
      }
    ]
  },
  "B": {
    "kumulatif": {
      "onboarding": 103,
      "lulus": 90,
      "capaian": 87.37864077669903
    },
    "portofolio": {
      "tingkat": "aman",
      "alasan": "target_tercapai",
      "K": 0,
      "B": 10,
      "R": 0
    },
    "perBatch": [
      {
        "id": "b5",
        "fase": "pantau",
        "sisaHari": 26,
        "tingkat": "belum_dapat_dinilai",
        "alasan": "level_belum_terkonfirmasi",
        "K": 0,
        "B": 0,
        "R": null
      },
      {
        "id": "b6",
        "fase": "pantau",
        "sisaHari": 13,
        "tingkat": "belum_dapat_dinilai",
        "alasan": "level_belum_terkonfirmasi",
        "K": 0,
        "B": 0,
        "R": null
      },
      {
        "id": "b7",
        "fase": "belum_mulai",
        "sisaHari": 46,
        "tingkat": "belum_dapat_dinilai",
        "alasan": "belum_mulai",
        "K": 0,
        "B": 0,
        "R": null
      },
      {
        "id": "b2",
        "fase": "aktif",
        "sisaHari": 16,
        "tingkat": "aman",
        "alasan": "target_tercapai",
        "K": 0,
        "B": 2,
        "R": 0
      },
      {
        "id": "b3",
        "fase": "akhir",
        "sisaHari": 5,
        "tingkat": "aman",
        "alasan": "target_tercapai",
        "K": 0,
        "B": 1,
        "R": 0
      },
      {
        "id": "b4",
        "fase": "pantau",
        "sisaHari": 36,
        "tingkat": "aman",
        "alasan": "target_tercapai",
        "K": 0,
        "B": 7,
        "R": 0
      },
      {
        "id": "b1",
        "fase": "selesai",
        "sisaHari": -45,
        "tingkat": "aman",
        "alasan": "target_tercapai",
        "K": 0,
        "B": 3,
        "R": 0
      }
    ]
  }
};
export const snapshotHarian = {
  "A": {
    "b1": [
      {
        "tanggal": "2026-08-31",
        "onboarding": 21,
        "lulus": 15
      },
      {
        "tanggal": "2026-09-07",
        "onboarding": 21,
        "lulus": 17
      },
      {
        "tanggal": "2026-09-15",
        "onboarding": 21,
        "lulus": 18
      }
    ],
    "b2": [
      {
        "tanggal": "2026-10-02",
        "onboarding": 4,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-03",
        "onboarding": 8,
        "lulus": 3
      },
      {
        "tanggal": "2026-10-04",
        "onboarding": 12,
        "lulus": 5
      },
      {
        "tanggal": "2026-10-05",
        "onboarding": 16,
        "lulus": 7
      },
      {
        "tanggal": "2026-10-06",
        "onboarding": 20,
        "lulus": 10
      },
      {
        "tanggal": "2026-10-07",
        "onboarding": 24,
        "lulus": 12
      },
      {
        "tanggal": "2026-10-08",
        "onboarding": 28,
        "lulus": 14
      },
      {
        "tanggal": "2026-10-09",
        "onboarding": 32,
        "lulus": 17
      },
      {
        "tanggal": "2026-10-10",
        "onboarding": 36,
        "lulus": 20
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 40,
        "lulus": 23
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 40,
        "lulus": 26
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 40,
        "lulus": 29
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 40,
        "lulus": 32
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 40,
        "lulus": 36
      }
    ],
    "b3": [
      {
        "tanggal": "2026-10-05",
        "onboarding": 4,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-06",
        "onboarding": 8,
        "lulus": 3
      },
      {
        "tanggal": "2026-10-07",
        "onboarding": 11,
        "lulus": 5
      },
      {
        "tanggal": "2026-10-08",
        "onboarding": 15,
        "lulus": 8
      },
      {
        "tanggal": "2026-10-09",
        "onboarding": 19,
        "lulus": 10
      },
      {
        "tanggal": "2026-10-10",
        "onboarding": 23,
        "lulus": 12
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 27,
        "lulus": 15
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 30,
        "lulus": 18
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 30,
        "lulus": 21
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 30,
        "lulus": 25
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 30,
        "lulus": 28
      }
    ],
    "b4": [
      {
        "tanggal": "2026-10-12",
        "onboarding": 4,
        "lulus": 1
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 8,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 12,
        "lulus": 3
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 12,
        "lulus": 4
      }
    ],
    "b5": [
      {
        "tanggal": "2026-10-10",
        "onboarding": 6,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 12,
        "lulus": 5
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 18,
        "lulus": 8
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 23,
        "lulus": 12
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 25,
        "lulus": 16
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 25,
        "lulus": 20
      }
    ],
    "b6": [
      {
        "tanggal": "2026-10-08",
        "onboarding": 3,
        "lulus": 0
      },
      {
        "tanggal": "2026-10-09",
        "onboarding": 6,
        "lulus": 1
      },
      {
        "tanggal": "2026-10-10",
        "onboarding": 9,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 13,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 16,
        "lulus": 3
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 18,
        "lulus": 4
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 18,
        "lulus": 5
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 18,
        "lulus": 6
      }
    ],
    "b7": []
  },
  "B": {
    "b1": [
      {
        "tanggal": "2026-08-31",
        "onboarding": 21,
        "lulus": 15
      },
      {
        "tanggal": "2026-09-07",
        "onboarding": 21,
        "lulus": 17
      },
      {
        "tanggal": "2026-09-15",
        "onboarding": 21,
        "lulus": 18
      }
    ],
    "b2": [
      {
        "tanggal": "2026-10-02",
        "onboarding": 4,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-03",
        "onboarding": 8,
        "lulus": 4
      },
      {
        "tanggal": "2026-10-04",
        "onboarding": 12,
        "lulus": 6
      },
      {
        "tanggal": "2026-10-05",
        "onboarding": 16,
        "lulus": 8
      },
      {
        "tanggal": "2026-10-06",
        "onboarding": 20,
        "lulus": 10
      },
      {
        "tanggal": "2026-10-07",
        "onboarding": 24,
        "lulus": 13
      },
      {
        "tanggal": "2026-10-08",
        "onboarding": 28,
        "lulus": 15
      },
      {
        "tanggal": "2026-10-09",
        "onboarding": 32,
        "lulus": 18
      },
      {
        "tanggal": "2026-10-10",
        "onboarding": 36,
        "lulus": 21
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 40,
        "lulus": 24
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 40,
        "lulus": 27
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 40,
        "lulus": 31
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 40,
        "lulus": 34
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 40,
        "lulus": 38
      }
    ],
    "b3": [
      {
        "tanggal": "2026-10-05",
        "onboarding": 4,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-06",
        "onboarding": 8,
        "lulus": 4
      },
      {
        "tanggal": "2026-10-07",
        "onboarding": 11,
        "lulus": 6
      },
      {
        "tanggal": "2026-10-08",
        "onboarding": 15,
        "lulus": 8
      },
      {
        "tanggal": "2026-10-09",
        "onboarding": 19,
        "lulus": 10
      },
      {
        "tanggal": "2026-10-10",
        "onboarding": 23,
        "lulus": 13
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 27,
        "lulus": 16
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 30,
        "lulus": 19
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 30,
        "lulus": 22
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 30,
        "lulus": 25
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 30,
        "lulus": 29
      }
    ],
    "b4": [
      {
        "tanggal": "2026-10-12",
        "onboarding": 4,
        "lulus": 1
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 8,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 12,
        "lulus": 3
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 12,
        "lulus": 5
      }
    ],
    "b5": [
      {
        "tanggal": "2026-10-10",
        "onboarding": 6,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 12,
        "lulus": 5
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 18,
        "lulus": 8
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 23,
        "lulus": 12
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 25,
        "lulus": 16
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 25,
        "lulus": 20
      }
    ],
    "b6": [
      {
        "tanggal": "2026-10-08",
        "onboarding": 3,
        "lulus": 0
      },
      {
        "tanggal": "2026-10-09",
        "onboarding": 6,
        "lulus": 1
      },
      {
        "tanggal": "2026-10-10",
        "onboarding": 9,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-11",
        "onboarding": 13,
        "lulus": 2
      },
      {
        "tanggal": "2026-10-12",
        "onboarding": 16,
        "lulus": 3
      },
      {
        "tanggal": "2026-10-13",
        "onboarding": 18,
        "lulus": 4
      },
      {
        "tanggal": "2026-10-14",
        "onboarding": 18,
        "lulus": 5
      },
      {
        "tanggal": "2026-10-15",
        "onboarding": 18,
        "lulus": 6
      }
    ],
    "b7": []
  }
};
// Daftar tindak lanjut batch b2 (FAWD). Nomor registrasi fiktif. noregSementara hanya untuk dialog 10 detik.
export const tindakLanjutB2 = [
  {
    "alias": "P-A1B2",
    "modulSelesai": 25,
    "totalModul": 28,
    "status": "tepi_ambang",
    "noregTersamar": "****2001",
    "noregSementara": "FKT-2001"
  },
  {
    "alias": "P-A583",
    "modulSelesai": 25,
    "totalModul": 28,
    "status": "tepi_ambang",
    "noregTersamar": "****2002",
    "noregSementara": "FKT-2002"
  },
  {
    "alias": "P-A954",
    "modulSelesai": 25,
    "totalModul": 28,
    "status": "tepi_ambang",
    "noregTersamar": "****2003",
    "noregSementara": "FKT-2003"
  },
  {
    "alias": "P-AD25",
    "modulSelesai": 26,
    "totalModul": 28,
    "status": "belum_lulus",
    "noregTersamar": "****2004",
    "noregSementara": "FKT-2004"
  },
  {
    "alias": "P-B0F6",
    "modulSelesai": 27,
    "totalModul": 28,
    "status": "belum_lulus",
    "noregTersamar": "****2005",
    "noregSementara": "FKT-2005"
  },
  {
    "alias": "P-B4C7",
    "modulSelesai": 27,
    "totalModul": 28,
    "status": "belum_lulus",
    "noregTersamar": "****2006",
    "noregSementara": "FKT-2006"
  },
  {
    "alias": "P-B898",
    "modulSelesai": 22,
    "totalModul": 28,
    "status": "belum_lulus_di_bawah_ambang",
    "noregTersamar": "****2007",
    "noregSementara": "FKT-2007"
  },
  {
    "alias": "P-BC69",
    "modulSelesai": 17,
    "totalModul": 28,
    "status": "belum_lulus_di_bawah_ambang",
    "noregTersamar": "****2008",
    "noregSementara": "FKT-2008"
  }
];
