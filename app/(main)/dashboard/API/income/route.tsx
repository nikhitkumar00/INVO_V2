import db from "@/utils/db";
import { NextResponse } from "next/server";

interface Product {
  item_id: number;
  name: string;
  qty: number;
}

export async function POST() {
  try {
    const results: Product[] = await new Promise((resolve, reject) => {
      db.query(
        "SELECT SUM((s.selling_price - s.cost_price) * bi.item_qty) as income FROM stocks s JOIN bill_items bi ON s.item_id = bi.item_id;",
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
