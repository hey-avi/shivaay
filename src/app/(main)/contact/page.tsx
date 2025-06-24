
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-primary">Us</span></h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We're here to answer your questions and help you get started on your next project. Don't hesitate to reach out!
        </p>
      </section>
      <ContactSection />
    </div>
  );
}
