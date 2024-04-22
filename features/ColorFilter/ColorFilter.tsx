"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import { TabItem, Tabs } from "@/components/Tabs/Tabs";
import { Text, TextSize } from "@/components/Text/Text";
import { classNames } from "@/lib/classNames/classNames";
import { colorTabs } from "@/lib/const/colorOptions";

interface ColorFilterType {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const ColorFilter = (props: ColorFilterType) => {
  const { className, onChange, value } = props;

  const onChangeHendler = (tab: TabItem) => {
    onChange(tab.value);
  };

  return (
    <HStack
      gap="8"
      max
      className={classNames('', {}, [className])}
    >
      <Text title={"Цвет:"} size={TextSize.S} />
      <HStack gap="6" max>
        <Tabs tabs={colorTabs} onTabClick={onChangeHendler} value={value} />
      </HStack>
    </HStack>
  );
};
