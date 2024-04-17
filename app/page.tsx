import Image from "next/image";
import { axiosInstance } from "@/lib/axios";
import Link from "next/link";

const fetchAllItems = async () => {
  try {
    const response = await axiosInstance.get("/api/items/");
    return response.data;
  } catch (error) {
    throw new Error("Не удалось получить продукты");
  }
};

export default async function Home() {
  const items = await fetchAllItems();

  return (
    <div>
      {items.map((item: any) => (
        <div key={item.id}>
          <Link href={`/${item.id}`}>
            <h2>{item.title}</h2>
            <Image src={item?.img?.small} alt={item.title} width={192} height={84}/>
          </Link>
        </div>
      ))}
    </div>
  );
}
