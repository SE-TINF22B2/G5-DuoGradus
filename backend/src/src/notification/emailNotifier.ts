import { User } from '@prisma/client';
import { createTransport, Transporter } from 'nodemailer';

export class EmailNotifier {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: process.env.EMAIL_HOST,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  notify(user: User, title: string, content: string) {
    this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: title,
      text: content,
    });
  }
}
