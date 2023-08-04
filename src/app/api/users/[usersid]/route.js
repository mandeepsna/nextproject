import { employee } from "@/util/db";
import { NextResponse } from "next/server";
export async function GET(request, content) {
  const id = content.params.usersid;
  const data = employee;
  const userid = data.filter((element) => element.empid == id);
  return NextResponse.json(userid.length == 0 ? "No Record Found" : userid);
}
