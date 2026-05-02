"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Unit } from "@/data/units";

function formatPrice(n: number) {
  return n.toLocaleString("ar-EG") + " جنيه";
}

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function UnitCard({ unit }: { unit: Unit }) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  const waMsg = encodeURIComponent(
    `أنا مهتم بـ شاليه ${unit.size}م² - ${unit.bedrooms} غرف - إجمالي ${unit.totalPrice.toLocaleString("ar-EG")} جنيه - ${unit.delivery}`
  );
  const waHref = `https://wa.me/201023665527?text=${waMsg}`;

  const deliveryColor =
    unit.delivery === "فوري"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";

  return (
    <>
      {/* ── Card ─────────────────────────────────────────────── */}
      <article className="flex h-full flex-col rounded-2xl border border-[#E5D9C5] bg-[#FEFBF3] shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden">

        {/* Floor plan image — click to open lightbox */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[4/3] w-full overflow-hidden group cursor-zoom-in"
          aria-label={`عرض مخطط الوحدة ${unit.id}`}
        >
          <Image
            src={unit.floorPlanImage}
            alt={`مخطط الوحدة ${unit.id}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
            <span className="scale-75 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#1B2A3B] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              اضغط للتكبير
            </span>
          </div>
        </button>

        <div className="flex flex-col flex-1 p-5 gap-4">
          {/* Badge row */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#1B2A3B]/10 px-3 py-1 text-xs font-semibold text-[#1B2A3B]">
              {unit.size}م²{unit.garden ? ` + حديقة ${unit.garden}م` : ""}
            </span>
            <span className="rounded-full bg-[#1B2A3B]/10 px-3 py-1 text-xs font-semibold text-[#1B2A3B]">
              {unit.bedrooms} غرف
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${deliveryColor}`}>
              استلام: {unit.delivery}
            </span>
            {unit.interestFree && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                بدون فوائد
              </span>
            )}
          </div>

          {/* Total price */}
          <div className="border-t border-b border-[#E5D9C5] py-3">
            <p className="text-xs text-gray-500 mb-1">الإجمالي</p>
            <p className="text-2xl font-bold text-[#C9A84C]">
              {formatPrice(unit.totalPrice)}
            </p>
          </div>

          {/* Payment details */}
          <div className="space-y-2 text-sm text-gray-700">
            {unit.downPayments.map((dp) => {
              const amount = Math.round((dp.percent / 100) * unit.totalPrice);
              return (
                <p key={dp.label}>
                  💰 <strong>{dp.label}:</strong> {dp.percent}% ={" "}
                  {formatPrice(amount)}
                </p>
              );
            })}
            <p>🔧 <strong>الصيانة:</strong> {unit.maintenancePercent}%</p>
            <p>
              📅 <strong>التقسيط:</strong> {unit.paymentYears} سنوات{" "}
              {unit.interestFree ? "(بدون فوائد)" : ""}
            </p>
          </div>

          {/* Layout details — expandable */}
          <div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex w-full items-center justify-between rounded-lg bg-[#F0E9D8] px-3 py-2 text-sm font-semibold text-[#1B2A3B] hover:bg-[#E8DEC8] transition-colors"
            >
              <span>تفاصيل التقسيم</span>
              <span className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>▼</span>
            </button>
            {expanded && (
              <div className="mt-2 rounded-lg bg-[#F0E9D8] px-3 py-3 text-sm text-gray-600 space-y-1">
                <p><strong>مكون من:</strong> {unit.layout}</p>
                <p><strong>الإطلالة:</strong> {unit.view}</p>
              </div>
            )}
          </div>

          {/* WhatsApp CTA — pushed to bottom */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600"
          >
            {WA_ICON}
            احجز عبر واتساب
          </a>
        </div>
      </article>

      {/* ── Lightbox via portal — renders in document.body,
           bypasses any transform stacking context ────────── */}
      {lightboxOpen && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 md:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={() => setLightboxOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white text-lg hover:bg-white/40 transition-colors"
                aria-label="إغلاق"
              >
                ✕
              </button>
              <p className="text-sm font-semibold text-white/90">
                وحدة {unit.id} — {unit.size}م² — {unit.bedrooms} غرف
              </p>
            </div>

            {/* Full-screen image */}
            <div
              className="relative w-full overflow-hidden rounded-2xl bg-black"
              style={{ aspectRatio: "4/3", maxHeight: "80vh" }}
            >
              <Image
                src={unit.floorPlanImage}
                alt={`مخطط الوحدة ${unit.id}`}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom hint */}
            <p className="mt-3 text-center text-xs text-white/50">
              اضغط خارج الصورة أو Escape للإغلاق
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
