import { HStack } from "@/components/Stack/HStack/HStack";
import { VStack } from "@/components/Stack/VStack/VStack";
import { ProductItem } from "@/lib/types/item";
import Image from "next/image";
import Link from "next/link";
import cls from "./DetailedProductItem.module.scss";
import { Text, TextSize, TextTheme } from "@/components/Text/Text";

interface DetailedProductItemProps {
  className?: string;
  item: ProductItem;
}

export const DetailedProductItem = (props: DetailedProductItemProps) => {
  const { item, className } = props;
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
      <HStack max justify="between" align="start">
        <VStack>
          <Text title={item.title} size={TextSize.XL} />
          <Text
            text={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽'}
            size={TextSize.XL}
            theme={TextTheme.ACCENT}
            marginT={12}
          />
          <Text title="Характеристики" size={TextSize.L} className={cls.characteristics} />
          <Text
            title="Бренд:"
            text={item.brand}
            className={cls.desc}
            theme={TextTheme.SECONDARY}
          />
          <Text
            title="Модель:"
            text={item.model}
            className={cls.desc}
            theme={TextTheme.SECONDARY}
          />
          <Text
            title="Цвет:"
            text={item.color}
            className={cls.desc}
            theme={TextTheme.SECONDARY}
          />
          <Text
            title="Год выпуска:"
            text={item.year}
            className={cls.desc}
            theme={TextTheme.SECONDARY}
          />
          <Text
            title="Тип двигателя:"
            text={item.engine.type}
            className={cls.desc}
            theme={TextTheme.SECONDARY}
          />
          {item.engine.transmission && (
            <Text
              title="Трансмиссия:"
              text={item.engine.transmission}
              className={cls.desc}
              theme={TextTheme.SECONDARY}
            />
          )}
          {item.engine.power && (
            <Text
              title="Запас хода:"
              text={item.engine.power}
              className={cls.desc}
              theme={TextTheme.SECONDARY}
            />
          )}
        </VStack>
        <Image src={item.img.big} width={847} height={380} alt={item.title} />
      </HStack>
    </>
  );
};
