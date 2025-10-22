import ActiveLink from "./active-link"
import Logo from "./logo"
import { Button } from "./ui/button"

export default function Header(){
    return(
    <header>
        <div >
        <Logo/>
        <nav className="flex gap-6">
            <ActiveLink href='/'>Home</ActiveLink>
            <ActiveLink href='/produtos'>Produtos</ActiveLink>
            <ActiveLink href='/fazer-pedido'>Fazer pedido</ActiveLink>
            <ActiveLink href='/sobre'>Sobre</ActiveLink>
            <ActiveLink href='/contato'>Contato</ActiveLink>
            <Button variant="secondary" asChild>
            <ActiveLink href='/admin'>Entrar</ActiveLink>
            </Button>
            </nav>
        </div>
    </header>
    )
}