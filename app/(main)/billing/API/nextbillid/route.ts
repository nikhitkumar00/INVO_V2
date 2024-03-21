import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const results: any = await new Promise((resolve, reject) => {
      db.query(
        "SELECT MAX(bill_id) + 1 AS next_bill_id FROM bills;",
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
    const nextBillId: number = results[0].next_bill_id || 9999;
    return NextResponse.json({ nextBillId });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
