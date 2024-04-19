"use client";
import { Card, CardTheme } from "@/components/Card/Card";
import { Input } from "@/components/Input/Input";
import React, { useState, ChangeEvent, FormEvent } from "react";
import cls from "./AdsForm.module.scss";
import { Text, TextSize } from "@/components/Text/Text";
import { FileUpload } from "@/widgets/FileUpload/FileUpload";
import Link from "next/link";
import Image from "next/image";
import { Button, ThemeButton } from "@/components/Button/Button";
import { EngineType, TransmissionType } from "@/lib/types/item";

interface FormData {
  color: string;
  content: string;
  author: string;
}

export const AdsForm = () => {
  const [color, setColor] = useState("");
  const [file, setFile] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(0);
  const [engine, setEngine] = useState<EngineType>("Бензин");
  const [transmission, setTransmission] = useState<TransmissionType>("Автомат");
  const [power, setpower] = useState("");

  //   const sendDataToBackend = async (color: string, file: string) => {
  //     try {
  //       const response = await axios.post('/your-backend-endpoint', { color, file });
  //       console.log('Data sent successfully:', response.data);
  //       // Handle success, if needed
  //     } catch (error) {
  //       console.error('Error sending data:', error);
  //       // Handle error, if needed
  //     }
  //   };

  // const handleSubmit = () => {
  //     sendDataToBackend(color, file);
  //   };

  const onChangeColor = (value: string) => {
    setColor(value);
  };

  const onChangeFile = (value: string) => {
    console.log(value);
    setFile(value);
  };

  const onChangeBrand = (value: string) => {
    console.log(value);
    setBrand(value);
  };

  const onChangeModel = (value: string) => {
    console.log(value);
    setModel(value);
  };

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
      <Text title="Разместить объявление" size={TextSize.XL} />
      <Text title="Внешний вид" size={TextSize.L} className={cls.view} />
      <FileUpload value={file} onChange={onChangeFile} />
      <Text text={"Цвет"} className={cls.subtitle} />
      <Input
        value={color}
        onChange={onChangeColor}
        className={cls.input}
        placeholder="Черный"
      />
      <Text
        title="Технические характеристики"
        size={TextSize.L}
        className={cls.characteristics}
      />
      <Text text={"Бренд"} className={cls.subtitle} />
      <Input
        value={brand}
        onChange={onChangeBrand}
        className={cls.input}
        placeholder="Mercedes"
      />
      <Text text={"Модель"} className={cls.subtitle} />
      <Input
        value={model}
        onChange={onChangeModel}
        className={cls.input}
        placeholder="EQS Sedan"
      />
      <Text text={"Год выпуска"} className={cls.subtitle} />
      <Text text={"Тип двигателя"} className={cls.subtitle} />
      <Text text={"Трансмиссия"} className={cls.subtitle} />
      <Text text={"Запас хода, км"} className={cls.subtitle} />
      <Button theme={ThemeButton.SECONDARY}>Сохранить и разместить</Button>
    </>
  );
};
