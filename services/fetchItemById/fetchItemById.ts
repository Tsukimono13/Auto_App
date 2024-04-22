import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";

export const fetchItemById = async (id: string) => {
    try {
      const response = await axiosInstance.get<ProductItem>(`/api/items/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Не удалось получить информацию о продукте");
    }
  };