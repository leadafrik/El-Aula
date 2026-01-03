import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | El Aula Tutoring Services",
  description: "Terms and conditions for El Aula Tutoring Services.",
};

export default function Terms() {
  return (
    <div className="bg-brand-white">
      {/* Hero - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-brand-black">Terms of Service</h1>
          <p className="text-brand-black">Last updated: January 2, 2026</p>
        </div>
      </section>

      {/* Content - WHITE */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or
                software) on El Aula's website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license
                you may not:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li>ƒ?› Modify or copy the materials</li>
                <li>ƒ?› Use the materials for any commercial purpose or for any public display</li>
                <li>ƒ?› Attempt to decompile or reverse engineer any software</li>
                <li>ƒ?› Remove any copyright or other proprietary notations</li>
                <li>ƒ?› Transfer materials to another person or "mirror" materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">3. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on El Aula's website are provided on an 'as is' basis. El Aula makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of intellectual property
                or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">4. Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall El Aula or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on El Aula's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">5. Accuracy of Materials</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on El Aula's website could include technical, typographical, or
                photographic errors. El Aula does not warrant that any of the materials on its website are
                accurate, complete, or current. El Aula may make changes to the materials contained on its
                website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">6. Links</h2>
              <p className="text-gray-700 leading-relaxed">
                El Aula has not reviewed all of the sites linked to its website and is not responsible
                for the contents of any such linked site. The inclusion of any link does not imply
                endorsement by El Aula of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">7. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                El Aula may revise these terms of service for its website at any time without notice.
                By using this website, you are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">8. Tutoring Services Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Scheduling & Attendance</h3>
                  <p className="text-gray-700">
                    Sessions are scheduled by mutual agreement. Students should attend sessions on time.
                    Cancellations must be made with 24 hours notice to avoid charges.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Payment</h3>
                  <p className="text-gray-700">
                    Tutoring fees are due as agreed upon. Payment terms will be discussed during
                    your consultation. Unpaid fees may result in suspension of services.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Academic Results</h3>
                  <p className="text-gray-700">
                    While El Aula is committed to helping students excel, exam results depend on student
                    effort, practice, and preparation. We cannot guarantee specific grades or scores.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of
                Jamaica, and you irrevocably submit to the exclusive jurisdiction of the courts in
                that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-black">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service:
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
              <strong className="text-brand-orange">Summary:</strong> This website and tutoring services are provided as-is.
              We ask that you use our site responsibly and follow our tutoring guidelines.
              Results depend on student effort. Questions? Contact us anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
