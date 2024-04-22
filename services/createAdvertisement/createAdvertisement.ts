import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";
import axios from "axios";

export const createAdvertisement = async (
    advertisementData: ProductItem
) => {
  try {
    const response = await axiosInstance.post("/api/items/create", advertisementData);
    console.log("Data sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
