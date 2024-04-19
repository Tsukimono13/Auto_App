import React, {
    HTMLAttributes, ReactNode,
} from 'react';
import cls from './Card.module.scss';
import { classNames } from '@/lib/classNames/classNames';

export enum CardTheme {
    NORMAL = 'normal',
    SELECTED = 'selected',
    TAB = 'tab',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        max,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
