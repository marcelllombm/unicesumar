import { Cake } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" title="Página Inicial" className="flex gap-1 items-center  justify-center text-green-200">
      <Cake className="h-8 w-8" />
      <h1 className="font-black text-2xl">ConfeiTech</h1>
    </Link>
  );
}
