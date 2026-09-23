import type { Tugas } from "../types";
import { Button } from "./Button";

type DaftarTugasLengkapProps = {
  tugas: Tugas[];
  onHapus: (id: string) => void;
};

export function DaftarTugasLengkap({ tugas, onHapus }: DaftarTugasLengkapProps) {
  if (tugas.length === 0) {
    return <p>Tidak ada tugas</p>
  }

  return (
    <div>
      <ul>
        {tugas.map((item) => (
          <li key={item.id}>
            <span>{item.teks}</span>{" "}
            <Button variant="danger" onClick={() => onHapus(item.id)}>
              Hapus
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
