import { DetailedProductItem } from "@/entities/DetailedProductItem/DetailedProductItem";
import { Metadata } from "next";
import cls from '../layout.module.scss'
import Image from "next/image";
import Link from "next/link";
import { fetchItemById } from "@/services/fetchItemById/fetchItemById";

interface DetailedItemProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(props: DetailedItemProps): Promise<Metadata> {
  const { params: { id } } = props;
  
  const item = await fetchItemById(id);
  return {
    title: item.title,
  };
}

export default async function DetailedItem(props: DetailedItemProps) {
  const { params: { id } } = props;

  const item = await fetchItemById(id);

  return (
    <>
    <Link href={"/"}>
      <Image
        src="/assets/icons/back.svg"
        height={24}
        width={24}
        alt="Return back"
        className={cls.icon} />
    </Link>
    <DetailedProductItem item={item} />
    </>
);
}
