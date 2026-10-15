// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react";

type TimerBelajarProps = {
  detikAwal: number;
};

export function TimerBelajar({ detikAwal }: TimerBelajarProps) {
  const [sisa, setSisa] = useState(detikAwal);
  const [berjalan, setBerjalan] = useState(false);

  const selesai = sisa <= 0;
  const aktif = berjalan && !selesai;

  useEffect(() => {
    if (!aktif) return;
    const interval = setInterval(() => {
      setSisa((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [aktif]);

  useEffect(() => {
    const judulLama = document.title;
    document.title = `Sisa: ${sisa} detik`;
    return () => {
      document.title = judulLama;
    };
  }, [sisa]);

  return (
    <div>
      <p>Sisa: {sisa} detik</p>
      {selesai && <p>Selesai!</p>}
      <button onClick={() => setBerjalan((b) => !b)} disabled={selesai}>
        {aktif ? "Jeda" : "Mulai"}
      </button>
      <button
        onClick={() => {
          setSisa(detikAwal);
          setBerjalan(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}
