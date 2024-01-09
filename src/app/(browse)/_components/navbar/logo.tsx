import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/" className="inline-block mr-12 sm:mr-8 lg:mr-0">
      <div className="flex items-center lg:gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 shrink-0 lg:shrink">
          <Image src="/spooky.svg" alt="Gamehub" height="32" width="32" />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Gamehub</p>
          <p className="text-xs text-muted-foreground">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};