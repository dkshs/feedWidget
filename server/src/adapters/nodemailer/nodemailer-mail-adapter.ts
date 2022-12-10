import nodemailer from "nodemailer";
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d52ddf4f0e5b6d",
    pass: "70dc88f317dbc1",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "DKSHS <dkshs@gmail.com>",
      subject,
      html: body,
    });
  }
}

