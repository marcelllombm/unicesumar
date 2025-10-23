import Link from "next/link";
import ActiveLink from "./active-link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className=" bg-green-300 text-white p-6">
      <div className="container mt-8">
        <div className="  grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-3 w-m-md">
          <div className="flex flex-col items-start gap-3">
            <Logo color="white" />
            <p>Confeitaria artesanal com tecnologia e sabor.</p>
          </div>
          <nav className="flex flex-col gap-2">
            <h1>Links Rápidos</h1>
            <ActiveLink footer href="/produtos">
              Produtos
            </ActiveLink>
            <ActiveLink footer href="/fazer-pedidos">
              Fazer Pedido
            </ActiveLink>
            <ActiveLink footer href="/sobre">
              Sobre
            </ActiveLink>
            <ActiveLink footer href="/contato">
              Contato
            </ActiveLink>
          </nav>
          <div>
            <h2>Contato</h2>

            <address className="flex flex-col gap-2">
              <span>(82) 99999-9999</span>
              <Link href="mailto:contato@confeitech.com.br">contato@confeitech.com.br</Link>
              Arapiraca, AL
            </address>
          </div>
        </div>
        <div className="text-center text-white border-t-[1px] border-white/20 p-6 mt-6">
          © 2025 ConfeiTech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
