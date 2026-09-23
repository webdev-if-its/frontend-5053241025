// TODO(Level 10): beri tipe props yang benar — { onKirim: (pesan: string) =>
// void }. Gabungkan semua konsep pertemuan ini: controlled input berlabel
// "Pesan" + tombol submit "Kirim" di dalam <form>. Tombol disabled kalau
// isi pesan (setelah trim) kosong. Saat submit: cegah reload, panggil
// onKirim(pesan yang sudah di-trim), lalu kosongkan input.
// Lihat SOAL.md untuk kontrak lengkap.

import { useState } from "react";

type FormPesanProps = {
  onKirim: (pesan: string) => void;
};

export function FormPesan({ onKirim }: FormPesanProps) {
  const [pesan, setPesan] = useState("");

  const pesanTrim = pesan.trim();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (pesanTrim) {
          onKirim(pesanTrim);
          setPesan("");
        }
      }}
    >
      <label htmlFor="pesan">Pesan</label>
      <input
        type="text"
        id="pesan"
        name="pesan"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
      />

      <button type="submit" disabled={pesanTrim === ""}>
        Kirim
      </button>
    </form>
  );
}
