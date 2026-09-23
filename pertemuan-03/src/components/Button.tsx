import type { ReactNode } from "react"

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'danger'
  children: ReactNode
  onClick?: () => void
}

const styleVariant: Record<ButtonProps['variant'], string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

export function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button className={`rounded-md px-4 py-2 font-medium ${styleVariant[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}
