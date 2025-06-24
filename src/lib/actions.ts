
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormResult = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export function validateContactForm(data: ContactFormData): ContactFormResult {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  return {
    message: "Form validation successful.",
    success: true,
  };
}

export async function submitContactFormClient(data: ContactFormData): Promise<ContactFormResult> {
  // First validate the data
  const validationResult = validateContactForm(data);
  if (!validationResult.success) {
    return validationResult;
  }

  const { name, email, subject, message } = data;

  // Simulate form submission (for static site)
  console.log("Received contact form submission:");
  console.log({ name, email, subject, message });
  console.log("Email would be sent to Shivaay.Dev team.");

  // In a real static site, you could integrate with:
  // - Formspree (https://formspree.io/)
  // - Netlify Forms
  // - EmailJS (https://www.emailjs.com/)
  // - Web3Forms (https://web3forms.com/)
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you! Your message has been received. We'll get back to you soon!",
    success: true,
  };
}
