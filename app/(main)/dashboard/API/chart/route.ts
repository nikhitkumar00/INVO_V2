import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const incomeResults: any = await new Promise((resolve, reject) => {
      db.query(
        `
        SELECT 
          YEAR(b.purchase_date) AS year,
          MONTH(b.purchase_date) AS month,
          SUM((s.selling_price - s.cost_price) * bi.qty) AS total_income
        FROM 
          stocks s
        JOIN 
          bill_items bi ON s.item_id = bi.item_id
        JOIN 
          bills b ON bi.bill_id = b.bill_id
        GROUP BY 
          YEAR(b.purchase_date), MONTH(b.purchase_date);
        `,
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });

    const ordersResults: any = await new Promise((resolve, reject) => {
      db.query(
        `
        SELECT 
          YEAR(b.purchase_date) AS year,
          MONTH(b.purchase_date) AS month,
          COUNT(b.bill_id) AS total_orders
        FROM 
          bills b
        GROUP BY 
          YEAR(b.purchase_date), MONTH(b.purchase_date);
        `,
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });

    const combinedResults = {
      income: incomeResults,
      orders: ordersResults,
    };

    return NextResponse.json(combinedResults);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
