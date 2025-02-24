import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  console.log("Sending email...")
  try {
    const { response, userAgent, deviceInfo, screenSize, ip, time } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIVER,
      subject: `User Clicked "${response}"!`,
      text: `A user clicked the "${response}" button.\n
      📅 Time: ${time}
      💻 Device: ${deviceInfo}
      🌍 Browser: ${userAgent}
      📏 Screen: ${screenSize}
      📡 IP Address: ${ip}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." });
  }
}
