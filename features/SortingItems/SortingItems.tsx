import { ListBox } from '@/components/ListBox/ListBox';
import { classNames } from '@/lib/classNames/classNames';
import React from 'react';

interface SortingItemsProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const options = [
    { value: "asc", content: "По цене: сначала дорогие" },
    { value: "desc", content: "По цене: сначала дешевые" },
    { value: "newest", content: "По году выпуска: сначала новые" },
    { value: "oldest", content: "По году выпуска: сначала старые" },
];

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
