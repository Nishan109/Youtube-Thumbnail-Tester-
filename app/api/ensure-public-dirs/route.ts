import { mkdir } from "fs/promises"
import { NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export async function GET() {
  try {
    // Get the current working directory
    const cwd = process.cwd()

    // Define the path to the public/images directory
    const imagesDir = path.join(cwd, "public", "images")

    // Check if the directory already exists before trying to create it
    try {
      await fs.promises.access(imagesDir)
      console.log("Public/images directory already exists")
    } catch (error) {
      // Directory doesn't exist, create it
      console.log("Creating public/images directory...")
      await mkdir(imagesDir, { recursive: true })
      console.log("Directory created successfully")
    }

    return NextResponse.json({
      success: true,
      message: "Public directories created or verified successfully",
      path: imagesDir,
    })
  } catch (error) {
    // Log detailed error information
    console.error("Error in ensure-public-dirs route:", error)

    // Return a more detailed error response
    return NextResponse.json(
      {
        success: false,
        error: String(error),
        message: "Failed to create or verify directories",
        errorName: error instanceof Error ? error.name : "Unknown",
        errorStack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
