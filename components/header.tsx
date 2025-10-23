import ActiveLink from "./active-link";
import Logo from "./logo";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header>
      <div
        className="
      fixed p-3 top-0 z-50 w-full border-b
     border-green-300/40 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60
      flex flex-col md:flex-row md:gap-8 md:items-center md:justify-center md:mt-5"
      >
        <Logo />
        <nav className="flex gap-2 items-center justify-center mt-3 md:mt-0">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/produtos">Produtos</ActiveLink>
          <ActiveLink href="/fazer-pedido">Fazer pedido</ActiveLink>
          <ActiveLink href="/sobre">Sobre</ActiveLink>
          <ActiveLink href="/contato">Contato</ActiveLink>
          <Button variant="primary" asChild>
            <ActiveLink href="/admin">Entrar</ActiveLink>
          </Button>
        </nav>
      </div>
    </header>
  );
}
