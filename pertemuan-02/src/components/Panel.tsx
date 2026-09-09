// TODO(Level 8): beri tipe props yang benar — { judul: string; children: ReactNode }
// (impor tipe ReactNode dari 'react'). Render <section> berisi judul (mis.
// di <h3>) DAN {children} di dalamnya. Lihat SOAL.md untuk kontrak lengkap.

import type { ReactNode } from "react"

interface Anak {
  judul: string
  children: ReactNode
}

export function Panel({ judul, children }: Anak) {
  return <section>
    <h1>{judul}</h1>
    <h3>{children}</h3>
  </section>
}
