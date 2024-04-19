import { NextResponse } from "next/server";
import { items } from "../items";

const ITEMS_PER_PAGE = 10;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const brand = searchParams.get("brand");
  const color = searchParams.get("color");
  const sort = searchParams.get("sort");
  const page = Number(searchParams.get("page")) || 1;

  let filteredItems = items;

  if (brand) {
    filteredItems = items.filter((item) =>
      item.brand.toLowerCase().includes(brand.toLowerCase())
    );
  }

  if (color) {
    filteredItems = items.filter((item) =>
      item.color.toLowerCase().includes(color.toLowerCase())
    );
  }

  switch (sort) {
    case "asc":
      filteredItems.sort((a, b) => b.price - a.price);
      break;
    case "desc":
      filteredItems.sort((a, b) => a.price - b.price);
      break;
    case "newest":
      filteredItems.sort((a, b) => b.year - a.year);
      break;
    case "oldest":
      filteredItems.sort((a, b) => a.year - b.year);
      break;
    default:
      break;
  }

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  return NextResponse.json(paginatedItems);
}
