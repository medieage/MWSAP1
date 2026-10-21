import type { Metadata } from "next";
import "./globals.css";
import "./background.css";
import "./marquee.css";
import { SiteBackground } from "@/components/site-background";

export const metadata: Metadata = {
  title: "Артём Попов — музыка, видео, концерты",
  description: "Музыка, видео, афиша и связь с командой Артёма Попова.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Browser extensions such as TokenPocket inject attributes on <html> before hydration.
  return <html lang="ru" suppressHydrationWarning><body><SiteBackground />{children}</body></html>;
}
