import { Metadata } from "next"

// app/page.tsx ou pages/index.tsx
import { Carrossel } from "./components/carousel/carousel";


export const metadata: Metadata = {
// 1. Tags Essenciais para o Google SEO
  title: 'MHS - Math High Speed | Aprendizado e Programação IFMT',
  description: ' A jornada de aprendizado do Developer Natanael Figueiredo: projetos de programação e conhecimentos adquiridos na faculdade IFMT – Campus Campo Verde. Descubra aulas, projetos e tutoriais. ',

  // Novo campo de verificação
  verification: {
    google: '7vaInzGYXuMT_tAvMe3-FYThdaBW0xRTHeVM27jxFS8', // Cole aqui o código dentro do 'content='
  },
  
  // Tags para o Google (comportamento de rastreamento)
  robots: 'index, follow', // Diz ao Google para indexar esta página e seguir os links.

  // 2. Open Graph Tags (OG) - Cruciais para Redes Sociais (Facebook, WhatsApp)
  openGraph: {
    title: 'MHS - Math High Speed | Programação e Estudos IFMT', // Título para redes sociais (pode ser um pouco diferente do principal)
    description: 'Espaço dedicado aos projetos de programação e conhecimentos do Developer Natanael Figueiredo (IFMT - Campo Verde). Venha aprender sobre desenvolvimento!',
    url: 'https://mhs-school.vercel.app/', // URL canônica (completa)
    siteName: 'MHS - Math High Speed',
    images: [
      {
        url: '/image/mhs_school.jpg', // Substitua pela URL da sua imagem (idealmente 1200x630 pixels)
        width: 1200,
        height: 630,
        alt: 'MHS na Escola',
      },
    ],
    locale: 'pt_BR',
    type: 'website', // Tipo de conteúdo
  },

  // 3. Twitter Cards (Para compartilhamento no Twitter/X)
  twitter: {
    card: 'summary_large_image', // Tipo de cartão
    title: 'MHS - Math High Speed | Programação e Estudos IFMT',
    description: 'Espaço dedicado aos projetos de programação e conhecimentos do Developer Natanael Figueiredo (IFMT - Campo Verde). Venha aprender sobre desenvolvimento!',
    images: ['/image/msh_school.jpg'], // Substitua pela URL da sua imagem
  },

  // 4. Ícones
  icons: {
    icon: '/logomhs.svg',
    shortcut: '/logomhs.svg', // Para compatibilidade
    apple: '/logomhs.svg', // Para dispositivos Apple
  },

  // Tag do autor
  authors: [{ name: 'Natanael Figueiredo', url: 'https://mhs-school.vercel.app/contatos' }],

  // Palavras-chave relevantes (não muito usadas pelo Google, mas boas para organização)
  keywords: ['MHS', 'Next.js', 'Programação', 'IFMT', 'Natanael Figueiredo', 'Desenvolvimento Web', 'Aulas', 'Responsividade', 'css',],
}

export default function Home(){
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Home Page - MHS</h1>
      <Carrossel /> {/* Só aparece aqui */}
    </div>
  )
}