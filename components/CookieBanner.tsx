"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div className="mx-auto max-w-2xl rounded-2xl bg-[#1B2A3B] px-6 py-5 shadow-2xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xl">🍪</span>
          <p className="font-bold text-white">نستخدم ملفات تعريف الارتباط</p>
        </div>
        <p className="mb-4 text-sm leading-6 text-white/70">
          نستخدم ملفات الكوكيز وتقنيات قياس الأداء لتحسين تجربة التصفح وقياس زيارات الموقع.
          باستمرارك في استخدام الموقع، فأنت توافق على ذلك.{" "}
          <a href="#" className="text-[#C9A84C] underline underline-offset-2">
            سياسة الخصوصية
          </a>
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={accept}
            className="rounded-xl bg-[#C9A84C] px-6 py-2.5 text-sm font-bold text-[#1B2A3B] transition-colors hover:bg-[#b8963f]"
          >
            قبول الكل
          </button>
          <button
            onClick={decline}
            className="rounded-xl border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
          >
            رفض
          </button>
        </div>
      </div>
    </div>
  );
}
