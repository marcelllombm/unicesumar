import { cn } from "@/lib/utils";
import { Cake } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  color?: "white" | "green";
};

export default function Logo({ color = "green" }: LogoProps) {
  return (
    <Link
      href="/"
      title="Página Inicial"
      className={cn("flex gap-1 items-center justify-center", color === "green" ? "text-green-200" : "text-white")}
    >
      <Cake className="h-8 w-8" />
      <h1 className="font-black text-2xl">ConfeiTech</h1>
    </Link>
  );
}
