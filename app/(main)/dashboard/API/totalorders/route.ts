import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const results: any = await new Promise((resolve, reject) => {
      db.query(
        "SELECT COUNT(bill_id) AS orders FROM bills;",
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
    const orders: number = results[0]?.orders || 9999;
    return NextResponse.json(orders);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
