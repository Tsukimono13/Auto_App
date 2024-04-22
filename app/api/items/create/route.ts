import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { items } from "../items";

export async function POST(request: Request) {
  const advertisementData = request.body;
  items.push(advertisementData);
  return NextResponse.json(advertisementData);
}
