import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PUT(request: any) {
  try {
    const requestData = await request.json();
    const { item_id, ...updatedData } = requestData;

    await new Promise((resolve, reject) => {
      db.query(
        "UPDATE `stocks` SET ? WHERE `item_id` = ?",
        [updatedData, item_id],
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });

    return NextResponse.json({ message: "Stock item updated successfully" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
