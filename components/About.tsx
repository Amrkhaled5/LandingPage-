"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { label: "10 دقائق من المطار", icon: "✈️" },
  { label: "86% مساحات خضراء ومياه", icon: "🌿" },
  { label: "بحيرات كريستال صالحة للسباحة", icon: "💎" },
  { label: "بجوار مراسي والعلمين", icon: "📍" },
];

const partners = [
  {
    name: "Mohamed Hadid",
    role: "مطور ماستر بلان",
    desc: "مطور عقاري أمريكي شهير ببناء الفيلات والفنادق الفاخرة في بيفرلي هيلز ولوس أنجلوس.",
  },
  {
    name: "VDP Design",
    role: "تصميم معماري",
    desc: "مكتب تصميم من أمستردام بفريق إبداعي متنوع، يُركز على الابتكار والتصاميم الطليعية.",
  },
  {
    name: "Diestadt",
    role: "تصميم المناظر الطبيعية",
    desc: "مكتب المهندس توماس ديستادت للمساحات الخضراء المستدامة والبيئة الأيكولوجية الفاخرة.",
  },
  {
    name: "HRZN",
    role: "تصميم بيئي",
    desc: "متخصص في دمج الطبيعة بسلاسة داخل البيئات العمرانية وأجسام المياه الفيروزية.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-in").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-[#F8F3E8] py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Main about block */}
        <div className="fade-in grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/about.jpg"
                alt="زهرة المرشدي"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
              من نحن
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1B2A3B]">عن زهرة</h2>
            <p className="mb-6 text-base leading-8 text-gray-600">
              كمباوند زهرة المرشدي يقع في المربع الذهبي بالعلمين الجديدة — بجوار مراسي مباشرةً
              وعلى بُعد 10 دقائق فقط من المطار والجامعة والمستشفى. المشروع يضم 86% مساحات خضراء
              وأجسام مياه مع بحيرات كريستال صالحة للسباحة طوال العام.
            </p>
            <p className="mb-8 text-sm text-gray-500 leading-7">
              العلمين الجديدة، المدينة الناشئة التي تشهد تحولاً عمرانياً غير مسبوق مدعوماً
              باستثمارات أجنبية ضخمة — وزهرة في قلبها.
            </p>
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="flex items-center gap-2 rounded-full border border-[#C9A84C] bg-[#C9A84C]/10 px-4 py-2 text-sm font-semibold text-[#1B2A3B]"
                >
                  <span>{stat.icon}</span>
                  {stat.label}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+201023665527"
                className="inline-flex items-center gap-2 rounded-full bg-[#1B2A3B] px-5 py-2.5 text-sm font-semibold text-white shadow transition-transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
                اتصل بنا
              </a>
              <a
                href="https://www.facebook.com/salescenter.morshedygroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white shadow transition-transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
                تابعنا على فيسبوك
              </a>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="fade-in mt-20">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
            شركاؤنا
          </p>
          <h3 className="mb-10 text-center text-2xl font-bold text-[#1B2A3B]">
            فريق عالمي من الخبراء
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-[#E5D9C5] bg-[#FEFBF3] p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="mb-1 text-lg font-bold text-[#1B2A3B]">{p.name}</p>
                <p className="mb-3 text-xs font-semibold text-[#C9A84C] uppercase tracking-wide">
                  {p.role}
                </p>
                <p className="text-sm leading-6 text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
