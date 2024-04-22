import React from "react";
import cls from "./DetailedProductItem.module.scss";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { VStack } from "@/components/Stack/VStack/VStack";
import { HStack } from "@/components/Stack/HStack/HStack";

export const DetailedProductItemSkeleton = () => {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <Skeleton key={index} width={166} height={20} />
  ));
  return (
    <>
      <Skeleton width={24} height={24} className={cls.icon} />
      <HStack max justify="between" align="start">
        <VStack>
          <Skeleton width={304} height={38} />
          <Skeleton width={120} height={24} className={cls.price} />
          <Skeleton width={192} height={30} className={cls.characteristics} />
          <VStack gap="8">{skeletons}</VStack>
        </VStack>
        <Skeleton width={847} height={380} border="8px" />
      </HStack>
    </>
  );
};
