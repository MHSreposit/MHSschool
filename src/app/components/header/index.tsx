"use client";
import Link from "next/link";
import { useState } from "react";
import "./header.css"; // você pode criar esse arquivo para os estilos

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <Link href="/">
        <img src="/logomhs.png" alt="Logo MHS" className="logo-img" />
        <h1 className="logo-text">MHS at School</h1>
      </Link>

      <nav className={`menu ${menuAberto ? "ativo" : ""}`}>
        <ul>
          <li>
            <Link href="/aulas">AULAS</Link>
          </li>
          <li>
            <Link href="/contatos">Contatos</Link>
          </li>
        </ul>
      </nav>

      <button className="hamburguer" onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>
    </header>
  );
}