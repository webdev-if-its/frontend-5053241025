// TODO(Level 9): beri tipe props yang benar — { tugas: string[] }. Kalau
// array kosong, render teks "Tidak ada tugas". Kalau tidak kosong, render
// <ul> berisi satu <li> per tugas — WAJIB beri `key` yang tepat di tiap
// <li> (React akan mencatat warning kalau key hilang/salah, dan itu
// dicek otomatis). Lihat SOAL.md untuk kontrak lengkap.

interface Tugas {
  tugas: string[]
}

export function DaftarTugas({ tugas }: Tugas) {
  if (tugas.length === 0) {
    return <h3>Tidak ada tugas</h3>
  }

  return (
    <ul>
      {tugas.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

