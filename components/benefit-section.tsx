"use client";
import { Cake, Clock5, Heart, Star } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function BenifitSection() {
  return (
    <section className="container relative">
      <div>
        <h1 className="text-green-300 text-5xl mt-[80px] mb-[80px] font-bold  w-[300px] md:w-[500px] m-auto text-center">
          Por que escolher a ConfeiTech?
        </h1>

        <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2">
          <Card className="text-green-300 ">
            <CardHeader className="flex flex-col items-center justify-center">
              <Cake className="h-10 w-10" />
              <CardTitle className="text-2xl font-bold text-green-200 p-4">Produtos Artesanais</CardTitle>
              <CardDescription>Feitos com ingredientes selecionados e muito carinho</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center justify-center">
              <Clock5 className="h-10 w-10" />
              <CardTitle className="text-2xl font-bold text-green-200 p-4">Entregas Rápidas</CardTitle>
              <CardDescription>Feitos com ingredientes selecionados e muito carinho</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center justify-center">
              <Heart className="h-10 w-10" />
              <CardTitle className="text-2xl font-bold text-green-200 p-4">Feito com Amor</CardTitle>
              <CardDescription>Cada produto é único e especial</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center justify-center">
              <Star className="h-10 w-10" />
              <CardTitle className="text-2xl font-bold text-green-200 p-4">Qualidade Premium</CardTitle>
              <CardDescription>Os melhores ingredientes para você</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
