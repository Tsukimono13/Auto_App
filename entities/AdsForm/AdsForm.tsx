"use client";
import { Input } from "@/components/Input/Input";
import React, { useState } from "react";
import cls from "./AdsForm.module.scss";
import { Text, TextSize } from "@/components/Text/Text";
import { FileUpload } from "@/widgets/FileUpload/FileUpload";
import { Button, ThemeButton } from "@/components/Button/Button";
import { ListBox } from "@/components/ListBox/ListBox";
import { createAdvertisement } from "@/services/createAdvertisement/createAdvertisement";
import { optionsEngine, optionstransmission } from "@/lib/const/adsOptions";

export const AdsForm = () => {
  const [color, setColor] = useState("");
  const [file, setFile] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [engine, setEngine] = useState("Бензин");
  const [transmission, setTransmission] = useState("Автомат");
  const [power, setPower] = useState("");

  const handleSubmit = () => {
    const advertisementData = {
      id: Date.now().toString(),
      title: brand,
      color,
      img: { small: file, big: file },
      brand,
      model,
      price: Number(price),
      year: Number(year),
      engine: {
        type: engine,
        transmission: transmission,
        power: power,
      },
    };
    console.log(advertisementData);
    createAdvertisement(advertisementData);
  };

  const onChangeColor = (value: string) => {
    setColor(value);
  };

  const onChangeFile = (value: string) => {
    setFile(value);
  };

  const onChangeBrand = (value: string) => {
    setBrand(value);
  };

  const onChangeModel = (value: string) => {
    setModel(value);
  };

  const onChangeYear = (value: string) => {
    setYear(parseInt(value));
  };

  const onChangeEngine = (value: string) => {
    setEngine(value);
  };

  const onChangePower = (value: string) => {
    setPower(value);
  };

  const onChangeTransmission = (value: string) => {
    setTransmission(value);
  };

  const onChangePrice = (value: string) => {
    setPrice(parseInt(value));
  };

  return (
    <>
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
      <Input
        className={cls.input}
        type="number"
        value={year?.toString()}
        onChange={onChangeYear}
        placeholder="2024"
      />
      <Text text={"Тип двигателя"} className={cls.subtitle} />
      <ListBox
        items={optionsEngine}
        value={engine}
        onChange={onChangeEngine}
        className={cls.select}
      />
      {engine === "Электрический" ? (
        <>
          <Text text={"Запас хода:"} className={cls.subtitle} />
          <Input
            value={power}
            onChange={onChangePower}
            className={cls.input}
            placeholder="Запас хода, км"
          />
        </>
      ) : (
        <>
          <Text text={"Трансмиссия"} className={cls.subtitle} />
          <ListBox
            items={optionstransmission}
            value={transmission}
            onChange={onChangeTransmission}
            className={cls.select}
          />
        </>
      )}
      <Text text={"Цена, руб."} className={cls.price} />
      <Input
        value={price?.toString()}
        type="number"
        onChange={onChangePrice}
        className={cls.input}
        placeholder="9 999 999"
      />
      <Button
        theme={ThemeButton.SECONDARY}
        className={cls.btn}
        onClick={handleSubmit}
      >
        Сохранить и разместить
      </Button>
    </>
  );
};
