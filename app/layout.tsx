import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import cls from "./layout.module.scss";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { VStack } from "@/components/Stack/VStack/VStack";

const lato = Lato({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Auto App",
  description: "Here you can find your favorite car",
};

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <VStack max justify="center" align="center">
          <main className={cls.container}>{children}</main>
        </VStack>
      </body>
    </html>
  );
}
