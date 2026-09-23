// TODO(Level 1): beri tipe props yang benar — { onKlik: (e:
// React.MouseEvent<HTMLButtonElement>) => void }. Render sebuah <button>
// bertuliskan "Klik Saya" yang, SAAT DIKLIK (bukan saat render), memanggil
// onKlik dengan event klik-nya.
// Lihat SOAL.md untuk kontrak lengkap.

type TombolKlikProps = {
  onKlik: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function TombolKlik({ onKlik }: TombolKlikProps) {
  return <button onClick={onKlik}>Klik Saya</button>
}
