import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Programs | El Aula Tutoring Services",
  description: "CSEC Spanish, CAPE Spanish, Corporate Spanish. Outcomes, pricing, FAQ.",
};

export default function Courses() {
  return (
    <div className="bg-brand-white">
      {/* Hero - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-brand-black">Programs Built to Win</h1>
          <p className="text-xl text-brand-black">
            Choose your path. Know your outcome. Achieve it.
          </p>
        </div>
      </section>

      {/* Course Cards - WHITE */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "CSEC Spanish",
                price: "JMD 5,000–8,000/month",
                duration: "12 weeks intensive",
                description:
                  "Complete CSEC exam mastery. We cover exam strategy, time management, common traps, and scoring patterns.",
                topics: [
                  "Exam blueprint breakdown",
                  "Listening comprehension tactics",
                  "Reading & answer technique",
                  "Writing (emails, essays, complaints)",
                  "Speaking confidence & fluency",
                  "4 mock exams + feedback",
                ],
                outcome: "Target Grade: A or B",
                proof: "95% of CSEC students pass. Average improvement: 1+ letter grade.",
                icon: "📚",
              },
              {
                title: "CAPE Spanish",
                price: "JMD 6,000–9,000/month",
                duration: "16 weeks (Modules 1 & 2)",
                description:
                  "Advanced Spanish for university prep. Master conversational fluency, analytical writing, and cultural analysis.",
                topics: [
                  "Conversational fluency",
                  "Grammar & syntax mastery",
                  "Essay analysis & writing",
                  "Literature + culture insights",
                  "Module 1 & 2 preparation",
                  "Past paper practice",
                ],
                outcome: "Target: Modules 1 & 2 Pass",
                proof: "100% of private CAPE students pass. Top performers score 80+.",
                icon: "🎓",
              },
              {
                title: "Corporate Spanish",
                price: "JMD 8,000–12,000/month",
                duration: "8 weeks focused",
                description:
                  "Professional Spanish for business professionals. Real emails, meetings, presentations, negotiation.",
                topics: [
                  "Business vocabulary",
                  "Email etiquette & structure",
                  "Meeting & negotiation phrases",
                  "Presentation confidence",
                  "Cultural business norms",
                  "Role-play scenarios",
                ],
                outcome: "Target: Business Fluency",
                proof: "Used by professionals in Jamaica and the region.",
                icon: "💼",
              },
              {
                title: "Revision Intensive",
                price: "JMD 2,000–3,000/hour",
                duration: "2–6 weeks (flexible)",
                description:
                  "Last-minute exam prep. One-on-one focus on weak areas, mock tests, and confidence-building.",
                topics: [
                  "Targeted weak-area review",
                  "Exam technique refinement",
                  "Full-length mock exams",
                  "Time management drills",
                  "Error pattern analysis",
                  "Final confidence coaching",
                ],
                outcome: "Target: Immediate improvement",
                proof: "Perfect for students sitting in 2–6 weeks.",
                icon: "⚡",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="bg-brand-white rounded-xl shadow-lg p-8 border-l-4 border-brand-orange hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-brand-black">
                  {course.title}
                </h3>
                <p className="text-brand-orange font-semibold mb-1">{course.price}</p>
                <p className="text-sm text-gray-600 mb-4">{course.duration}</p>
                <p className="text-gray-700 mb-6">{course.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-brand-black mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic) => (
                      <li key={topic} className="text-sm text-gray-700 flex items-start">
                        <span className="text-brand-orange mr-2 font-bold">ƒo"</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-gray rounded-lg p-4 mb-6">
                  <p className="font-semibold text-brand-black text-sm mb-1">{course.outcome}</p>
                  <p className="text-xs text-gray-600">{course.proof}</p>
                </div>

                <CTAButton
                  href="https://wa.me/1234567890"
                  label="Enroll Now"
                  eventName={`cta_enroll_${course.title.replace(/\s+/g, "_").toLowerCase()}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - BLACK */}
      <section className="py-16 px-4 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-orange">Why Choose El Aula?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "95%", desc: "Pass rate across all programs" },
              { stat: "500+", desc: "Students coached to success" },
              { stat: "100%", desc: "Of private clients pass" },
            ].map((item) => (
              <div key={item.desc}>
                <div className="text-5xl font-bold text-brand-orange mb-2">{item.stat}</div>
                <p className="text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-black">
            Questions? We've Got Answers.
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Which program should I choose?",
                a: 'CSEC student? → CSEC Spanish. CAPE? → CAPE Spanish. Professional? → Corporate Spanish. Not sure? Book a free 15-min consultation.',
              },
              {
                q: "Can I start any week?",
                a: "Yes. Programs are flexible. Start immediately or schedule for later.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes. Weekly or monthly installments available. Talk to Candice about your budget.",
              },
              {
                q: "What if I miss a session?",
                a: "Reschedule for free with 24 hours notice. No penalties.",
              },
              {
                q: "Are there group discounts?",
                a: "Yes. 3+ students get 15% off. Great for friend groups or school clubs.",
              },
              {
                q: "Is the first session really free?",
                a: "Yes. 30 minutes, no obligation. See if El Aula clicks for you.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-brand-white rounded-lg p-6 border-l-4 border-brand-black shadow"
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
