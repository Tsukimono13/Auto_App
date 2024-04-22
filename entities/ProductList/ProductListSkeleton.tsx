import { Skeleton } from "@/components/Skeleton/Skeleton";
import { HStack } from "@/components/Stack/HStack/HStack";
import React from "react";
import cls from "./ProductList.module.scss";

export const ProductListSkeleton = () => {
  const skeletons = Array.from({ length: 10 }, (_, index) => (
    <Skeleton key={index} width={240} height={221} />
  ));
  return (
    <>
      <Skeleton width={152} height={24} />
      <Skeleton width={397} height={30} className={cls.brandFilter} />
      <Skeleton width={810} height={30} className={cls.colorFilter} />
      <HStack max gap="24" wrap>
        {skeletons}
      </HStack>
      <HStack max justify="center" align="center" className={cls.btn}>
        <Skeleton width={130} height={24} />
      </HStack>
    </>
  );
};
