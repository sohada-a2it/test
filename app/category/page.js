
"use client";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const categories = [
    {
      id: "baby-carrier-page",
      title: "Baby Carriers",
      description: "Find the perfect baby carrier for comfort and safety",
      image: "/images/category/baby-carrier.jpg",
      url: "/blog/category/baby-carrier-page",
      color: "from-yellow-50 to-yellow-100",
    },
    {
      id: "babyMonitorPage",
      title: "Baby Monitors",
      description: "Smart monitors with video, audio, and security features",
      image: "/images/category/baby-monitor.jpg",
      url: "/blog/category/babyMonitorPage",
      color: "from-blue-50 to-blue-100",
    },
    {
      id: "babySwinqsPage",
      title: "Baby Swings",
      description: "Soothing swings for your baby's comfort and entertainment",
      image: "/images/category/baby-swing.jpg",
      url: "/blog/category/babySwinqsPage",
      color: "from-purple-50 to-purple-100",
    },
    {
      id: "bassinetPage",
      title: "Bassinets",
      description: "Safe and comfortable sleeping solutions for newborns",
      image: "/images/category/bassinet.jpg",
      url: "/blog/category/bassinetPage",
      color: "from-green-50 to-green-100",
    },
    {
      id: "car-seat-page",
      title: "Car Seats",
      description: "Certified car seats for maximum safety on the road",
      image: "/images/category/car-seat.jpg",
      url: "/blog/category/car-seat-page",
      color: "from-red-50 to-red-100",
    },
    {
      id: "crib-mattresses-page",
      title: "Crib Mattresses",
      description: "Orthopedic mattresses for healthy baby sleep",
      image: "/images/category/crib-mattress.jpg",
      url: "/blog/category/crib-mattresses-page",
      color: "from-indigo-50 to-indigo-100",
    },
    {
      id: "high-chair-page",
      title: "High Chairs",
      description: "Ergonomic high chairs for comfortable feeding",
      image: "/images/category/high-chair.jpg",
      url: "/blog/category/high-chair-page",
      color: "from-pink-50 to-pink-100",
    },
    {
      id: "stroller-page",
      title: "Strollers",
      description: "Lightweight and durable strollers for daily use",
      image: "/images/category/stroller.jpg",
      url: "/blog/category/stroller-page",
      color: "from-teal-50 to-teal-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Baby Gear Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive guides and reviews for all your baby gear needs. 
            Find the best products for your little one.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.url}
              className="group block no-underline"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:scale-[1.02] h-full`}>
                
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h2 className="text-xl font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* View Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Read Guide →
                    </span>
                    <span className="text-xs bg-white/80 px-3 py-1 rounded-full text-gray-700 font-medium">
                      Detailed Review
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Trust Our Reviews?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Products Tested</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Parent Reviews Analyzed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">2025</div>
              <div className="text-gray-600">Latest Updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}