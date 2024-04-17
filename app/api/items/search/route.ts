import { NextResponse } from "next/server";
import { items } from "../items";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");
  let currentItems = items;

  if (query) {
    currentItems = items.filter((item) =>
      item.title.toLocaleLowerCase().includes(query.toLowerCase())
    );
  }
  return NextResponse.json(currentItems);
}
