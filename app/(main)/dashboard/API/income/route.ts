import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const results: any = await new Promise((resolve, reject) => {
      db.query(
        "SELECT ROUND(SUM(total_amt), 2) AS income FROM bills WHERE YEAR(purchase_date) = YEAR(CURRENT_DATE()) AND MONTH(purchase_date) = MONTH(CURRENT_DATE()) AND DAY(purchase_date) <= DAY(CURRENT_DATE());",
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
    const income: number = results[0]?.income;
    return NextResponse.json(income);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
