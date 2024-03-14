import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const results: any = await new Promise((resolve, reject) => {
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
    const expense: number = results[0]?.expense || 9999;
    return NextResponse.json(expense);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
