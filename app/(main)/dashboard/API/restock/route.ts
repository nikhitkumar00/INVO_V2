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
        "SELECT item_id, name, qty FROM `stocks` WHERE qty < 20;",
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
