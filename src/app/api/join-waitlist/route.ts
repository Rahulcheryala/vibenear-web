import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Django backend URL from environment variable
    const djangoBackendUrl = process.env.DJANGO_BACKEND_URL;

    if (!djangoBackendUrl) {
      return NextResponse.json(
        { message: "DJANGO_BACKEND_URL is not set" },
        { status: 500 }
      );
    }

    // Forward request to Django backend
    const response = await fetch(
      `${djangoBackendUrl}vibenear/api/join-waitlist/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: body.name,
          phone: body.phone,
          email: body.email || "",
          message: body.message,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Check if Django returned field-specific validation errors
      if (
        errorData.phone ||
        errorData.name ||
        errorData.email ||
        errorData.message
      ) {
        console.log("inside if Error data:", errorData);
        // Forward Django validation errors as-is to maintain field-specific error handling
        return NextResponse.json(errorData, { status: response.status });
      } else {
        // Handle general error message
        return NextResponse.json(
          { message: errorData.message || "Backend service error" },
          { status: response.status }
        );
      }
    }

    const result = await response.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error in join-waitlist API:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
