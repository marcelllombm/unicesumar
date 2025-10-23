import Link from "next/link";
import { Button } from "./ui/button";

type FeaturedSectionProps = {
  children: React.ReactNode;
  title: string;
  href?: string;
  link?: string;
  className?: string;
  variantType?: "primary" | "secondary";
  button?: boolean;
};

export default function FeaturedSection({
  children,
  title,
  href,
  link,
  variantType = "primary",
  className,
}: FeaturedSectionProps) {
  return (
    <section
      className="max-w-xl
 md:rounded-2xl m-auto  bg-green-300 p-10 flex flex-col items-center justify-center gap-5 text-white mt-[80px] mb-[80px]"
    >
      <h1 className="text-2xl text-write ">{title}</h1>
      <p>{children}</p>
      {href && link && (
        <Button variant={variantType}>
          <Link href={href}>{link}</Link>
        </Button>
      )}
    </section>
  );
}
