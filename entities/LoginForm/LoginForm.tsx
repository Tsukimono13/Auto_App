"use client";
import { Button, ThemeButton } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { login } from "@/services/login/login";
import React, { useState } from "react";
import cls from "./LoginForm.module.scss";
import { Text, TextSize } from "@/components/Text/Text";

export const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [data, setData] = useState("");

  const userChange = (value: string) => {
    setUserName(value);
  };

  const passChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setLoginError("Пожалуйста, заполните все поля");
      return;
    }
    try {
      const responseData = await login(username, password);
      setData(responseData);
    } catch (error) {
      setLoginError("Неверное имя пользователя или пароль");
      console.log(error);
    }
  };

  return (
    <>
      <Text title="Вход в профиль" size={TextSize.XL} className={cls.title} />
      <Text text={"Электронная почта"} className={cls.subtitle} />
      <Input
        value={username}
        onChange={userChange}
        placeholder="avtopro@email.ru"
        className={cls.input}
      />
      <Text text={"Пароль"} className={cls.subtitle} />
      <Input
        value={password}
        onChange={passChange}
        className={cls.input}
        placeholder="12345"
      />
      <Button
        onClick={handleLogin}
        theme={ThemeButton.SECONDARY}
        className={cls.btn}
      >
        Войти в профиль
      </Button>
    </>
  );
};
