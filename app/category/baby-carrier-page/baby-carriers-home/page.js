   
import BabyCarrierHome from "@/pages/productComponent/BabyCarrierHome";
import React from "react"; 

export const metadata = {
  title: "Baby Carrier | Best Buyers View",
  description:
    "Explore the best baby carriers with expert reviews, safety tips, and buying guides to help parents choose the perfect fit.",
  keywords: [
    "baby carrier",
    "best baby carriers",
    "baby carrier reviews",
    "baby carrier safety",
    "parent guide",
  ],
  author: "Best Buyers View",
  publisher: "Best Buyers View",
  alternates: {
    canonical: "https://bestbuyersview.com/baby-carrier",
  },
  openGraph: {
    title: "Baby Carrier | Best Buyers View",
    description:
      "Find top-rated baby carriers with detailed reviews, safety advice, and buying tips for parents.",
    url: "https://bestbuyersview.com/baby-carrier",
    siteName: "Best Buyers View",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Carrier | Best Buyers View",
    description:
      "Discover expert baby carrier reviews and tips to help parents choose safely and comfortably.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ORGANIZATION STRUCTURED DATA
function OrganizationJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best Buyers View",
    url: "https://bestbuyersview.com",
    logo: "https://bestbuyersview.com/logo.png",
    sameAs: [
      "https://www.facebook.com/bestbuyersview",
      "https://www.linkedin.com/company/bestbuyersview",
      "https://www.youtube.com/@bestbuyersview",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WEBPAGE SCHEMA
function WebPageJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Baby Carrier | Best Buyers View",
    description:
      "Explore the best baby carriers with expert reviews, safety tips, and buying guides to help parents choose the perfect fit.",
    url: "https://bestbuyersview.com/baby-carrier",
    author: {
      "@type": "Person",
      name: "Best Buyers View",
    },
    publisher: {
      "@type": "Organization",
      name: "Best Buyers View",
      logo: {
        "@type": "ImageObject",
        url: "https://bestbuyersview.com/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BREADCRUMB SCHEMA
function BreadcrumbJsonLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bestbuyersview.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Baby Carrier",
        item: "https://bestbuyersview.com/baby-carrier",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Page() {
  return (
    <>
      {/* JSON-LD SCHEMAS */}
      <OrganizationJsonLD />
      <WebPageJsonLD />
      <BreadcrumbJsonLD />

      {/* PAGE CONTENT */} 
      <BabyCarrierHome/>
    </>
  );
}
