"use client";

import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  label: string;
  eventName: string;
};

export default function CTAButton({ href, label, eventName }: Props) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-brand-black px-6 py-3 font-semibold text-brand-orange border-2 border-brand-black hover:bg-brand-orange hover:text-brand-black transition"
      onClick={() =>
        trackEvent(eventName, { label, href })
      }
    >
      {label}
    </a>
  );
}
