"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
          العلمين الجديدة · مصر
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
          زهرة المرشدي
        </h1>
        <p className="mb-3 text-xl font-semibold text-white/90 md:text-2xl">
          وجهة سياحية على مدار السنة في قلب العلمين الجديدة
        </p>
        <p className="mb-4 text-base text-white/75 md:text-lg">
          شاليهات متشطبة بالكامل مطلة على اللاجون وحمام السباحة
        </p>
        {/* Delivered badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-400/40 px-4 py-2 text-sm font-semibold text-green-300">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          تسليم فوري — سُلِّم 6 أشهر قبل الموعد المحدد
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => scrollTo("#units")}
            className="w-full rounded-xl bg-[#C9A84C] px-8 py-4 font-bold text-[#1B2A3B] shadow-lg transition-all hover:bg-[#b8963f] hover:shadow-xl sm:w-auto"
          >
            استعرض الوحدات
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#1B2A3B] sm:w-auto"
          >
            تواصل معنا
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
