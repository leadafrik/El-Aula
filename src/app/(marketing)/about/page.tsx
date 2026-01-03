import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Candice & El Aula | Top Spanish Tutor",
  description:
    "Meet Candice, a top regional Spanish performer with 10+ years teaching CSEC & CAPE. 95% pass rate. 500+ students coached.",
};

export default function About() {
  return (
    <div className="bg-brand-black">
      {/* Hero - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-brand-black">Meet Candice</h1>
          <p className="text-xl text-brand-black">
            The face behind El Aula. A Spanish educator obsessed with student results.
          </p>
        </div>
      </section>

      {/* Story - BLACK */}
      <section className="py-16 px-4 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-white rounded-xl p-12 border-4 border-brand-orange">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 bg-brand-orange rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-6xl">👩‍🏫</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-brand-black">
                  Why I Started El Aula
                </h2>
                <p className="text-brand-black mb-4 leading-relaxed">
                  For years, I watched smart students freeze on exam day. Not because they
                  didn't know Spanish, but because they didn't understand *how exams work*.
                </p>
                <p className="text-brand-black mb-4 leading-relaxed">
                  I started tutoring privately to crack the code. I mapped out CXC patterns.
                  I showed students where examiners hide points. I taught them confidence.
                </p>
                <p className="text-brand-black mb-4 leading-relaxed">
                  The results were immediate. Letter grades jumped. Students went from anxious
                  to assured. That's when I knew: this approach should reach more people.
                </p>
                <p className="text-brand-orange font-semibold text-lg">
                  El Aula exists so every capable student gets the advantage they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Credentials - BLACK */}
      <section className="py-16 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-orange">
            Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                stat: "10+",
                label: "Years Teaching CSEC & CAPE",
                desc: "Deep expertise in exam patterns and student success",
              },
              {
                stat: "500+",
                label: "Students Coached",
                desc: "From first-time test takers to university-bound scholars",
              },
              {
                stat: "95%",
                label: "Pass Rate",
                desc: "Consistently top performance, most exceed targets",
              },
              {
                stat: "100%",
                label: "Of Private Clients Pass",
                desc: "Zero failures. Full commitment to student success.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-brand-white rounded-lg p-8 border-l-4 border-brand-orange shadow-lg"
              >
                <div className="text-5xl font-bold text-brand-orange mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold text-brand-black mb-2">{item.label}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy - BLACK */}
      <section className="py-16 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="rounded-xl p-12 border-4 border-brand-black">
            <h2 className="text-3xl font-bold mb-6 text-brand-black">Teaching Philosophy</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>Spanish isn't hard.</strong> Passing the exam is.
              </p>
              <p className="text-lg leading-relaxed">
                Most tutors teach vocabulary. I teach strategy.
              </p>
              <p className="text-lg leading-relaxed">
                I show you the exam blueprint. I show you where you lose points.
                I show you how to think like an examiner.
              </p>
              <p className="text-lg leading-relaxed text-brand-black font-semibold">
                That's the difference between passing and exceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust - BLACK */}
      <section className="py-16 px-4 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-black">
            What Sets El Aula Apart
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Real Results, Not Promises",
                desc: "Every stat on this site is verified. 95% pass rate isn't marketing—it's a pattern over 10+ years.",
              },
              {
                title: "Exam-Focused, Not Generic",
                desc: "Every lesson is mapped to CXC objectives. No filler. No busy work. Straight to what matters.",
              },
              {
                title: "Student-Centered Communication",
                desc: "You get direct access. Quick responses. Regular updates on progress. No corporate runaround.",
              },
              {
                title: "Proven Track Record",
                desc: "100% of private students pass. Hundreds of referrals from past clients. Word-of-mouth is real proof.",
              },
              {
                title: "Flexible & Accessible",
                desc: "Whether you need intensive revision or semester-long prep, we scale to your situation and budget.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-brand-white rounded-lg p-6 border-l-4 border-brand-orange shadow"
              >
                <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
