// route.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = cookies();
    const allCookies = cookieStore.getAll();

    return NextResponse.json(allCookies);
  } catch (error: any) {
    console.error("Error fetching cookies:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
