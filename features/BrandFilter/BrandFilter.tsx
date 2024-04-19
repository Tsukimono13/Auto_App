"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import { TabItem, Tabs } from "@/components/Tabs/Tabs";
import { Text, TextSize } from "@/components/Text/Text";
import { useState } from "react";
import cls from "./BrandFilter.module.scss";
import { classNames } from "@/lib/classNames/classNames";

interface BrandFilterType {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const brandType = [
  { value: "Mercedes" },
  { value: "Audi" },
  { value: "BMW" },
  { value: "Opel" },
];

const BrandFilter = (props: BrandFilterType) => {
  const { className, onChange, value } = props;

  const onChangeHendler = (tab: TabItem) => {
    onChange(tab.value);
  };

  return (
    <HStack
      gap="8"
      max
      className={classNames(cls.BrandFilter, {}, [className])}
    >
      <Text title={"Марка:"} size={TextSize.S} />
      <HStack gap="6" max>
        <Tabs tabs={brandType} onTabClick={onChangeHendler} value={value} />
      </HStack>
    </HStack>
  );
};

export default BrandFilter;
