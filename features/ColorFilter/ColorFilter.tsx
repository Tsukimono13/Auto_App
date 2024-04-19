"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import { TabItem, Tabs } from "@/components/Tabs/Tabs";
import { Text, TextSize } from "@/components/Text/Text";
import { useState } from "react";
import cls from "./ColorFilter.module.scss";
import { classNames } from "@/lib/classNames/classNames";

interface ColorFilterType {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const colorType = [
  { value: "Серый металлик" },
  { value: "Черный" },
  { value: "Белый" },
  { value: "Зеленый" },
  { value: "Желтый" },
  { value: "Красный" },
  { value: "Синий" },
];

const ColorFilter = (props: ColorFilterType) => {
  const { className, onChange, value } = props;

  const onChangeHendler = (tab: TabItem) => {
    onChange(tab.value);
  };

  return (
    <HStack
      gap="8"
      max
      className={classNames(cls.ColorFilter, {}, [className])}
    >
      <Text title={"Цвет:"} size={TextSize.S} />
      <HStack gap="6" max>
        <Tabs tabs={colorType} onTabClick={onChangeHendler} value={value} />
      </HStack>
    </HStack>
  );
};

export default ColorFilter;
