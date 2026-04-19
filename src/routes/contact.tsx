import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import contactImg from "@/assets/contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Bizwise Consultants | Karachi, Pakistan" },
      { name: "description", content: "Get in touch with Bizwise Consultants in Karachi. WhatsApp +92 317 2138835 for a free consultation." },
      { property: "og:title", content: "Contact Bizwise Consultants" },
      { property: "og:description", content: "Reach our Karachi office for a free consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative gradient-hero text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={contactImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-page relative text-center animate-fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand">Contact</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Let's start a conversation</h1>
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-lg">
            Based in Karachi, serving SMEs across Pakistan and the UAE.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div className="space-y-5 animate-fade-up">
            {[
              { icon: MapPin, title: "Office", value: "Karachi, Sindh, Pakistan" },
              { icon: Phone, title: "Phone / WhatsApp", value: "+92 317 2138835" },
              { icon: Mail, title: "Email", value: "info@bizwiseconsultants.com" },
              { icon: Clock, title: "Working Hours", value: "Mon – Sat · 9:00 AM – 7:00 PM" },
            ].map(c => (
              <div key={c.title} className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-soft hover-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-brand shrink-0">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{c.value}</p>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/923172138835"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[oklch(0.66_0.18_145)] px-6 py-4 text-white font-bold shadow-elegant transition-smooth hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Message sent! We'll reply shortly."); }}
            className="bg-card rounded-3xl shadow-elegant p-8 md:p-10 animate-fade-up"
          >
            <SectionHeading eyebrow="Send a message" title="Get a free consultation" center={false} />
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Input label="Full Name" />
              <Input label="Email" type="email" />
              <Input label="Mobile" />
              <Input label="Subject" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea required rows={5} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 font-bold text-brand-foreground shadow-brand transition-smooth hover:scale-[1.02]">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border animate-fade-up">
            <iframe
              title="Bizwise Consultants Karachi location"
              src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input required type={type} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}
