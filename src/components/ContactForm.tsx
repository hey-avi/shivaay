
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContactFormClient, type ContactFormData, type ContactFormResult } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactFormResult['errors']>({});
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await submitContactFormClient(data);
      
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        });
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        setErrors(result.errors || {});
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">Get In Touch</CardTitle>
        <CardDescription>
          Have a project in mind or just want to say hello? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {errors?.name && <p className="text-sm text-destructive">{errors.name.join(", ")}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              {errors?.email && <p className="text-sm text-destructive">{errors.email.join(", ")}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Subject of your message" required />
            {errors?.subject && <p className="text-sm text-destructive">{errors.subject.join(", ")}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
            {errors?.message && <p className="text-sm text-destructive">{errors.message.join(", ")}</p>}
          </div>
          <div>
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
