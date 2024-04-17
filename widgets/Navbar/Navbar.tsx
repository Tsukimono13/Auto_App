"use client"
import Link from "next/link";
import React from "react";
import cls from "./Navbar.module.scss";
import Image from "next/image";
import { HStack } from "@/components/Stack/HStack/HStack";
import { Button, ThemeButton } from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter()
  return (
    <header className={cls.Navbar}>
      <Link href={"/"}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Site logo"
          width={88}
          priority
          height={24}
        />
      </Link>
      <HStack gap="20">
        <Button theme={ThemeButton.PRIMARY} onClick={() => router.push('/')}>Войти</Button>
        <Button theme={ThemeButton.SECONDARY}>Разместить объявление</Button>
      </HStack>
      {/* <Link href={"/products"}>Products</Link> */}
    </header>
  );
};
