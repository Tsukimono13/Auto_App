import { Input } from "@/components/Input/Input";
import React from "react";
import cls from "./FileUpload.module.scss";
import Image from "next/image";
import { Text, TextSize } from "@/components/Text/Text";
import { HStack } from "@/components/Stack/HStack/HStack";
import { classNames } from "@/lib/classNames/classNames";

interface FileUpload {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const FileUpload = (props: FileUpload) => {
  const { onChange, className, value } = props;
  return (
    <HStack gap="20" align="start" className={classNames('', {}, [className])}>
      <label className={cls.inputFile}>
        <Input type="file" name="file" value={value} onChange={onChange} />
        <Image
          src={"/assets/img/upload.png"}
          width={305}
          height={148}
          alt="Upload file"
        />
      </label>
      <Text
        className={cls.text}
        size={TextSize.S}
        text={
          "Загрузите изображение с компьютера, нажав на иконку слева."
        }
      />
    </HStack>
  );
};
