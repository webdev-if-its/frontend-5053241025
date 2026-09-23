// TODO(Level 2a): beri tipe props yang benar — { tugas: Tugas } (impor tipe
// Tugas dari '../types', jangan tulis ulang bentuknya). Render satu <li>
// yang memuat teks tugas.teks. Lihat SOAL.md untuk kontrak lengkap.
import type { Tugas } from "../types"

type ItemTugasProps = {
  tugas: Tugas
}

export function ItemTugas({ tugas }: ItemTugasProps) {
  return <li>{tugas.teks}</li>
}
