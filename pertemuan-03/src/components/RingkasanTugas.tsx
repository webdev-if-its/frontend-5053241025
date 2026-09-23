import type { Tugas } from "../types";

type RingkasanTugasProps = {
  tugas: Tugas[];
};

export function RingkasanTugas({ tugas }: RingkasanTugasProps) {
  const jumlahSelesai = tugas.filter((t) => t.selesai).length;
  const semuaSelesai = tugas.length > 0 && tugas.every((t) => t.selesai);

  return (
    <div>
      <p>
        {jumlahSelesai} dari {tugas.length} selesai
      </p>
      {semuaSelesai && <p>Semua tugas selesai! 🎉</p>}
    </div>
  );
}
