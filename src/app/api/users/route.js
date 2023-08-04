import { employee } from "@/util/db";
import { NextResponse } from "next/server";
export async function GET() {
  const data = employee;
  return NextResponse.json(data, { status: 200 });
}
