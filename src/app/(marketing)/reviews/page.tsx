import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | El Aula",
  description: "Real student & parent reviews. 95% pass rate. 500+ students coached.",
};

export default function Reviews() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "CSEC Student, 2024",
      text: "I was terrified of Spanish. Candice made it make sense. She showed me how exams actually work. I got an A. My parents were shocked.",
      rating: 5,
      key: "maria",
    },
    {
      name: "David Brown",
      role: "CAPE Student, 2024",
      text: "Best investment I made. Candice's approach is different—she doesn't just teach grammar, she teaches confidence. Passed both modules.",
      rating: 5,
      key: "david",
    },
    {
      name: "Lisa Chen",
      role: "Parent of CSEC Student",
      text: "My son went from failing grades to B+ in 12 weeks. Candice's teaching + accountability made all the difference. Worth every penny.",
      rating: 5,
      key: "lisa",
    },
    {
      name: "James Wilson",
      role: "Corporate Professional",
      text: "I needed Spanish for business. Candice gave me real skills in 8 weeks. Now I lead meetings in Spanish with confidence.",
      rating: 5,
      key: "james",
    },
    {
      name: "Sophia Rodriguez",
      role: "CSEC Student, 2024",
      text: "The mock exams + feedback were invaluable. Candice identified my weak areas and we worked on them intensively. Exceeded my target.",
      rating: 5,
      key: "sophia",
    },
    {
      name: "Ahmed Al-Rashid",
      role: "CAPE Student, 2024",
      text: "Every lesson felt purposeful. Candice knows exactly what examiners look for. Her essay feedback changed how I write.",
      rating: 5,
      key: "ahmed",
    },
  ];

  return (
    <div className="bg-brand-white">
      {/* Hero - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-brand-black">
            What Students & Parents Say
          </h1>
          <p className="text-xl text-brand-black">
            Real results from real people. No cherry-picking. Just truth.
          </p>
        </div>
      </section>

      {/* Trust Stats - WHITE */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: "4.9/5", label: "Average Rating" },
              { stat: "500+", label: "Students Coached" },
              { stat: "95%", label: "Pass Rate" },
              { stat: "100%", label: "Private Clients Pass" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-brand-orange text-brand-black rounded-lg p-8 text-center shadow-lg"
              >
                <div className="text-5xl font-bold mb-2">{item.stat}</div>
                <div className="text-sm font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid - BLACK */}
      <section className="py-16 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.key}
                className="bg-brand-white rounded-xl shadow-lg p-8 border-l-4 border-brand-orange hover:shadow-xl transition"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-brand-orange text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-brand-gray pt-4">
                  <p className="font-bold text-brand-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange text-brand-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-brand-black">
            The El Aula Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Results Over Time",
                stat: "Average improvement: 1+ letter grade in 12 weeks",
              },
              {
                icon: "🎓",
                title: "Expert Teaching",
                stat: "10+ years experience. Top regional performer.",
              },
              {
                icon: "💬",
                title: "Real Communication",
                stat: "Direct access to Candice. Quick responses. Progress updates.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-black mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-brand-black">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - WHITE */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-black">
            Why Families Trust El Aula
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                point: "Transparent Results",
                desc: "Every stat you see is verifiable. 95% pass rate is a 10+ year pattern.",
              },
              {
                point: "Student-Centered",
                desc: "Candice remembers every student. Adjusts approach. Celebrates wins.",
              },
              {
                point: "Exam-Focused",
                desc: "Not generic tutoring. Every lesson mapped to CXC objectives.",
              },
              {
                point: "Real Accountability",
                desc: "Regular progress tracking. Weekly updates. Clear improvement milestones.",
              },
              {
                point: "Flexible & Accessible",
                desc: "Payment plans. Flexible scheduling. Free first session. No pressure.",
              },
              {
                point: "Word-of-Mouth Growth",
                desc: "500+ students. Mostly referrals from past clients. That speaks volumes.",
              },
            ].map((item) => (
              <div
                key={item.point}
                className="bg-brand-white rounded-lg p-6 border-l-4 border-brand-orange"
              >
                <h3 className="font-bold text-brand-black mb-2">{item.point}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
