"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "بحيرات كريستال وحمام سباحة",
    description:
      "بحيرات صالحة للسباحة بمياه بحرية طازجة تحت السماء الزرقاء، مصممة لتوفير أطول مسافات للسباحة بغض النظر عن الطقس. أعماق متعددة ودوران مستمر للمياه.",
    icon: "🌊",
    image: "IMG-20260502-WA0007.jpg",
  },
  {
    title: "شاطئ خاص",
    description:
      "ثلاثة شواطئ حصرية: Signature Beach لتجربة صيف لا تُنسى، Residents' Beach بمياه فيروزية نابضة بالحياة، وArtificial Beach بمزيج فريد من المياه البحرية والخضرة الاستوائية.",
    icon: "🏖️",
    image: "IMG-20260502-WA0012.jpg",
  },
  {
    title: "منطقة ترفيهية ونايت لايف",
    description:
      "برومناد مائي بطول 8 كم يمتد حتى الشاطئ، يضم رياضات مائية (كانو، سيرف، جت سكي، ويك بورد)، مطاعم وكافيهات، نايت كلوب، وفندق لايف ستايل فاخر.",
    icon: "✨",
    image: "IMG-20260502-WA0015.jpg",
  },
  {
    title: "مركز أعمال وخدمات",
    description:
      "منطقة أعمال متكاملة تضم عيادات طبية، مساحات كو-وركينج، محلات تجارية، وإداريات — بالإضافة إلى Northed، أول شريط تجاري من زهرة بأفضل علامات F&B.",
    icon: "🏢",
    image: "IMG-20260502-WA0010.jpg",
  },
];

export default function Lifestyle() {
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
    <section id="lifestyle" ref={sectionRef} className="bg-[#F8F3E8] py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="fade-in mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
            أسلوب حياة
          </p>
          <h2 className="text-3xl font-bold text-[#1B2A3B]">الحياة في زهرة</h2>
          <p className="mt-3 text-[#6B7280]">وجهة سياحية على مدار السنة لا مجرد كمباوند</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="fade-in group overflow-hidden rounded-2xl bg-[#FEFBF3] shadow-md transition-all duration-300 hover:shadow-xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={`/assets/images/lifestyle/${f.image}`}
                  alt={f.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-2xl">{f.icon}</p>
                <h3 className="mb-2 text-lg font-bold text-[#1B2A3B]">{f.title}</h3>
                <p className="text-sm leading-6 text-[#6B7280]">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
