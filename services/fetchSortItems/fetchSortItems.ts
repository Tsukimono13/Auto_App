import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";

export const fetchSortItems = async ( brand?: string, color?: string, sort?: string, page?: number) => {
    try {
      const response = await axiosInstance.get<ProductItem[]>(`/api/items/filters?brand=${brand}&color=${color}&sort=${sort}&page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error("Не удалось получить продукты");
    }
};