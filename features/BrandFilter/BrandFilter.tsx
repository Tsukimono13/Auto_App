"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import { TabItem, Tabs } from "@/components/Tabs/Tabs";
import { Text, TextSize } from "@/components/Text/Text";
import { classNames } from "@/lib/classNames/classNames";
import { brandTabs } from "@/lib/const/brandOptions";

interface BrandFilterType {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const BrandFilter = (props: BrandFilterType) => {
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
      <Text title={"Марка:"} size={TextSize.S} />
      <HStack gap="6" max>
        <Tabs tabs={brandTabs} onTabClick={onChangeHendler} value={value} />
      </HStack>
    </HStack>
  );
};
