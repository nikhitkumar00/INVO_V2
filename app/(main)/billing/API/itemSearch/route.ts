import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { item_id } = await req.json();
    const result: any = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM stocks WHERE item_id = ?;",
        [item_id],
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
        { message: "No item found with the provided item ID" },
        { status: 404 },
      );
    } else {
      const item = result[0];
      return NextResponse.json({
        item_id: item.item_id,
        name: item.name,
        qty: item.qty,
        cost_price: item.cost_price,
        selling_price: item.selling_price,
        mrp: item.mrp,
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
