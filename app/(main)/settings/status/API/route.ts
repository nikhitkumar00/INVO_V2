import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await new Promise<void>((resolve, reject) => {
      db.query("SELECT 1", (error: any, results: any) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
    return NextResponse.json({ status: "success" });
  } catch (error: any) {
    return NextResponse.json(
      { status: "failed", error: error.message },
      { status: 500 },
    );
  }
}
