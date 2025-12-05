import ChildCarrierBackpack from "@/pages/productComponent/ChildCarrierBackpack";
import React from "react"; 

export const metadata = {
  title: "Hands Free Baby Carrier | Best Buyers View",
  description:
    "Discover the best hands free baby carriers with expert reviews, safety tips, and comfort features to keep your baby secure and you hands-free.",
  keywords: [
    "hands free baby carrier",
    "best baby carrier",
    "baby carrier reviews",
    "baby carrier safety",
    "hands free babywearing",
    "parent guide",
  ],
  author: "Best Buyers View",
  publisher: "Best Buyers View",
  alternates: {
    canonical: "https://bestbuyersview.com/hands-free-baby-carrier",
  },
  openGraph: {
    title: "Hands Free Baby Carrier | Best Buyers View",
    description:
      "Explore top hands free baby carriers with detailed reviews, safety guidelines, and buying advice for parents.",
    url: "https://bestbuyersview.com/hands-free-baby-carrier",
    siteName: "Best Buyers View",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hands Free Baby Carrier | Best Buyers View",
    description:
      "Learn about the best hands free baby carriers for comfort and safety with expert reviews and tips.",
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
    name: "Hands Free Baby Carrier | Best Buyers View",
    description:
      "Discover the best hands free baby carriers with expert reviews, safety tips, and comfort features to keep your baby secure and you hands-free.",
    url: "https://bestbuyersview.com/hands-free-baby-carrier",
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
        name: "Hands Free Baby Carrier",
        item: "https://bestbuyersview.com/hands-free-baby-carrier",
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
      <ChildCarrierBackpack/>
    </>
  );
}
