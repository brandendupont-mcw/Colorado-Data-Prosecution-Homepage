import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="bg-lwhite">
      
      {children}
      
      </section>
  )
}
