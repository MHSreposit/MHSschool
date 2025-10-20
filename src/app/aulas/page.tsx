import Link from "next/link"


export default function Aulas() {
  return (
    <div>
      <h1>Aulas de fundamentos e desenvolvimento WEB</h1>

      <Link href="/aulas/devWeb/aula01" style={{color:'red'}}>
        Aula 01 - Desafios
      </Link>
    </div>
  );
}
