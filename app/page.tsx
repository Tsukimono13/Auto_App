import { axiosInstance } from "@/lib/axios";
import { ProductItem } from "@/lib/types/item";
import { ProductItemCard } from "@/entities/ProductItemCard/ProductItemCard";
import { HStack } from "@/components/Stack/HStack/HStack";
import BrandFilter from "@/features/BrandFilter/BrandFilter";
import { fetchAllItems } from "@/services/fetchAllItems/fetchAllItems";
import { fetchSortItems } from "@/services/fetchSortItems/fetchSortItems";



export default async function Home() {
  
  const items = await fetchAllItems();
  const brandSortedItems = await fetchSortItems("")

  return (
    <div>
      <BrandFilter/>
      <HStack wrap max gap="20" justify="center">
        {brandSortedItems.map((item: ProductItem) => (
          <ProductItemCard item={item} key={item.id} />
        ))}
      </HStack>
    </div>
  );
}
