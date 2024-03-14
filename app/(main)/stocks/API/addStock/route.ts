import db from "@/utils/db";
import { NextResponse } from "next/server";

interface StockData {
  [key: string]: any;
}

export async function POST(request: any) {
  try {
    const requestData: StockData = await request.json();

    const keys: string[] = Object.keys(requestData);
    const values: any[] = Object.values(requestData);

    if (!keys.length || !values.length) {
      return NextResponse.json(
        { error: "No data provided for insertion" },
        { status: 400 },
      );
    }

    const placeholders: string = Array.from(
      { length: keys.length },
      () => "?",
    ).join(",");
    const columns: string = keys.join(",");
    const query: string = `INSERT INTO stocks (${columns}) VALUES (${placeholders})`;

    await new Promise((resolve, reject) => {
      db.query(query, values, (err: Error | null, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return NextResponse.json({ message: "Stock added successfully" });
  } catch (error: Error | any) {
    console.error("Error adding stock:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
