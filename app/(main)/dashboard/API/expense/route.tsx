import db from "@/utils/db";
import { NextResponse } from "next/server";

interface Product {
  item_id: number;
  name: string;
  qty: number;
}

export async function GET() {
  try {
    const results: Product[] = await new Promise((resolve, reject) => {
      db.query(
        "SELECT SUM(cost_price * qty) AS expense FROM stocks;",
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
    return NextResponse.json(results);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
