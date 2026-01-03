import { client } from "@/sanity/client";
import { siteContentQuery } from "@/sanity/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await client.fetch(siteContentQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}
