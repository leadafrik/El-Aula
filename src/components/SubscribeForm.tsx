"use client";

export default function SubscribeForm() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;

        try {
          const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          if (res.ok) {
            alert("✅ Thanks! Check your email for updates.");
            (e.currentTarget as HTMLFormElement).reset();
          } else {
            alert("❌ Something went wrong. Please try again.");
          }
        } catch {
          alert("❌ Error subscribing. Please try again.");
        }
      }}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-lg border border-brand-black bg-brand-black text-brand-white placeholder:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-black"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-brand-black text-brand-orange font-semibold rounded-lg hover:opacity-90 transition"
      >
        Subscribe
      </button>
    </form>
  );
}
