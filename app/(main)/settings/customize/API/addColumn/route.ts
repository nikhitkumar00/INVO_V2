import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { column_name, column_type } = await request.json();

    const query: string = `ALTER TABLE stocks ADD COLUMN ${column_name} ${column_type}`;

    await new Promise<void>((resolve, reject) => {
      db.query(query, (err: Error | null, result: any) => {
        if (err) {
          console.error("Database error:", err);
          return reject(new Error("Failed to add column to the database"));
        }
        resolve();
      });
    });

    return NextResponse.json({
      message: `Column "${column_name}" added successfully`,
    });
  } catch (error: any) {
    console.error("Error adding column:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
