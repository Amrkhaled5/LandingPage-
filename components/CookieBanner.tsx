"use client";

import { useEffect, useState } from "react";

const AUTO_DISMISS_MS = 7000;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent", choice);
    setHiding(true);
    setTimeout(() => setVisible(false), 400);
  };

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => dismiss("accepted"), AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 transition-all duration-400 ${
        hiding ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-2xl rounded-2xl bg-[#1B2A3B] px-6 py-5 shadow-2xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xl">🍪</span>
          <p className="font-bold text-white">نستخدم ملفات تعريف الارتباط</p>
        </div>
        <p className="mb-4 text-sm leading-6 text-white/70">
          نستخدم ملفات الكوكيز وتقنيات قياس الأداء لتحسين تجربة التصفح وقياس زيارات الموقع.
          باستمرارك في استخدام الموقع، فأنت توافق على ذلك.{" "}
          <a href="/privacy" className="text-[#C9A84C] underline underline-offset-2">
            سياسة الخصوصية
          </a>
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => dismiss("accepted")}
            className="rounded-xl bg-[#C9A84C] px-6 py-2.5 text-sm font-bold text-[#1B2A3B] transition-colors hover:bg-[#b8963f]"
          >
            قبول الكل
          </button>
          <button
            onClick={() => dismiss("declined")}
            className="rounded-xl border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
          >
            رفض
          </button>
        </div>
      </div>
    </div>
  );
}
