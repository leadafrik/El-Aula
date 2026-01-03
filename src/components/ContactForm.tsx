"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        };

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (res.ok) {
            alert("✅ Message sent! We'll reply soon.");
            (e.currentTarget as HTMLFormElement).reset();
          } else {
            alert("❌ Error sending message. Please try WhatsApp instead.");
          }
        } catch {
          alert("❌ Error sending message. Please try WhatsApp instead.");
        }
      }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <label className="block text-brand-white font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-brand-white font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-brand-white font-semibold mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange"
          placeholder="Tell us about your Spanish learning goals..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-brand-orange text-brand-black font-semibold rounded-lg hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  );
}
