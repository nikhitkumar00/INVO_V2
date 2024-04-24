import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Fetch income data
    const incomeResults: any = await new Promise((resolve, reject) => {
      db.query(
        `SELECT CONCAT(SUBSTRING(DATE_FORMAT(purchase_date, '%b'), 1, 3)) AS name, ROUND(SUM(total_amt), 2) AS income FROM bills WHERE purchase_date IS NOT NULL GROUP BY YEAR(purchase_date), MONTH(purchase_date), name ORDER BY YEAR(purchase_date), MONTH(purchase_date);`,
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    // Fetch total orders data
    const orderResults: any = await new Promise((resolve, reject) => {
      db.query(
        `SELECT CONCAT(SUBSTRING(DATE_FORMAT(purchase_date, '%b'), 1, 3)) AS name, COUNT(*) AS orders FROM bills WHERE purchase_date IS NOT NULL GROUP BY YEAR(purchase_date), MONTH(purchase_date), name ORDER BY YEAR(purchase_date), MONTH(purchase_date);`,
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
    const chartData = incomeResults.map((incomeItem: any) => {
      const correspondingOrderItem = orderResults.find(
        (orderItem: any) => orderItem.name === incomeItem.name
      );
      return {
        name: incomeItem.name,
        income: incomeItem.income,
        orders: correspondingOrderItem ? correspondingOrderItem.orders : 0
      };
    });

    return NextResponse.json(chartData);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
