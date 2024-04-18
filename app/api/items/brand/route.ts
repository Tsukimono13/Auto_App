import { NextResponse } from "next/server";
import { items } from "../items";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");
  const color = searchParams.get("q");
  const sortByPrice = searchParams.get("q");
  const sortByYear = searchParams.get("query");
  let filteredItems = items;

  if (query) {
    filteredItems = items.filter((item) =>
      item.brand.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (color) {
    filteredItems = items.filter((item) =>
      item.color.toLowerCase().includes(color.toLowerCase())
    );
  }

  if (sortByPrice === 'asc') {
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === 'desc') {
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);
  }

  if (sortByYear === 'asc') {
    filteredItems = filteredItems.sort((a, b) => a.year - b.year);
  } else if (sortByYear === 'desc') {
    filteredItems = filteredItems.sort((a, b) => b.year - a.year);
  }

  return NextResponse.json(filteredItems);
}
