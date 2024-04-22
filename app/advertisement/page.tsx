import { AdsForm } from "@/entities/AdsForm/AdsForm";
import Link from "next/link";
import Image from "next/image";
import cls from '../layout.module.scss'


export default async function Advertisement() {
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
     <AdsForm />
    </>
  );
}
