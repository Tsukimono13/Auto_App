import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import { HStack } from "../Stack/HStack/HStack";
import { classNames } from "@/lib/classNames/classNames";
import Image from "next/image";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  label?: string;
  sort?: boolean;
}

export function ListBox(props: ListBoxProps) {
  const { items, className, value, defaultValue, onChange, sort, label } =
    props;

  return (
    <HStack gap="6">
      {!sort && label && <span>{label}</span>}
      {label && sort && (
        <Image src={label} width={24} height={24} alt={defaultValue || ""} />
      )}
      <HListBox
        as="div"
        className={classNames(cls.ListBox, {}, [className, cls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={cls.trigger}>
            {value ? items?.find(item => item.value === value)?.content : defaultValue}
              <Image
                src={"/assets/icons/caret-down.svg"}
                width={24}
                height={24}
                alt={"Down arrow"}
              />
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [])}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item,{[cls.active]: active},[])}>
                  {selected}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
