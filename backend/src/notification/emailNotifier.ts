import { User } from '@prisma/client';
import { createTransport, Transporter } from 'nodemailer';
import { Notifier } from './notifier.interface';

export class EmailNotifier implements Notifier {
  private readonly transporter: Transporter;

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

  async notify(user: User, title: string, content: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: title,
      text: content,
    });
  }
}
