// TODO(Level 2): beri tipe props yang benar — { nama: string }. Lalu render
// DUA elemen sejajar TANPA elemen pembungkus tambahan di DOM (gunakan
// Fragment, bukan <div>). Lihat SOAL.md untuk kontrak lengkap.
interface Nama {
  nama: string
}

export function Identitas({ nama }: Nama) {
  return <>
    <h2>Identitas: {nama}</h2>
    <p>Senang bertemu denganmu!</p>
  </>
}
