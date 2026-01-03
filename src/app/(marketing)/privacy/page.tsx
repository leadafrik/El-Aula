import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | El Aula Tutoring Services",
  description: "How El Aula handles your data and privacy.",
};

export default function Privacy() {
  return (
    <div className="bg-brand-orange">
      {/* Hero - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-brand-black">Privacy Policy</h1>
          <p className="text-brand-black">Last updated: January 2, 2026</p>
        </div>
      </section>

      {/* Content - WHITE */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                El Aula Tutoring Services ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Contact Information</h3>
                  <p className="text-gray-700">
                    When you fill out forms, subscribe to updates, or contact us, we collect your name,
                    email address, phone number, and any message content.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Automatic Information</h3>
                  <p className="text-gray-700">
                    Our website uses Google Analytics to collect information about how you use our site,
                    including pages visited, time spent, and traffic sources. This helps us improve our service.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-gray-700">
                <li>ƒ?› To respond to inquiries and provide customer support</li>
                <li>ƒ?› To send newsletters and educational updates</li>
                <li>ƒ?› To improve website functionality and user experience</li>
                <li>ƒ?› To analyze trends and track website traffic</li>
                <li>ƒ?› To send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">4. How We Protect Your Data</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable security measures to protect your personal information.
                However, no method of transmission over the internet or electronic storage is 100% secure.
                We cannot guarantee absolute security but are committed to protecting your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">5. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We use Google Analytics to understand website usage. Google collects certain data according
                to its own Privacy Policy. We may also use email services and payment processors.
                These services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">6. Email Communications</h2>
              <p className="text-gray-700 leading-relaxed">
                If you subscribe to our mailing list, we'll send you educational content and updates
                about El Aula. You can unsubscribe at any time by clicking the "unsubscribe" link
                in any email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to:
                <br />ƒ?› Access, update, or delete your personal information
                <br />ƒ?› Opt out of marketing communications
                <br />ƒ?› Request information about how your data is used
              </p>
              <p className="text-gray-700 mt-4">
                To exercise these rights, contact us at contact@elaula.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">8. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under 13. We do not knowingly collect information
                from children under 13. If we learn we've collected such information, we'll delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page
                with an updated "last modified" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices:
                <br />dY" Email: contact@elaula.com
                <br />dY'ª WhatsApp: <a href="https://wa.me/1234567890" className="text-brand-orange underline">Message us</a>
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Summary - BLACK */}
      <section className="py-16 px-4 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-6 border-4 border-brand-orange">
            <p className="text-brand-white text-sm">
              <strong className="text-brand-orange">Summary:</strong> We collect only the information you provide and basic usage data
              to improve your experience. We protect it carefully and don't share it with third parties.
              You control your dataƒ?"unsubscribe anytime, request deletions, and opt out of communications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
