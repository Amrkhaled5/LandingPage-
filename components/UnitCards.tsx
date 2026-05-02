"use client";

import { useEffect, useRef } from "react";
import { units } from "@/data/units";
import UnitCard from "@/components/UnitCard";

export default function UnitCards() {
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
    <section
      id="units"
      ref={sectionRef}
      className="bg-[#F0E9D8] py-20 px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="fade-in mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
            اختر وحدتك
          </p>
          <h2 className="text-3xl font-bold text-[#1B2A3B]">
            الوحدات المتاحة
          </h2>
          <p className="mt-3 text-[#6B7280]">اختر وحدتك المثالية</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {units.map((unit, i) => (
            <div
              key={unit.id}
              className="fade-in"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <UnitCard unit={unit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
