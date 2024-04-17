import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import { Mods, classNames } from "@/lib/classNames/classNames";

export enum ThemeButton {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.PRIMARY,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
