import {
    ReactNode, memo, useCallback,
} from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { classNames } from '@/lib/classNames/classNames';
import { Text, TextSize } from '../Text/Text';

export interface TabItem {
    value: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.SELECTED : CardTheme.TAB}
                    onClick={clickHandle(tab)}
                >
                    <Text text={tab.value} size={TextSize.S}/>
                </Card>
            ))}
        </div>
    );
};
