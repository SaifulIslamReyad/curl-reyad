import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(request) {
  try {
    const data = await request.json();

    const record = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      ...data,
    };

    await put(
      `students/${record.id}.json`,
      JSON.stringify(record, null, 2),
      {
        access: "public", 
        contentType: "application/json",
      }
    );

    return NextResponse.json(
      { message: "Student profile saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to save student profile." },
      { status: 500 }
    );
  }
}