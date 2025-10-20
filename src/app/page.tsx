import { Metadata } from "next"

// app/page.tsx ou pages/index.tsx
import { Carrossel } from "./components/carousel/carousel";


export const metadata: Metadata = {

  title: 'MHS - Math High Speed',
  description: ' Este site é um espaço dedicado à jornada de aprendizado do Developer Natanael Figueiredo, onde são compartilhados conhecimentos adquiridos nas aulas da faculdade IFMT – Campus Campo Verde.',
  icons: '/logomhs.svg',
}

export default function Home(){
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Home Page - MHS</h1>
      <Carrossel /> {/* Só aparece aqui */}
    </div>
  )
}