// TODO(Level 5): beri tipe props yang benar — { prioritas: boolean }. Pakai
// LOGICAL OPERATOR (&&) di dalam JSX: render sebuah elemen yang memuat kata
// "Prioritas" HANYA kalau prioritas bernilai true — kalau false, JANGAN
// render elemen itu sama sekali (bukan cuma disembunyikan lewat CSS).
// Lihat SOAL.md untuk kontrak lengkap.

type PrioritasProps = {
  prioritas: boolean
}

export function Lencana({ prioritas }: PrioritasProps) {
  return <div>
    {prioritas === true && <span>Prioritas</span>}
  </div>
}
