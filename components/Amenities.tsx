"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    icon: "🏊",
    title: "رياضات مائية",
    items: ["كانو", "سيرف", "جت سكي", "ويك بورد", "كاياك", "برومناد مائي 8 كم"],
  },
  {
    icon: "⚽",
    title: "نادي رياضي",
    items: ["بادل", "تنس", "كرة قدم", "سكواش", "مني جولف", "كرة طائرة", "رولر بليد", "سكيت بورد"],
  },
  {
    icon: "💆",
    title: "مركز صحة ورفاهية",
    items: ["هيلث كلوب وجيم", "سبا", "كلينيك تغذية", "علاج بالبرد (Cryotherapy)", "فصول لياقة", "IV Therapy"],
  },
  {
    icon: "🎡",
    title: "ترفيه وتيم باركس",
    items: ["حديقة حيوانات تفاعلية", "كارتينج وأرشيري", "بولينج وبينت بول", "ترامبولين وألعاب إلكترونية", "منطقة ألعاب مائية للأطفال"],
  },
  {
    icon: "🌱",
    title: "الاستدامة",
    items: ["إضاءة شوارع تعمل بالطاقة الشمسية", "محطات شحن سيارات كهربائية", "مواصلات عامة كهربائية", "مسارات دراجات وجري", "مزارع حضرية وتدوير نفايات"],
  },
  {
    icon: "🔐",
    title: "أمن وإدارة",
    items: ["قرى مسوّرة بأعلى معايير الأمن", "نظام دخول QR", "كاميرات CCTV وأفراد أمن", "تطبيق موبايل لإدارة الخدمات", "خدمات مدفوعة: غسيل سيارات، تنظيف، بستنة، فندق حيوانات أليفة"],
  },
];

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".fade-in").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="amenities" ref={sectionRef} className="bg-[#F0E9D8] py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="fade-in mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
            كل ما تحتاجه
          </p>
          <h2 className="text-3xl font-bold text-[#1B2A3B]">مميزات لا مثيل لها</h2>
          <p className="mt-3 text-[#6B7280]">مجتمع متكامل يوفر كل شيء داخل أسواره</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="fade-in rounded-2xl bg-[#FEFBF3] p-7 shadow-sm border border-[#E5D9C5] hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-2xl">
                  {cat.icon}
                </span>
                <h3 className="text-lg font-bold text-[#1B2A3B]">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sustainability stats bar */}
        <div className="fade-in mt-14 grid grid-cols-2 gap-4 rounded-2xl bg-[#1B2A3B] p-8 md:grid-cols-4">
          {[
            { val: "86%", label: "مساحات خضراء ومياه" },
            { val: "8 كم", label: "طول البرومناد المائي" },
            { val: "10 دقائق", label: "من المطار والجامعة" },
            { val: "6 أشهر", label: "قبل الموعد المحدد للتسليم" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-[#C9A84C] md:text-3xl">{s.val}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
