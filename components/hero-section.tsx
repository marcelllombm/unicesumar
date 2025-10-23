import ActiveLink from "./active-link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <>
      <section className=" relative z-20 p-24 bg-gradient-to-b from-green-300/20 to-green-300/40 mt-[-4px]">
        <div
          className="absolute inset-0 bg-[url('/banner-hero.jpeg')] 
      bg-cover bg-center bg-no-repeat opacity-20
      "
        />
        <div className="container relative">
          <h1 className="text-5xl md:text-7xl text-green-300  w-[300px] md:w-[500px] m-auto text-center">
            Bem-vindo à ConfeiTech
          </h1>
          <p className="text-center font-bold text-green-300 font- p-8">
            Confeitaria artesanal com tecnologia e sabor inigualável
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="secondary" asChild>
              <ActiveLink href="/produtos">Ver Produtos</ActiveLink>
            </Button>
            <Button variant="third" asChild>
              <ActiveLink href="/fazer-pedido">Fazer Pedido</ActiveLink>
            </Button>
          </div>
        </div>
      </section>
      <section className="container relative flex flex-col items-center justify-center">
        <h1 className="text-green-300 text-5xl mt-[80px] font-bold">Nosso História</h1>
        <p className=" text-gray-400 text-center p-5 mt-[60px]">
          A ConfeiTech nasceu da paixão pela confeitaria artesanal e pela tecnologia. Combinamos receitas tradicionais
          com processos modernos de gestão para entregar produtos excepcionais com a melhor experiência para nossos
          clientes. Cada doce é feito com ingredientes selecionados e muito amor.
        </p>
      </section>
    </>
  );
}
