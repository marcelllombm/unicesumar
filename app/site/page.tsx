import ActiveLink from "@/components/active-link";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Site() {
  return (
    <>
      <Header />
      <main className="relative mt-16 ">
        <section className=" relative z-20 p-24 bg-gradient-to-b from-green-300/20 to-green-300/40">
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
      </main>
    </>
  );
}
