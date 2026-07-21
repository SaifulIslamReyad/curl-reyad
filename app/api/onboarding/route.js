// app/api/onboarding/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();

    // Define the file path for saving data locally
    const filePath = path.join(process.cwd(), 'student_data.json');

    // Add a timestamp to the incoming response
    const record = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      ...data,
    };

    let existingData = [];

    // Read existing file if it already exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent || '[]');
    }

    // Append new student record
    existingData.push(record);

    // Write back to the local file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

    return NextResponse.json(
      { message: 'Student profile saved successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { message: 'Failed to save student profile.' },
      { status: 500 }
    );
  }
}