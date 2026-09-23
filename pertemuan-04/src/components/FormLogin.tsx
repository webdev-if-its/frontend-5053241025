// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.

type FormLoginProps = {
  onLogin: (email: string) => void
}

export function FormLogin({ onLogin }: FormLoginProps) {
  return <form onSubmit={(e) => {
    e.preventDefault()
    onLogin((e.currentTarget.elements.namedItem('email') as HTMLInputElement).value)
  }}>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" />
    <button type="submit">Masuk</button>
  </form>
}
