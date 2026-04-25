/* eslint-disable @typescript-eslint/no-unused-vars */
import { rateLimit } from "@/app/lib/rateLimit";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  response: string;
  userAgent: string;
  deviceInfo: string;
  screenSize: string;
  ip:string;
  time:string;
  "cf-turnstile-response"?: string;
};

    // const data = {
    //   response,
    //   userAgent,
    //   deviceInfo,
    //   screenSize,
    //   ip,
    //   time,
    // };

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    // 🔹 Get IP safely
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip2 = forwardedFor?.split(",")[0] ?? "unknown";

    // 🔹 Rate limit
    if (!rateLimit(ip2, 5, 60_000)) {
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactBody;

    const { time, ip, screenSize, deviceInfo, userAgent, response } = body
  

    // 🔹 (Optional) Turnstile verification
    // if (process.env.TURNSTILE_SECRET) {
    //   const token = body["cf-turnstile-response"];

    //   if (!token) {
    //     return NextResponse.json(
    //       { success: false, message: "Captcha required" },
    //       { status: 400 }
    //     );
    //   }

    //   const verifyRes = await fetch(
    //     "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    //     {
    //       method: "POST",
    //       body: new URLSearchParams({
    //         secret: process.env.TURNSTILE_SECRET,
    //         response: token,
    //       }),
    //     }
    //   );

    //   const verifyData: { success: boolean } = await verifyRes.json();

    //   if (!verifyData.success) {
    //     return NextResponse.json(
    //       { success: false, message: "Captcha failed" },
    //       { status: 400 }
    //     );
    //   }
    // }



    // 🔹 Send email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rasel.sikder777.rk@gmail.com"],
      subject: "New Message from dear Hurpori Web",
      html:  `
    <h3>A user clicked the "${response}" button at hur pori's web.</h3>
    <p>📅 Time: ${time}</p>
    <p>💻 Device: ${deviceInfo}</p>
    <p>🌍 Browser: ${userAgent}</p>
    <p>📏 Screen: ${screenSize}</p>
    <p>📡 IP Address: ${ip}</p>
    <p>📡 IP Address 02: ${ip2}</p>
  `,
    });

   
     console.log(body);
     console.log({ip2});
     
     

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}