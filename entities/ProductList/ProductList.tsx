"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import { BrandFilter } from "@/features/BrandFilter/BrandFilter";
import { ProductItem } from "@/lib/types/item";
import React, { useEffect, useState } from "react";
import { ProductItemCard } from "../ProductItemCard/ProductItemCard";
import { fetchSortItems } from "@/services/fetchSortItems/fetchSortItems";
import { ColorFilter } from "@/features/ColorFilter/ColorFilter";
import { SortingItems } from "@/features/SortingItems/SortingItems";
import cls from "./ProductList.module.scss";
import { ProductListSkeleton } from "./ProductListSkeleton";
import { BottomPagination } from "@/features/BottomPagination/BottomPagination";

interface ProductListProps {
  items: ProductItem[];
}

export const ProductList = (props: ProductListProps) => {
  const { items } = props;
  const [sortedItems, setSortedItems] = useState<ProductItem[]>(items);
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const sortedItems = await fetchSortItems(brand, color, sort, page);
      setSortedItems(sortedItems);
      setIsLoading(false);
    }
    fetchData();
  }, [brand, color, sort, page]);

  const onChangeBrand = async (brand: string) => {
    try {
      setIsLoading(true);
      const sortedItems = await fetchSortItems(brand);
      setSortedItems(sortedItems);
      setBrand(brand);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setIsLoading(false);
    }
  };

  const onChangeColor = async (color: string) => {
    try {
      setIsLoading(true);
      const sortedItems = await fetchSortItems(color);
      setSortedItems(sortedItems);
      setColor(color);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setIsLoading(false);
    }
  };

  const onChangeSort = async (sort: string) => {
    try {
      setIsLoading(true);
      const sortedItems = await fetchSortItems(sort);
      setSortedItems(sortedItems);
      setSort(sort);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setIsLoading(false);
    }
  };

  const handleLoadPage = async (pageNumber: number) => {
    try {
      setIsLoading(true);
      const sortedItems = await fetchSortItems(pageNumber.toString());
      setSortedItems(sortedItems);
      setPage(pageNumber);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <>
          <div className={cls.content}>
            <SortingItems value={sort} onChange={onChangeSort} />
            <BrandFilter
              value={brand}
              onChange={onChangeBrand}
              className={cls.brandFilter}
            />
            <ColorFilter
              value={color}
              onChange={onChangeColor}
              className={cls.colorFilter}
            />
            <HStack wrap max gap="24">
              {sortedItems.map((item: ProductItem) => (
                <ProductItemCard item={item} key={item.id} />
              ))}
            </HStack>
          </div>
          <BottomPagination onChange={handleLoadPage} page={page} />
        </>
      )}
    </>
  );
};
