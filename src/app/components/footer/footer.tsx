import "./footer.css"; // ou use módulos: import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contato">
          <h4>Contato</h4>
          <p>Email: mathhighspeed@outlook.com</p>
          <p>Telefone: (66) 99699-5776</p>
          <p>Endereço: Campo Verde - MT, Brasil</p>
        </div>
        <div className="direitos">
          <p>© {new Date().getFullYear()} MHS - Math High Speed. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}