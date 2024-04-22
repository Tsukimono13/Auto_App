import { NextResponse } from "next/server";
import { items } from "./items";
import { ProductItem } from "@/lib/types/item";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: Request) {
  return NextResponse.json(items);
}

