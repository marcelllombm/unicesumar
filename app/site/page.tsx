import BenifitSection from "@/components/benefit-section";
import FeaturedSection from "@/components/featured-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Site() {
  return (
    <>
      <Header />
      <main className="relative mt-16 ">
        <HeroSection />
        <BenifitSection />
        <FeaturedSection
          title="Pronto para adoçar seu dia?"
          href="/fazer-pedido"
          link="Fazer pedido"
          button
          variantType="secondary"
        >
          Faça seu pedido agora e receba em casa com todo carinho!
        </FeaturedSection>
      </main>
    </>
  );
}
