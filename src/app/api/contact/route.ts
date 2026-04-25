/* eslint-disable @typescript-eslint/no-unused-vars */
import { rateLimit } from "@/app/lib/rateLimit";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  response: string;
  userAgent: string;
  deviceInfo: string;
  screenSize: string;
  ip: string;
  time: string;
  website?: string; // ✅ honeypot field
};

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    // 🔹 1. Get IP
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip2 = forwardedFor?.split(",")[0] ?? "unknown";

    // 🔹 2. Rate limit (FIRST line of defense)
    if (!rateLimit(ip2, 3, 60_000)) {
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      );
    }

    // 🔹 3. Block obvious bots via headers (BEFORE body parsing)
    const ua = req.headers.get("user-agent") || "";

    if (!ua || ua.toLowerCase().includes("bot") || ua.includes("curl")) {
      return NextResponse.json(
        { success: false, message: "Blocked" },
        { status: 403 }
      );
    }

    // 🔹 4. Parse body
    const body = (await req.json()) as ContactBody;

    const { time, ip, screenSize, deviceInfo, userAgent, response, website } =
      body;

    // 🔹 5. Honeypot (VERY early after parsing)
    if (website) {
      return NextResponse.json({ success: true }); // silently ignore bot
    }

    // 🔹 6. Payload sanity checks (CRITICAL)
    if (!response || typeof response !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid response" },
        { status: 400 }
      );
    }

    if (response.length > 100) {
      return NextResponse.json(
        { success: false, message: "Too long" },
        { status: 400 }
      );
    }

    if (!time || !deviceInfo || !userAgent) {
      return NextResponse.json(
        { success: false, message: "Missing data" },
        { status: 400 }
      );
    }

    // 🔹 7. Send email (ONLY after all checks pass)
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rasel.sikder777.rk@gmail.com"],
      subject: "New Message from dear Hurpori Web",
      html: `
        <h3>A user clicked the "${response}" button at hur pori's web.</h3>
        <p>📅 Time: ${time}</p>
        <p>💻 Device: ${deviceInfo}</p>
        <p>🌍 Browser: ${userAgent}</p>
        <p>📏 Screen: ${screenSize}</p>
        <p>📡 IP Address (client): ${ip}</p>
        <p>📡 IP Address (server): ${ip2}</p>
      `,
    });

    console.log(body);
    console.log({ ip2 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}