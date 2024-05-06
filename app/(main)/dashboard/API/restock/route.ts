import db from "@/utils/db";
import { NextResponse } from "next/server";

interface Product {
  item_id: number;
  name: string;
  qty: number;
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const threshold = requestBody.threshold || 20;

    const results: Product[] = await new Promise((resolve, reject) => {
      db.query(
        `SELECT s.item_id, s.name, s.qty FROM stocks s WHERE s.qty < ${threshold} ORDER BY ( SELECT COUNT(*) FROM bill_items bi WHERE bi.item_id = s.item_id ) DESC;`,
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
