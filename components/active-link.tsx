"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: React.ReactNode;
  className?: string;
  footer?: boolean;
  color?: "green" | "white";
} & LinkProps;

export default function ActiveLink({ children, href, className, footer, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;
  const classIsCurrentPath = isCurrentPath ? "text-green-300 font-black underline" : "text-green-200 font-black";
  const classFooter = footer ? "text-white font-black hover:text-green-100" : "text-green-200 font-black";
  const footerClass = footer ? classFooter : classIsCurrentPath;
  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-action-sm transition-colors hover:text-green-300",
        footerClass,
        className // 👈 ESSENCIAL: injeta as classes vindas do Button aqui
      )}
    >
      {children}
    </Link>
  );
}
