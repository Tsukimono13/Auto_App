import { ProductList } from "@/entities/ProductList/ProductList";
import { fetchAllItems } from "@/services/fetchAllItems/fetchAllItems";



export default async function Home() {
  const allItems = await fetchAllItems()

  return <ProductList items={allItems} />;
}
