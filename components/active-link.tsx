"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
    children: React.ReactNode;
} &  LinkProps;

export default function ActiveLink({children, href, ...rest}:ActiveLinkProps){
    const pathname = usePathname();
    const isCurrentPath = pathname === href;
    return(
        <Link href={href}
        className={cn("text-action-sm transition-colors hover:text-green-900",
        isCurrentPath ? "text-green-900 " : "text-green-700")}
        >{children}</Link>
    )
}