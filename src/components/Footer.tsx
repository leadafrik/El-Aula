export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-orange py-12 border-t-4 border-brand-orange">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-brand-orange mb-2 font-display">El Aula</h3>
            <p className="text-sm text-brand-orange font-semibold">
              Spanish tutoring for CSEC & CAPE students.
            </p>
            <p className="text-sm text-brand-orange font-bold mt-2">
              Lograremos Juntos
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-brand-orange mb-4 font-display">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/courses#csec" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  CSEC Spanish
                </a>
              </li>
              <li>
                <a href="/courses#cape" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  CAPE Spanish
                </a>
              </li>
              <li>
                <a href="/courses#corporate" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Corporate Spanish
                </a>
              </li>
              <li>
                <a href="/courses#revision" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Revision Sessions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-brand-orange mb-4 font-display">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  About Candice
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="font-bold text-brand-orange mb-4 font-display">Legal & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contact@elaula.com" className="text-brand-orange hover:text-brand-black hover:bg-brand-orange px-2 py-1 rounded transition font-semibold">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-brand-orange pt-8 text-center text-sm text-brand-orange font-semibold">
          <p>&copy; {new Date().getFullYear()} El Aula Tutoring Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
