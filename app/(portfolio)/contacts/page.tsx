import { ContactForm } from "@/components/features/contacts/ContactForm";
import { ContactMap } from "@/components/features/contacts/ContactMap";

export const metadata = {
  title: "Contact | Mae Ann",
  description: "Get in touch for full stack development inquiries, architecture advice, or collaboration.",
};

export default function ContactsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <ContactForm />
      <ContactMap />
    </main>
  );
}