"use client";

import CTAButton from "@/components/CTAButton";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="bg-brand-black">
      {/* Hero - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-brand-black">
            Let's Talk About Your Goals
          </h1>
          <p className="text-xl text-brand-black">
            No pressure. No sales pitch. Just honest conversation about what you want to achieve.
          </p>
        </div>
      </section>

      {/* Contact Methods - BLACK */}
      <section className="py-16 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-white rounded-xl p-8 text-center shadow-lg border-4 border-brand-black hover:shadow-xl transition">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-black">Quick Response</h3>
              <p className="text-gray-600 mb-6">
                Message on WhatsApp. Candice replies within 1 hour during business hours.
              </p>
              <CTAButton
                href="https://wa.me/1234567890"
                label="Message Now"
                eventName="cta_whatsapp_contact"
              />
            </div>

            <div className="bg-brand-white rounded-xl p-8 text-center shadow-lg border-4 border-brand-black hover:shadow-xl transition">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-black">Detailed Questions</h3>
              <p className="text-gray-600 mb-6">
                Prefer email? Write your full question. Reply within 24 hours.
              </p>
              <a
                href="mailto:contact@elaula.com"
                className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 font-semibold text-brand-black hover:opacity-90 transition"
              >
                Email Us
              </a>
            </div>

            <div className="bg-brand-white rounded-xl p-8 text-center shadow-lg border-4 border-brand-black hover:shadow-xl transition">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-black">Phone Consultation</h3>
              <p className="text-gray-600 mb-6">
                Schedule a quick call. Free 15-minute consultation. See if we're a fit.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 font-semibold text-brand-black hover:opacity-90 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form - BLACK */}
      <section className="py-16 px-4 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl p-12 border-4 border-brand-orange">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-orange">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Promise - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-black">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                num: "1",
                title: "Fast Response",
                desc: "WhatsApp = 1 hour. Email = 24 hours. No delays.",
              },
              {
                num: "2",
                title: "Honest Assessment",
                desc: "We'll tell you exactly where you stand and what's possible.",
              },
              {
                num: "3",
                title: "Free Consultation",
                desc: "No obligation. No payment upfront. Just a real conversation.",
              },
            ].map((item) => (
              <div key={item.num}>
                <div className="text-5xl font-bold text-brand-black mb-3">{item.num}</div>
                <h3 className="font-bold text-lg mb-2 text-brand-black">{item.title}</h3>
                <p className="text-brand-black text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - BLACK */}
      <section className="py-16 px-4 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-black">
            Common Concerns
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is the first session really free?",
                a: "Yes. 15–30 minutes. No strings attached. See if El Aula clicks for you.",
              },
              {
                q: "What if I'm nervous about speaking Spanish?",
                a: "Perfect. That's exactly what we work on. Candice builds confidence from day one. Nerves are normal.",
              },
              {
                q: "What if I'm way behind?",
                a: "Doesn't matter. We'll assess where you are, make a plan, and get you caught up. People go from failing to passing in 12 weeks.",
              },
              {
                q: "Can we schedule outside normal hours?",
                a: "Yes. We're flexible with scheduling. Early mornings, evenings, weekends—let's work it out.",
              },
              {
                q: "What's the payment situation?",
                a: "Transparent pricing. Monthly or weekly installments available. No hidden fees. We'll discuss budget upfront.",
              },
              {
                q: "How do I know this will actually work for me?",
                a: "The free consultation answers that. You'll know after 15 minutes if this feels right. We want you confident too.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-brand-white rounded-lg p-6 border-l-4 border-brand-orange shadow"
              >
                <h3 className="font-bold text-brand-black mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
