import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SubscribeForm from "@/components/SubscribeForm";
import AdminDashboard from "@/components/AdminDashboard";
import { siteContent } from "@/lib/siteContent";
import { iconMap } from "@/lib/iconMap";

export const metadata: Metadata = {
  title: "El Aula - Home | Interactive Spanish Tutoring",
  description: "Master CSEC & CAPE Spanish with interactive lessons and expert guidance.",
};

export default function Home() {
  return (
    <div className="bg-brand-black">
      <AdminDashboard />
      {/* Hero Section - BRIGHT ORANGE */}
      <section className="bg-brand-orange text-brand-black py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-brand-black leading-tight">
            {siteContent.hero.mainTitle}
          </h1>
          <div className="h-3 w-40 bg-brand-black mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl mb-4 text-brand-black font-semibold max-w-4xl mx-auto">
            {siteContent.hero.subtitle}
          </p>
          <p className="text-lg text-brand-black font-bold mb-10 opacity-90">
            {siteContent.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="https://wa.me/1234567890"
              label="Book Your Free Consultation"
              eventName="cta_whatsapp_click_hero"
            />
            <CTAButton
              href="#courses"
              label="See Programs"
              eventName="cta_courses_click"
            />
          </div>
        </div>
      </section>

      {/* Why El Aula Section - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-2 text-brand-black">
            {siteContent.whyChoose.title}
          </h2>
          <div className="h-3 w-32 bg-brand-black mx-auto mb-6"></div>
          <p className="text-lg text-brand-black max-w-3xl mx-auto mb-8 font-semibold">
            {siteContent.whyChoose.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.whyChoose.points.map((item) => (
              <div key={item.title} className="bg-brand-orange rounded-lg p-6 border-4 border-brand-black shadow-md hover:shadow-lg transition transform hover:scale-105">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-brand-black mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-brand-black font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - ORANGE */}
      <section className="py-16 px-4 bg-brand-orange">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: siteContent.stats.studentsImpacted, label: siteContent.stats.studentsImpactedLabel },
              { number: siteContent.stats.passRate, label: siteContent.stats.passRateLabel },
              { number: siteContent.stats.yearsExperience, label: siteContent.stats.yearsExperienceLabel },
              { number: siteContent.stats.support, label: siteContent.stats.supportLabel },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-brand-orange rounded-lg p-8 border-4 border-brand-black transform hover:scale-105 transition">
                <div className="text-5xl font-bold text-brand-black mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-black font-bold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview - ORANGE */}
      <section id="courses" className="py-16 px-4 bg-brand-orange">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-brand-black mb-2">
              {siteContent.programs.title}
            </h2>
            <div className="h-3 w-32 bg-brand-black mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.programs.courses.map((course) => {
              const IconComponent = iconMap[course.icon] || iconMap.Book;
              return (
                <div
                  key={course.name}
                  className="bg-brand-orange rounded-xl shadow-lg p-8 border-4 border-brand-black hover:shadow-2xl transition transform hover:scale-105"
                >
                  <IconComponent className="w-16 h-16 mb-4 text-brand-black" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-2 text-brand-black">
                    {course.name}
                  </h3>
                  <p className="text-sm text-brand-black font-bold mb-3">{course.target}</p>
                  <p className="text-sm text-brand-black font-semibold mb-4">{course.stats}</p>
                  <p className="text-brand-black font-semibold mb-4">{course.description}</p>
                  <p className="text-xs text-brand-black font-bold mb-6">{course.priceRange}</p>
                  <button className="w-full px-6 py-3 bg-brand-black text-brand-orange font-bold rounded-lg hover:opacity-90 transition">
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Resources & Learning Materials - ORANGE */}
      <section id="resources" className="py-16 px-4 bg-brand-orange">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-brand-black mb-2">
              {siteContent.resources.title}
            </h2>
            <p className="text-xl text-brand-black mb-6 max-w-3xl mx-auto font-semibold">
              {siteContent.resources.description}
            </p>
            <div className="h-3 w-32 bg-brand-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {siteContent.resources.types.map((resource) => {
              const IconComponent = iconMap[resource.icon] || iconMap.Play;
              return (
                <div
                  key={resource.name}
                  className="bg-brand-orange rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition border-2 border-brand-black"
                >
                  <IconComponent className="w-12 h-12 mb-3 mx-auto text-brand-black" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-brand-black mb-2">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-brand-black font-semibold">{resource.count}</p>
                </div>
              );
            })}
          </div>

          {/* Video Section Highlight - ORANGE */}
          <div className="bg-brand-orange rounded-xl p-8 md:p-12 text-center border-4 border-brand-black">
            <h3 className="text-3xl font-bold text-brand-black mb-4">50+ Video Lessons</h3>
            <p className="text-lg text-brand-black mb-6 max-w-3xl mx-auto font-semibold">
              Watch expert explanations for every grammar rule, conjugation, and conversation scenario. Each video includes practice exercises and comprehension checks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-brand-black text-brand-orange font-bold rounded-lg hover:opacity-90 transition">
                Browse Video Library
              </button>
              <a
                href="/resources"
                className="px-6 py-3 border-2 border-brand-black text-brand-black font-bold rounded-lg hover:bg-brand-black hover:text-brand-orange transition"
              >
                All Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - ORANGE */}
      <section className="bg-brand-orange text-brand-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-brand-black">
            Ready to Change Your Spanish Grade?
          </h2>
          <p className="text-xl mb-8 text-brand-black font-semibold">
            500+ students have. Average improvement: full letter grade within 12 weeks. 
            <br />
            <strong className="text-brand-black text-2xl">Your first consultation is free.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-black text-brand-orange font-bold rounded-lg hover:opacity-90 transition text-lg">
              Start Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-brand-black text-brand-black font-bold rounded-lg hover:bg-brand-black hover:text-brand-orange transition text-lg">
              Get Free Exam Tips
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section - ORANGE */}
      <section id="subscribe" className="py-16 px-4 bg-brand-orange">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2 text-brand-black">
            Stay Updated
          </h2>
          <div className="h-3 w-20 bg-brand-black mx-auto mb-4"></div>
          <p className="text-brand-black font-semibold mb-8 text-lg">
            Get free resources, exam tips, and course updates delivered to your inbox.
          </p>
          <SubscribeForm />
        </div>
      </section>
    </div>
  );
}
