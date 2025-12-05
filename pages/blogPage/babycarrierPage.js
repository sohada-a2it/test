"use client";
import Image from "next/image";
import { useState } from "react";
import BlogNav from "@/pages/blogPage/BlogNav"; 

export default function BabyCarrierPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const faqs = [
    {
      q: "When can I start using a baby carrier?",
      a: "Most newborns can use a carrier with proper head and neck support. Follow manufacturer guidelines for minimum weight.",
    },
    {
      q: "What type of carrier is best for newborns?",
      a: "Soft-structured carriers or wraps with ergonomic support are ideal for newborns and young infants.",
    },
    {
      q: "Is forward-facing safe for babies?",
      a: "Forward-facing is generally recommended only for older infants with strong neck control. Always follow manufacturer safety advice.",
    },
    {
      q: "How do I clean a baby carrier?",
      a: "Most carriers have removable fabric that can be machine washed or hand washed. Check the care instructions for your model.",
    },
    {
      q: "Can baby carriers be used for toddlers?",
      a: "Yes, many carriers support toddlers up to 35–45 lbs, but make sure weight limits and ergonomic design are suitable.",
    },
  ];

  const rows = [
    { factor: "Safety & Support", look: "Ergonomic design, proper head/neck support, sturdy straps." },
    { factor: "Comfort", look: "Padded shoulder and waist straps; breathable fabric for long wear." },
    { factor: "Adjustability", look: "Multiple carrying positions and adjustable straps for different caregivers." },
    { factor: "Material & Cleaning", look: "Durable, non-toxic, machine washable or easy-to-clean fabrics." },
    { factor: "Portability", look: "Lightweight and easy to fold/store when not in use." },
    { factor: "Age & Weight Range", look: "Check manufacturer limits for newborns through toddlers." },
    { factor: "Ease of Use", look: "Simple to put on/off, secure fasteners, easy adjustments." },
    { factor: "Value & Price", look: "Balance comfort, safety, and durability with cost. Typical range $50–$200." },
  ];

  return (
    <div className="w-full overflow-x-hidden"> {/* 👈 নতুন লাইন যোগ করুন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"> {/* 👈 container পরিবর্তন */}
        <div className="flex flex-col items-center gap-10">
          {/* Top Nav */}
          <div className="w-full gap-3 bg-gray-50 p-4 rounded-xl shadow-md">
            <BlogNav />
          </div>

          {/* Main Section */}
          <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen py-12">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-yellow-100">
              {/* Header Image */}
              <div className="relative w-full h-80 md:h-[450px]">
                <Image
                  src="/images/babycarrier.jpg"
                  alt="Best Baby Carrier"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                <div className="absolute inset-0 bg-black/25 flex items-end p-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    Best Baby Carrier Review (2025)
                  </h1>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-10"> {/* 👈 responsive padding */}
                {/* Meta */}
                <div className="text-sm text-gray-500">
                  Updated <strong>November 2025</strong> • 10 min read • Tested by{" "}
                  <span className="font-semibold text-yellow-600">Best Baby Gear Editors</span>
                </div>

                {/* Introduction */}
                <section className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-yellow-400 pl-3">
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Baby carriers allow parents to keep their child close while keeping hands free. In 2025, carriers provide ergonomic support, comfort for long wear, and safe materials for newborns through toddlers.
                  </p>
                </section>

                {/* Buying Guide Highlights */}
                <section className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-yellow-400 pl-3">
                    What Makes a Great Baby Carrier? (Buying Guide Highlights)
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                    <li><strong>Safety:</strong> Ergonomic design, proper head and neck support.</li>
                    <li><strong>Comfort:</strong> Padded straps and breathable fabric for parents and baby.</li>
                    <li><strong>Adjustability:</strong> Multiple carrying positions and strap adjustments.</li>
                    <li><strong>Durability:</strong> Strong, non-toxic, easy-to-clean materials.</li>
                    <li><strong>Portability:</strong> Lightweight, foldable, easy to store or carry.</li>
                    <li><strong>Value:</strong> Balances safety, comfort, and price ($50–$200).</li>
                  </ul>
                </section>

                {/* Quick Summary & Editor Rating */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8"> {/* 👈 gap responsive */}
                  <div className="bg-yellow-50 rounded-2xl p-4 md:p-6 border border-yellow-100">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-700">👶 Quick Summary</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>✅ Ergonomic and safe for newborns and toddlers</li>
                      <li>🌬 Comfortable padded straps and breathable fabric</li>
                      <li>🧼 Easy to clean and durable materials</li>
                      <li>💰 Price range: $50–$200 USD</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-100 rounded-2xl p-4 md:p-6 flex flex-col justify-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Editor’s Rating</h3>
                    <div className="text-4xl font-extrabold text-yellow-600 my-2">4.7 / 5 ⭐</div>
                    <p className="text-gray-600 text-sm">Safety, comfort, and adjustability make it a top choice for parents in 2025.</p>
                  </div>
                </div>

                {/* Factors Table */}
                <section className="my-6 md:my-8">
                  <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden border border-yellow-100">
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-yellow-400 pl-3 mb-4 md:mb-6">
                        👶 Baby Carrier — Factors & What to Look For (2025)
                      </h2>
                      <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                        <table className="w-full min-w-full border border-gray-200 rounded-lg text-left">
                          <thead className="bg-yellow-100">
                            <tr>
                              <th className="p-3 md:p-4 text-gray-800 font-semibold border-b text-nowrap">Factor</th>
                              <th className="p-3 md:p-4 text-gray-800 font-semibold border-b">What to Look For</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((row, index) => (
                              <tr key={index} className="odd:bg-white even:bg-yellow-50 hover:bg-yellow-100 transition">
                                <td className="p-3 md:p-4 font-medium text-gray-700 border-b min-w-[150px]">{row.factor}</td>
                                <td className="p-3 md:p-4 text-gray-700 border-b">{row.look}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <div className="mt-6 md:mt-10 bg-yellow-50 border border-yellow-100 rounded-2xl p-4 md:p-6 shadow-inner">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Final Conclusion</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Prioritize safety, support, and comfort above all.</li>
                    <li>Look for adjustable, durable, and easy-to-clean carriers.</li>
                    <li>Investing in a quality baby carrier ensures safe, ergonomic, and hands-free babywearing.</li>
                    <li>Multiple carrying positions enhance convenience for parents and caregivers.</li>
                    <li>A well-chosen carrier supports both the baby's development and the parent's comfort. 🍼</li>
                  </ul>
                </div>

                {/* FAQ Accordion */}
                <section className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-yellow-400 pl-3">FAQs</h2>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div key={index} onClick={() => toggleFAQ(index)} className="border border-gray-200 rounded-lg p-4 cursor-pointer transition-all hover:bg-yellow-50">
                        <h3 className="font-semibold text-gray-800 flex justify-between items-center">
                          {faq.q} <span className="text-yellow-600 text-xl">{openFAQ === index ? "−" : "+"}</span>
                        </h3>
                        {openFAQ === index && <p className="mt-2 text-gray-700">{faq.a}</p>}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Amazon Button */}
                <div className="w-full max-w-[200px] mx-auto mt-8">
                  <a 
                    href="https://www.amazon.com/s?k=baby+carrier" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    <div className="w-full flex items-center justify-center bg-yellow-500 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 shadow-md transition-all duration-300">
                      Visit Amazon
                    </div>
                    <div className="w-full flex items-center justify-center border border-yellow-500 rounded-b-md py-2 bg-white">
                      <div className="relative w-[140px] h-[40px]">
                        <Image
                          src="/images/amazon.png"
                          alt="Amazon"
                          fill
                          className="object-contain"
                          sizes="140px"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}