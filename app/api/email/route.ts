import { error } from "console";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest, formId: string) {
  const { email, fullName, message, subject } = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.liquidmail.tech", // Outlook SMTP server
    port: 587, // Outlook SMTP port
    secure: false, // Use `false` for port 587
    auth: {
      user: process.env.FORM_EMAIL, // Your email address
      pass: process.env.FORM_PASSWORD, // Your email password
    },
    debug: true, // Enable debugging
    logger: true,
  });

  const mailOptions: Mail.Options = {
    from: process.env.FORM_EMAIL,
    to: process.env.FORM_EMAIL,
    subject: subject + ": from " + email,
    text: message + "\n\n" + fullName,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });


  try {
    await sendMailPromise();
    console.log("zvaita")
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
