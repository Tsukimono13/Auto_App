import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";

export const fetchAllItems = async () => {
    try {
      const response = await axiosInstance.get<ProductItem[]>("/api/items/");
      return response.data;
    } catch (error) {
      throw new Error("Не удалось получить продукты");
    }
  };