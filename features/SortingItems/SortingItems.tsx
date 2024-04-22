import { ListBox } from '@/components/ListBox/ListBox';
import { classNames } from '@/lib/classNames/classNames';
import { options } from '@/lib/const/sortOptions';
import React from 'react';

interface SortingItemsProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const SortingItems = (props: SortingItemsProps) => {
    const {
        onChange, value, className,
    } = props;

    const onChangeHandler = (value: string) => {
        onChange?.(value);
    };

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={'Сортировка'}
            label={'/assets/icons/sorting.svg'}
            className={classNames('', {}, [className])}
            sort
        />
    );
};
