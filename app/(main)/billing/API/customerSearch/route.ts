import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { customer_id } = await req.json();
    const result: any = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM customer WHERE customer_id = ?;",
        [customer_id],
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
    if (result.length === 0) {
      return NextResponse.json(
        { message: "No customer found with the provided customer ID" },
        { status: 404 },
      );
    } else {
      const data = result[0];
      return NextResponse.json({
        customer_name: data.customer_name,
      });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
