"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import { TabItem, Tabs } from "@/components/Tabs/Tabs";
import { Text, TextSize } from "@/components/Text/Text";
import { useState } from "react";
import cls from './BrandFilter.module.scss'
import { classNames } from "@/lib/classNames/classNames";
import { fetchSortItems } from "@/app/page";

interface BrandFilterType {
  className?: string;
}

const brandType = [
  { value: "Mercedes" },
  { value: "Audi" },
  { value: "BMW" },
  { value: "Opel" },
];

const BrandFilter = (props: BrandFilterType) => {
  const { className } = props;
  const [value, setValue] = useState("");

  const onTabClick = async (tab: TabItem) => {
    const brandSortedItems = await fetchSortItems(tab.value as string) 
    console.log(tab.value as string);
};

  return (
    <HStack gap="8" max className={classNames(cls.BrandFilter, {}, [className])}>
      <Text title={"Марка:"} size={TextSize.S}/>
      <HStack gap="6" max>
        <Tabs tabs={brandType} onTabClick={onTabClick} value={value}/>
        </HStack>
    </HStack>
  );
};

export default BrandFilter;
