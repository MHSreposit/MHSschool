import Link from "next/link"

export default function NotFound (){
    return(
        <div>
            <h1>Página 404 não encontrado!!</h1>
            <p>Esta página que tentou acessar não existe</p>
            <Link href='/' style={{color:'blue'}}> 
                Voltar para a Home 
            </Link>
        </div>
    )
}