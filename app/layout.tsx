import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import cls from "./layout.module.scss";
import { Navbar } from "@/widgets/Navbar/Navbar";

const lato = Lato({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Auto App",
  description: "Here you can find your favorite car",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className={cls.container}>
          <div className={cls.content}>{children}</div>
        </main>
      </body>
    </html>
  );
}
