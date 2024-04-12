import db from "@/utils/db";
import { NextResponse } from "next/server";

interface Product {
  bill_id: number;
  total_amt: number;
  received_amt: number;
  purchase_date: string;
}

export async function POST() {
  try {
    const results: Product[] = await new Promise((resolve, reject) => {
      db.query(
        "SELECT b.bill_id, b.total_amt, b.received_amt, DATE_FORMAT(b.purchase_date, '%d-%m-%Y') AS purchase_date, c.customer_name, c.phone, c.email FROM bills AS b LEFT JOIN customer AS c ON b.customer_id = c.customer_id",
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
