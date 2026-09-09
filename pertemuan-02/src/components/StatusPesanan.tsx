// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->
// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.
import type { Status } from "../types"

type Stats = {
  status: Status
}

export function StatusPesanan({ status }: Stats) {
  const label: Record<Status, string> = {
    pending: "Menunggu",
    selesai: "Selesai",
    batal: "Dibatalkan",
  }

  return <p>{label[status]}</p>
}
