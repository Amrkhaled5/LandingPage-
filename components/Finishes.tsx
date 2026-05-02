"use client";

import { useEffect, useRef } from "react";

const internalFinishes = [
  {
    category: "الحمامات",
    icon: "🚿",
    items: [
      "مراحيض معلقة Duravit — ضمان 5 سنوات",
      "سيفونات خفية لتوفير المساحة — ضمان 10 سنوات",
      "أحواض غسيل Duravit مع خزائن خشبية — ضمان 5 سنوات",
      "خلاطات وشُوَّرات Sarreguemines سوداء فاخرة، مقاومة للخدش وبصمات الأصابع — ضمان 10 سنوات",
    ],
  },
  {
    category: "الغرف والمعيشة",
    icon: "🛏️",
    items: [
      "بلاط سيراميك فاخر للأرضيات",
      "دهانات Al Jazeera Paints مقاومة للماء والحرارة",
      "أسقف مقاومة للماء والحرارة",
      "أبواب خشبية بإطارات نحيلة أنيقة",
    ],
  },
  {
    category: "المطبخ",
    icon: "🍳",
    items: [
      "بلاط سيراميك مضاد للبكتيريا",
      "دهانات Al Jazeera Paints مضادة للبكتيريا وبخار الماء",
    ],
  },
];

const externalFinishes = [
  {
    category: "الأرضيات الخارجية",
    icon: "🏛️",
    items: [
      "رخام صناعي — متانة 50 سنة",
      "ممرات ومداخل: رخام صناعي بإكسسوارات نحاسية — متانة 50 سنة",
    ],
  },
  {
    category: "الواجهات والطلاء",
    icon: "🎨",
    items: [
      "دهانات Orchid Marble مقاومة للماء — ضمان 5 سنوات",
      "إضاءة خارجية على جميع المباني والممرات والمسطحات المائية",
    ],
  },
  {
    category: "المرافق والخدمات",
    icon: "⚡",
    items: [
      "شبكة كهرباء El Sewedy Utilities",
      "مياه شرب نقية El Sewedy Utilities",
      "شبكة صرف صحي El Sewedy Utilities",
      "نوافذ مزدوجة الزجاج بعزل حراري وصوتي",
    ],
  },
];

export default function Finishes() {
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
    <section id="finishes" ref={sectionRef} className="bg-[#1B2A3B] py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="fade-in mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#C9A84C] px-5 py-2 text-sm font-bold text-[#1B2A3B]">
            تسليم متشطب بالكامل — صور حقيقية من زهرة
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white">تشطيبات فاخرة</h2>
          <p className="mt-3 text-white/60">
            أعلى جودة مواد لأقل تكلفة صيانة
          </p>
        </div>

        {/* Internal */}
        <div className="fade-in mb-8">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
            التشطيبات الداخلية
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {internalFinishes.map((f) => (
              <div key={f.category} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-2xl">{f.icon}</p>
                <h3 className="mb-4 text-lg font-bold text-[#C9A84C]">{f.category}</h3>
                <ul className="space-y-2">
                  {f.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-white/70">
                      <span className="mt-1 shrink-0 text-[#C9A84C]">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* External */}
        <div className="fade-in">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
            التشطيبات الخارجية والمرافق
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {externalFinishes.map((f) => (
              <div key={f.category} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-2xl">{f.icon}</p>
                <h3 className="mb-4 text-lg font-bold text-[#C9A84C]">{f.category}</h3>
                <ul className="space-y-2">
                  {f.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-white/70">
                      <span className="mt-1 shrink-0 text-[#C9A84C]">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
