
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Simulate email sending
  console.log("Received contact form submission:");
  console.log({ name, email, subject, message });
  console.log("Email would be sent to Տհíѵɑɑყ.Ɗєv team.");

  // In a real application, you would use a service like SendGrid, Resend, or Nodemailer here.
  // For example:
  // try {
  //   await sendEmail({
  //     to: 'team@shivaay.dev', // Updated email
  //     from: 'noreply@yourdomain.com',
  //     subject: `New Contact Form Submission: ${subject}`,
  //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  //   });
  //   return { message: "Thank you! Your message has been sent successfully.", success: true };
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return { message: "An error occurred while sending your message. Please try again later.", success: false };
  // }

  return {
    message: "Thank you! Your message has been received (simulated).",
    success: true,
  };
}
