// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.

import { useState } from "react";

// Lihat SOAL.md untuk kontrak lengkap.
export function KalkulatorMini() {
  const [angkaA, setAngkaA] = useState("");
  const [angkaB, setAngkaB] = useState("");

  return (
    <div>
      <label htmlFor="angkaA">Angka A</label>
      <input
        type="number"
        id="angkaA"
        value={angkaA}
        onChange={(e) => setAngkaA(e.target.value)}
      />
      <label htmlFor="angkaB">Angka B</label>
      <input
        type="number"
        id="angkaB"
        value={angkaB}
        onChange={(e) => setAngkaB(e.target.value)}
      />
      <p>Hasil: {Number(angkaA || 0) + Number(angkaB || 0)}</p>
    </div>
  );
}
