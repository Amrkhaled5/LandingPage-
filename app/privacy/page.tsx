import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | زهرة المرشدي",
  description: "سياسة الخصوصية وملفات تعريف الارتباط لموقع زهرة المرشدي",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] hover:underline"
        >
          ← العودة إلى الموقع
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-[#1B2A3B]">سياسة الخصوصية</h1>
        <p className="mb-10 text-sm text-gray-400">آخر تحديث: مايو 2026</p>

        <div className="space-y-8 text-base leading-8 text-gray-600">

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">١. المقدمة</h2>
            <p>
              يلتزم موقع زهرة المرشدي (<strong>zahramorshedy.com</strong>) بحماية خصوصيتك.
              توضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها عند زيارتك لموقعنا.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">٢. البيانات التي نجمعها</h2>
            <ul className="list-disc space-y-2 pr-5">
              <li>بيانات النماذج: الاسم، رقم الهاتف، والرسائل التي ترسلها عبر نموذج التواصل.</li>
              <li>بيانات الاستخدام: الصفحات التي تزورها، مدة الجلسة، نوع الجهاز والمتصفح.</li>
              <li>ملفات تعريف الارتباط (Cookies): لتحسين تجربة التصفح وقياس أداء الموقع.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">٣. كيف نستخدم بياناتك</h2>
            <ul className="list-disc space-y-2 pr-5">
              <li>التواصل معك بشأن استفساراتك العقارية.</li>
              <li>تحليل أداء الموقع وتحسين تجربة المستخدم.</li>
              <li>قياس فاعلية حملاتنا الإعلانية عبر Google Ads وGoogle Analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">٤. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="mb-3">نستخدم الأنواع التالية من الكوكيز:</p>
            <ul className="list-disc space-y-2 pr-5">
              <li><strong>كوكيز ضرورية:</strong> لتشغيل الموقع بشكل صحيح.</li>
              <li><strong>كوكيز تحليلية:</strong> Google Analytics لفهم سلوك الزوار.</li>
              <li><strong>كوكيز إعلانية:</strong> Google Ads وGoogle Tag Manager لقياس أداء الإعلانات.</li>
            </ul>
            <p className="mt-3">
              يمكنك تعطيل الكوكيز من إعدادات متصفحك في أي وقت، لكن ذلك قد يؤثر على بعض وظائف الموقع.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">٥. مشاركة البيانات مع أطراف ثالثة</h2>
            <p>
              لا نبيع بياناتك لأي طرف ثالث. نشارك بيانات الاستخدام فقط مع مزودي الخدمات
              الذين نعمل معهم (Google) لأغراض التحليل والإعلان، وفق سياسات الخصوصية الخاصة بهم.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">٦. حقوقك</h2>
            <ul className="list-disc space-y-2 pr-5">
              <li>طلب الاطلاع على بياناتك الشخصية أو حذفها.</li>
              <li>الاعتراض على معالجة بياناتك لأغراض تسويقية.</li>
              <li>سحب موافقتك على الكوكيز في أي وقت.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1B2A3B]">٧. التواصل معنا</h2>
            <p>
              لأي استفسار بشأن سياسة الخصوصية، يمكنك التواصل معنا عبر:
            </p>
            <ul className="mt-2 list-disc space-y-2 pr-5">
              <li>الهاتف: <a href="tel:+201023665527" className="text-[#C9A84C] hover:underline">01023665527</a></li>
              <li>واتساب: <a href="https://wa.me/201023665527" className="text-[#C9A84C] hover:underline" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a></li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
