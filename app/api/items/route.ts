import { NextResponse } from "next/server";
import { items } from "./items";

export async function GET(req: Request) {
  return NextResponse.json(items);
}

export async function POST(req: Request) {
    const body = await req.json()

    console.log(body)
    return NextResponse.json({body});
  }