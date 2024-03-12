import db from "@/utils/db";
import { NextResponse } from "next/server";

interface StockData {
  item_id: number;
}

export async function DELETE(request: { json: () => Promise<StockData> }) {
  try {
    const { item_id } = await request.json();

    if (!item_id) {
      return NextResponse.json(
        { error: "No item_id provided for deletion" },
        { status: 400 },
      );
    }

    const query: string = `DELETE FROM stocks WHERE item_id = ?`;

    const result = await new Promise<number>((resolve, reject) => {
      db.query(query, [item_id], (err: Error | null, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.affectedRows); // Get the number of affected rows
        }
      });
    });

    if (result === 0) {
      // No rows were affected, indicating the item_id was not found
      return NextResponse.json(
        { error: "Item Id " + item_id + " not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Stock deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting stock:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
