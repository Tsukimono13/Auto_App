import { NextRequest, NextResponse } from "next/server";
import { items } from "../items";

export async function GET(
  req: Response,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const item = items.find((item) => item.id === id);

  if (item) {
    return NextResponse.json(item);
  } else {
    return NextResponse.json(new Error("Товар не найден"), { status: 404 });
  }
}
