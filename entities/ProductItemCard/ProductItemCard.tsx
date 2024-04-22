import { ProductItem } from "@/lib/types/item";
import Link from "next/link";
import Image from "next/image";
import cls from "./ProductItemCard.module.scss";
import { Card } from "@/components/Card/Card";
import { Text, TextSize } from "@/components/Text/Text";
import { classNames } from "@/lib/classNames/classNames";

interface ProductItemCardProps {
  className?: string;
  item: ProductItem;
}

export const ProductItemCard = (props: ProductItemCardProps) => {
  const { className, item } = props;
  return (
    <Link href={`/${item.id}`}>
      <Card className={classNames(cls.card, {}, [className])}>
        <Image
          src={item?.img?.small}
          alt={item.title}
          width={192}
          height={84}
        />
        <Text
          title={`${item.title}, ${item.year}`}
          text={
            item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
          }
          size={TextSize.M}
          className={cls.content}
        />
      </Card>
    </Link>
  );
};
