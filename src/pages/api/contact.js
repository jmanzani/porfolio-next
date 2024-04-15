import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api
export default function handler(req, res) {
  if(req.method === "POST"){
    sendEmail(req, res)
  }
}

async function sendEmail(request, response) {
  const bodyRequest = JSON.parse(request.body);
  const username = process.env.USER_EMAIL;
  const password = process.env.USER_PASS;
  const myEmail = process.env.EMAIL_CONTACT;

  const subject = bodyRequest.subject;
  const toEmail =bodyRequest.email;
  const message = bodyRequest.message;
  const transporter = nodemailer.createTransport({
    host: "smtp.jmanzani.com",
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });
  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: username, // sender address
      to: myEmail, // list of receivers
      subject: subject, // Subject line
      html: `
        <h2>Mensaje enviado por ${toEmail}</h2>
        <p>${message}</p>
        `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    const info2 = await transporter.sendMail({
      from: username, // sender address
      to: toEmail, // list of receivers
      subject: "Gracias por contactarme", // Subject line
      html: `
            <h2>Gracias por contactar conmigo</h2>
            <br />
            <p>En cuanto me sea posible contactaré contigo. Este es el mensaje que me has mandado:</p>
            <br />
            <p>${message}</p>
        `,
    });

    console.log("Message sent: %s", info2.messageId);
    return response.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
