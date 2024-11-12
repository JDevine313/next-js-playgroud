// /src/app/api/ron-quotes/route.tsx
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Use native fetch instead of axios
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); // Parse the response
    return NextResponse.json(data); // Return the data as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
