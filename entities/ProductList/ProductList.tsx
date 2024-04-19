"use client";
import { HStack } from "@/components/Stack/HStack/HStack";
import BrandFilter from "@/features/BrandFilter/BrandFilter";
import { ProductItem } from "@/lib/types/item";
import React, { useEffect, useState } from "react";
import { ProductItemCard } from "../ProductItemCard/ProductItemCard";
import { fetchSortItems } from "@/services/fetchSortItems/fetchSortItems";
import ColorFilter from "@/features/ColorFilter/ColorFilter";
import { SortingItems } from "@/features/SortingItems/SortingItems";
import { Button } from "@/components/Button/Button";

export const ProductList = () => {
  const [items, setItems] = useState<ProductItem[]>([]);
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [sort, setSort] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const sortedItems = await fetchSortItems(brand, color, sort, page);
      setItems(sortedItems);
    }
    fetchData();
  }, [brand, color, sort, page]);

  const onChangeBrand = async (brand: string) => {
    try {
      const sortedItems = await fetchSortItems(brand, color, sort);
      setItems(sortedItems);
      setBrand(brand);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const onChangeColor = async (color: string) => {
    try {
      const sortedItems = await fetchSortItems(brand, color, sort);
      setItems(sortedItems);
      setColor(color);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const onChangeSort = async (sort: string) => {
    try {
      const sortedItems = await fetchSortItems(brand, color, sort);
      setItems(sortedItems);
      setSort(sort);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const onChangePage = async (increment: number) => {
    try {
      const nextPage = page + increment;
      if (nextPage < 1) return;
      const sortedItems = await fetchSortItems(brand, color, sort, nextPage);
      if (sortedItems.length === 0 && increment === 1) {
        setHasMore(false);
      } else {
        setItems(sortedItems);
        setPage(nextPage);
        setHasMore(true);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  return (
    <>
      <SortingItems value={sort} onChange={onChangeSort} />
      <BrandFilter value={brand} onChange={onChangeBrand} />
      <ColorFilter value={color} onChange={onChangeColor} />
      <HStack wrap max gap="24">
        {items.map((item: ProductItem) => (
          <ProductItemCard item={item} key={item.id} />
        ))}
      </HStack>
      <Button onClick={() => onChangePage(-1)} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={() => onChangePage(1)} disabled={!hasMore}>
        Next
      </Button>
    </>
  );
};
