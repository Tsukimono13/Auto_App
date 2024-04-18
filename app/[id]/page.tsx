import { DetailedProductItem } from "@/entities/DetailedProductItem/DetailedProductItem";
import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";
import { Metadata } from "next";
import { title } from "process";

const fetchItemById = async (id: string) => {
  try {
    const response = await axiosInstance.get<ProductItem>(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Не удалось получить информацию о продукте");
  }
};

interface DetailedItemProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  props: DetailedItemProps
): Promise<Metadata> {
  const {
    params: { id },
  } = props;
  
  const item = await fetchItemById(id);
  return {
    title: item.title,
  };
}

export default async function DetailedItem(props: DetailedItemProps) {
  const {
    params: { id },
  } = props;

  const item = await fetchItemById(id);

  return <DetailedProductItem item={item} />;
}
