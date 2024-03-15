import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(request: any) {
  try {
    const { column_name } = await request.json();

    const query: string = `ALTER TABLE stocks DROP COLUMN ${column_name}`;

    await new Promise<void>((resolve, reject) => {
      db.query(query, (err: Error | null, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return NextResponse.json({
      message: `Column "${column_name}" deleted successfully`,
    });
  } catch (error: any) {
    console.error("Error deleting column:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
