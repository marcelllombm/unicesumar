"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

export default function ActiveLink({ children, href, className, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;
  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-action-sm transition-colors hover:text-green-300",
        isCurrentPath ? "text-green-300 font-black underline" : "text-green-200 font-black",
        className // 👈 ESSENCIAL: injeta as classes vindas do Button aqui
      )}
    >
      {children}
    </Link>
  );
}
