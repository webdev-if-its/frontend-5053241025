import type { Tugas } from "../types";
import { DaftarTugasLengkap } from "./DaftarTugasLengkap";
import { RingkasanTugas } from "./RingkasanTugas";

type AplikasiTodoProps = {
  tugas: Tugas[];
  onHapus: (id: string) => void;
};

export function AplikasiTodo({ tugas, onHapus }: AplikasiTodoProps) {
  return (
    <div>
      <RingkasanTugas tugas={tugas} />
      <DaftarTugasLengkap tugas={tugas} onHapus={onHapus} />
    </div>
  );
}
