// TODO(Level 9): beri tipe props yang benar — { isi: string }. Gunakan state
// boolean: awalnya detail tersembunyi dan tombol bertuliskan "Tampilkan
// detail". Saat diklik, teks props.isi muncul dan tombol berubah jadi
// "Sembunyikan detail"; klik lagi menyembunyikannya (elemennya harus
// benar-benar hilang dari DOM).
// Lihat SOAL.md untuk kontrak lengkap.

import { useState } from "react";

type DetailToggleProps = {
  isi: string;
};

export function DetailToggle({ isi }: DetailToggleProps) {
  const [detailTerlihat, setDetailTerlihat] = useState(false);

  return (
    <div>
      <button onClick={() => setDetailTerlihat(!detailTerlihat)}>
        {detailTerlihat ? "Sembunyikan detail" : "Tampilkan detail"}
      </button>
      {detailTerlihat && <p>{isi}</p>}
    </div>
  );
}
