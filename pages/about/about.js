"use client";
import React, { useEffect, useState } from "react";

function About() {
   const [loading, setLoading] = useState(true);
            useEffect(() => {
    // page load complete হলে loading false করে দাও
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">

        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About <span className="text-[#66D2CE]">Best Baby Gear</span>
        </h1>

        <h2 className="text-xl text-center text-gray-600 mb-12">
          Trusted by thousands of parents looking for clear, reliable baby product guidance.
        </h2>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          Choosing the right baby essentials shouldn’t feel overwhelming. At{" "}
          <strong>Best Baby Gear</strong>, we help simplify your buying journey by
          combining real parent feedback, expert insights, and performance data
          to bring you the most dependable baby product recommendations — without
          the stress or hours of research.
        </p>

        {/* Image Row */}
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
    <img
      src="/images/about1.jpg"
      alt="Researching baby products"
      className="rounded-2xl shadow-md hover:scale-105 transition-transform"
    />
    <img
      src="/images/about2.jpg"
      alt="Comparing products"
      className="rounded-2xl shadow-md hover:scale-105 transition-transform"
    />
    <img
      src="/images/about3.jpg"
      alt="Happy family with baby gear"
      className="rounded-2xl shadow-md hover:scale-105 transition-transform"
    />
  </div>
</div>


        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2DAA9E] mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We analyze and compare top baby products — from carriers to strollers
            and everything in between — to help parents make confident and smart
            purchase decisions. Our experts break down features, safety details,
            user experiences, and long-term value in a way that’s easy to
            understand and genuinely helpful.
          </p>
        </section>

        {/* How We Do It */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2DAA9E] mb-4">
            How We Do It
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Using a mix of advanced data analysis, expert product research, and
            real parent feedback, we evaluate thousands of reviews and safety
            insights to determine which items truly perform well. Our listings
            are updated regularly so parents always see the most accurate,
            trustworthy product recommendations.
          </p>
        </section>

        {/* Why We Do It */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2DAA9E] mb-4">
            Why It Matters
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Parents already have plenty on their plates. Our mission is to reduce
            confusion and frustration by offering clear, practical, and honest
            recommendations. We also believe in giving back — that’s why a portion
            of our revenue supports charities that help families and communities
            around the world.
          </p>

          <ul className="list-disc ml-8 text-gray-700 text-lg mb-8">
            <li>Local food support programs</li>
            <li>Animal rescue foundations</li>
            <li>International children’s aid organizations</li>
            <li>Disaster relief and emergency response teams</li>
          </ul>

          {/* Charity Images */}
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
    <img
      src="/images/about6.png"
      alt="Charity work"
      className="rounded-2xl shadow-md hover:scale-105 transition-transform"
    />
    <img
      src="/images/about5.png"
      alt="Baby charity"
      className="rounded-2xl shadow-md hover:scale-105 transition-transform"
    />
    <img
      src="/images/about4.png"
      alt="Helping families"
      className="rounded-2xl shadow-md hover:scale-105 transition-transform"
    />
  </div>
</div>


          <p className="text-gray-700 leading-relaxed text-lg">
            Are you a charity that would like to be considered for future
            donations? Email us at{" "}
            <a
              href="mailto:charitypartnerships@buyersguide.org"
              className="text-[#2DAA9E] font-medium hover:underline"
            >
              charitypartnerships@buyersguide.org
            </a>{" "}
            to apply.
          </p>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2DAA9E] mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We partner with trusted retailers and earn a small commission when
            you purchase through our links — with zero extra cost to you. This
            allows us to keep our research free, improve our testing process, and
            continue supporting charitable organizations worldwide.
          </p>
        </section>

      </div>
    </div>
  );
}

export default About;
