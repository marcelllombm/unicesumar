import ActiveLink from "./active-link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <p></p>
      </div>
      <nav>
        <ActiveLink href="/produtos">Produtos</ActiveLink>
        <ActiveLink href="/fazer-pedidos">Fazer Pedido</ActiveLink>
        <ActiveLink href="/sobre">Sobre</ActiveLink>
        <ActiveLink href="/contato">Contato</ActiveLink>
      </nav>
      <div>
        <h2>Contato</h2>

        <address>
          <span>(82) 99999-9999</span>
          <a href="mailto:contato@confeitech.com.br">contato@confeitech.com.br</a>
          <br />
          Arapiraca, AL
        </address>
      </div>
    </footer>
  );
}
