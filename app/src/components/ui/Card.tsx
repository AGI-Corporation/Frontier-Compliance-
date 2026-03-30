import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#0f1117] border border-[#1a1f2e] rounded-xl ${className}`}>
      {children}
    </div>
  )
}
