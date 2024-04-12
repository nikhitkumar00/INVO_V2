import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const billData: {
      customerId: string;
      billId: number;
      billDate: string;
      items: { itemId: string; quantity: string }[];
      totalReceivedAmount: number;
    } = await request.json();

    await Promise.all(
      billData.items.map(async (item) => {
        await new Promise<void>((resolve, reject) => {
          db.query(
            "INSERT INTO `bill_items` (bill_id, item_id, item_qty) VALUES (?, ?, ?)",
            [billData.billId, item.itemId, item.quantity],
            (err: any, result: any) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            },
          );
        });
      }),
    );

    if (billData.billId && billData.billDate) {
      await new Promise<void>((resolve, reject) => {
        db.query(
          "UPDATE `bills` SET customer_id = ?, received_amt = ? WHERE bill_id = ?",
          [
            billData.customerId || null,
            billData.totalReceivedAmount || 0,
            billData.billId,
          ],
          (err: any, result: any) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          },
        );
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
