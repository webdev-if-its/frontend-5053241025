// TODO(Level 9): beri tipe props yang benar — { detikAwal: number;
// onSelesai: () => void }. Tampilkan "Sisa: {n}" yang mulai dari detikAwal
// dan berkurang 1 tiap detik. Saat mencapai 0: panggil onSelesai TEPAT
// SEKALI, berhenti di 0 (tidak negatif), dan tidak ada timer tersisa.
// Saat komponen dilepas di tengah jalan, timer harus dibersihkan dan
// onSelesai tidak boleh terpanggil.
// Lihat SOAL.md untuk kontrak lengkap.

import { useEffect, useRef, useState } from "react";

type CountdownProps = {
  detikAwal: number;
  onSelesai: () => void;
};

export function Countdown({ detikAwal, onSelesai }: CountdownProps) {
  const [detik, setDetik] = useState(detikAwal);
  const onSelesaiRef = useRef(onSelesai);

  useEffect(() => {
    onSelesaiRef.current = onSelesai;
  }, [onSelesai]);

  const selesai = detik <= 0;
  useEffect(() => {
    if (selesai) return;
    const interval = setInterval(() => {
      setDetik((d) => Math.max(0, d - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [selesai]);

  useEffect(() => {
    if (selesai) onSelesaiRef.current();
  }, [selesai]);

  return <p>Sisa: {detik}</p>;
}
