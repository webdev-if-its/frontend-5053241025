// TODO(Level 5): lengkapi TIGA function component di bawah ini (komposisi
// komponen — lihat SOAL.md untuk kontrak lengkap tiap fungsi).

interface Page {
  judul: string
}

// Header menerima { judul: string }, render <header><h1>{judul}</h1></header>
export function Header({ judul }: Page) {
  return <header>
    <h1>{judul}</h1>
  </header>
}

// Footer tidak menerima props, render <footer><p>© 2026 Kelas Frontend</p></footer>
export function Footer() {
  return <footer>
    <h3>Durin Draco Rubedo</h3>
  </footer>
}

// Halaman menerima { judul: string }, render <Header judul={judul} />
// diikuti <Footer /> (pakai Fragment, JANGAN tambah <div> pembungkus baru).
export function Halaman({ judul }: Page) {
  return <>
    <Header judul={judul} />
    <footer />
  </>

}
