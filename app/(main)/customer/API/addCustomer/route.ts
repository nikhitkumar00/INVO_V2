import db from "@/utils/db";
import { NextResponse } from "next/server";

interface CustomerData {
  customerId: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export async function POST(request: Request) {
  try {
    const requestData: CustomerData = await request.json();

    const { customerId, name, email, phoneNumber } = requestData;

    if (!name || !email || !phoneNumber) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required for insertion" },
        { status: 400 },
      );
    }

    const query = `INSERT INTO customer (customer_id, customer_name, phone, email) VALUES (?, ?, ?, ?)`;
    const values = [customerId, name, phoneNumber, email];

    await new Promise((resolve, reject) => {
      db.query(query, values, (err: Error | null, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return NextResponse.json({ message: "Customer added successfully" });
  } catch (error) {
    console.error("Error adding customer:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
