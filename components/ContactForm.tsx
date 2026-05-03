"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_vat0frk";
const EMAILJS_TEMPLATE_ID = "template_vnd94ao";
const EMAILJS_PUBLIC_KEY = "wm5AgTvJTXVNxP_o2";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".fade-in").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    else if (!/^[0-9+\s()-]+$/.test(form.phone))
      newErrors.phone = "رقم الهاتف غير صحيح";
    if (!form.message.trim()) newErrors.message = "الرسالة مطلوبة";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#F0E9D8] py-20 px-4 md:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <div className="fade-in mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
            نحن هنا
          </p>
          <h2 className="text-3xl font-bold text-[#1B2A3B]">تواصل معنا</h2>
          <p className="mt-3 text-[#6B7280]">
            اترك بياناتك وسنتواصل معك في أقرب وقت
          </p>
          <a
            href="https://www.facebook.com/salescenter.morshedygroup"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white shadow transition-transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
            تابعنا على فيسبوك
          </a>
        </div>

        <div className="fade-in rounded-2xl bg-[#FEFBF3] p-8 shadow-lg">
          {status === "success" ? (
            <div className="py-12 text-center">
              <p className="text-5xl mb-4">✅</p>
              <p className="text-xl font-bold text-green-600">
                تم إرسال رسالتك بنجاح!
              </p>
              <p className="mt-2 text-[#6B7280]">سنتواصل معك قريباً.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg bg-[#1B2A3B] px-6 py-2 text-sm font-semibold text-white hover:bg-[#243547]"
              >
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="mb-1.5 block text-sm font-semibold text-[#1B2A3B]">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 ${
                    errors.name ? "border-red-400" : "border-[#E5D9C5]"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-1.5 block text-sm font-semibold text-[#1B2A3B]">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 ${
                    errors.phone ? "border-red-400" : "border-[#E5D9C5]"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="mb-1.5 block text-sm font-semibold text-[#1B2A3B]">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="اكتب رسالتك هنا..."
                  className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 ${
                    errors.message ? "border-red-400" : "border-[#E5D9C5]"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-[#1B2A3B] py-4 font-bold text-white transition-colors hover:bg-[#243547] disabled:opacity-60"
              >
                {status === "sending" ? "جاري الإرسال..." : "إرسال"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
