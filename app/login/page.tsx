import Link from "next/link";
import Image from "next/image";
import cls from '../layout.module.scss'
import { LoginForm } from "@/entities/LoginForm/LoginForm";

export default async function Login() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/assets/icons/back.svg"
          height={24}
          width={24}
          alt="Return back"
          className={cls.icon}
        />
      </Link>
      <LoginForm />
    </>
  );
}
