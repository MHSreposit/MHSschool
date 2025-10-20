"use client";
import "./estilo.css";
import { useState } from "react";

export default function Desafio() {
  const [lista, setLista] = useState<string[]>([]);
  const [texto, setTexto] = useState("");

  const mudarCor = () => {
    const cores = ["blue", "green", "red", "orange", "purple", "pink", "yellow", "#00CED1", "#FF69B4"];
    const aleatoria = cores[Math.floor(Math.random() * cores.length)];
    const paragrafo = document.getElementById("meuParagrafo");
    if (paragrafo) {
      paragrafo.style.backgroundColor = aleatoria;
    }
  };

  const mostrarTexto = () => {
    if (texto.trim() !== "") {
      setLista([...lista, texto]);
      setTexto("");
    }
  };

  const limparLista = () => {
    setLista([]);
  };

  return (
    <div className="container-fieldsets centralizar">
      {/* DESAFIO ALTERAR COR DO BACKGROUND */}
      <fieldset>
        <h2 style={{ textAlign: "center" , color:'blue', fontWeight: "bold"}}>Alterar a cor do Texto</h2>
        <br></br>
        <p id="meuParagrafo">
          Este é o parágrafo que terá a cor de fundo alterada.
        </p>
        <div className="centralizarNa-div">
          <button onClick={mudarCor} className="botao">
            Clique para mudar a cor
          </button>
        </div>
      </fieldset>

      <br />

      {/* DESAFIO EXIBIR TEXTO */}
      <fieldset>
        <h2 style={{ textAlign: "center" , color:'blue', fontWeight: "bold"}}>Mostrar Texto Digitado</h2>
        <br />
        <input
          type="text"
          id="campoTexto"
          placeholder="Digite algo aqui"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={mostrarTexto} className="botao-adicionar">
          Mostrar Texto
        </button>
        <button onClick={limparLista} className="botao-limpar">
          Clear
        </button>

        <ul id="listaResultados">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </fieldset>

      <br />

      {/* DESAFIO TROCA DE IMAGENS */}
  '      <fieldset className="fieldset-center">
          <h2 style={{ textAlign: "center", color:'blue', fontWeight: "bold"}}>Troca de imagens</h2>
          <br />
          <p style={{fontSize:'10px', fontFamily:'cursive', fontStyle:'italic'}}>Passa o mouse sobre a Imagem.</p>
          <div className="imagem-hover centralizarNa-div"></div>
        </fieldset>'
    </div>
  );
}