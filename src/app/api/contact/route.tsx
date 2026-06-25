/* eslint-disable @typescript-eslint/no-explicit-any */
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
  browserInfo: Record<string, unknown>;
  website?: string;
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
        { status: 429 },
      );
    }

    const requestInfo = {
      forwardedFor: req.headers.get("x-forwarded-for"),
      realIp: req.headers.get("x-real-ip"),
      userAgentHeader: req.headers.get("user-agent"),
      referer: req.headers.get("referer"),
      origin: req.headers.get("origin"),
      host: req.headers.get("host"),
      secFetchSite: req.headers.get("sec-fetch-site"),
      secFetchMode: req.headers.get("sec-fetch-mode"),
      secFetchDest: req.headers.get("sec-fetch-dest"),
      secFetchUser: req.headers.get("sec-fetch-user"),
      acceptLanguage: req.headers.get("accept-language"),
      acceptEncoding: req.headers.get("accept-encoding"),
      xForwardedProto: req.headers.get("x-forwarded-proto"),
      xForwardedHost: req.headers.get("x-forwarded-host"),
    };

    // 🔹 3. Block obvious bots via headers (BEFORE body parsing)
    const ua = req.headers.get("user-agent") || "";

    const blocked =
      !ua ||
      ua.includes("HeadlessChrome") ||
      ua.includes("Puppeteer") ||
      ua.includes("Playwright") ||
      ua.toLowerCase().includes("bot") ||
      ua.includes("curl");

    if (blocked) {
      return NextResponse.json(
        { success: false, message: "Blocked" },
        { status: 403 },
      );
    }

    // 🔹 4. Parse body
    const body = (await req.json()) as ContactBody;

    const {
      time,
      ip,
      screenSize,
      deviceInfo,
      userAgent,
      response,
      browserInfo,
      website,
    } = body;

    if (browserInfo && typeof browserInfo !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid browserInfo" },
        { status: 400 },
      );
    }

    // 🔹 5. Honeypot (VERY early after parsing)
    if (website) {
      return NextResponse.json({ success: true }); // silently ignore bot
    }

    // 🔹 6. Payload sanity checks (CRITICAL)
    if (!response || typeof response !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid response" },
        { status: 400 },
      );
    }

    if (response.length > 100) {
      return NextResponse.json(
        { success: false, message: "Too long" },
        { status: 400 },
      );
    }

    if (!time || !deviceInfo || !userAgent) {
      return NextResponse.json(
        { success: false, message: "Missing data" },
        { status: 400 },
      );
    }

    let geoData: any = null;

    try {
      if (ip2 !== "unknown" && ip2 !== "::1") {
        const geoRes = await fetch(`https://ipapi.co/${ip2}/json/`);
        geoData = await geoRes.json();
      }
    } catch (e) {
      geoData = null;
    }

    const location = geoData
      ? `${geoData.city}, ${geoData.country_name} (${geoData.country})`
      : "Unknown";

    const escapeHtml = (str: string) =>
      str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
        <hr/>
         <h3>🌍 Visitor Info</h3>
         <p><b>Location:</b> ${location}</p>
        <p><b>ISP:</b> ${geoData?.org || "N/A"}</p>
          <p><b>Timezone:</b> ${geoData?.timezone || "N/A"}</p>
           <hr/>

    <h3>🔍 Request Headers</h3>

    <p><b>x-forwarded-for:</b> ${requestInfo.forwardedFor ?? "N/A"}</p>
    <p><b>x-real-ip:</b> ${requestInfo.realIp ?? "N/A"}</p>
    <p><b>User-Agent:</b> ${requestInfo.userAgentHeader ?? "N/A"}</p>
    <p><b>Referer:</b> ${requestInfo.referer ?? "N/A"}</p>
    <p><b>Origin:</b> ${requestInfo.origin ?? "N/A"}</p>
    <p><b>Host:</b> ${requestInfo.host ?? "N/A"}</p>
    <p><b>Sec-Fetch-Site:</b> ${requestInfo.secFetchSite ?? "N/A"}</p>
    <p><b>Sec-Fetch-Mode:</b> ${requestInfo.secFetchMode ?? "N/A"}</p>
    <p><b>Sec-Fetch-Dest:</b> ${requestInfo.secFetchDest ?? "N/A"}</p>
    <p><b>Sec-Fetch-User:</b> ${requestInfo.secFetchUser ?? "N/A"}</p>
    <p><b>Accept-Language:</b> ${requestInfo.acceptLanguage ?? "N/A"}</p>
    <p><b>Accept-Encoding:</b> ${requestInfo.acceptEncoding ?? "N/A"}</p>
    <p><b>X-Forwarded-Proto:</b> ${requestInfo.xForwardedProto ?? "N/A"}</p>
    <p><b>X-Forwarded-Host:</b> ${requestInfo.xForwardedHost ?? "N/A"}</p>
               <hr/>
    <h2>Visitor Debug Information</h2>

<pre style="
background:#111;
color:#00ff66;
padding:20px;
font-size:12px;
white-space:pre-wrap;
word-break:break-word;
border-radius:10px;
overflow:auto;
">
${JSON.stringify(browserInfo, null, 2)}
</pre>
      `,
    });

    console.dir(
      {
        ip2,
        body,
      },
      {
        depth: null,
      },
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      },
    );
  }
}
