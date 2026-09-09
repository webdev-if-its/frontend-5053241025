// TODO(Level 1): beri tipe props yang benar (bukan `any`) — objek dengan
// dua field: nama (string) dan nrp (string). Lalu render SATU root element
// yang memuat teks "Nama: {nama}" dan "NRP: {nrp}" (boleh di elemen
// terpisah, asal berada di dalam satu pembungkus). Lihat SOAL.md untuk
// kontrak lengkap.

interface NamaNRP {
  nama: string
  nrp: string
}

export function Profil({ nama, nrp }: NamaNRP) {
  return <div>
    <h3>Nama : {nama}</h3>
    <h3>NRP : {nrp}</h3>
  </div>
}

