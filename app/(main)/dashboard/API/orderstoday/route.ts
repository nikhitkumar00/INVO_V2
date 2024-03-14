import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        "select count(bill_id) as orderstoday from bills where purchase_date=CURDATE();;",
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
