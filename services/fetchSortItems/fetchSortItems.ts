import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";

export const fetchSortItems = async (brand: string) => {
    try {
      const response = await axiosInstance.get<ProductItem[]>(`/api/items/brand?q=${brand}`);
      return response.data;
    } catch (error) {
      throw new Error("Не удалось получить продукты");
    }
};