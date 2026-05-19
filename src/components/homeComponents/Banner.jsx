"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-187.5 overflow-hidden rounded-[30px]">
      {/* Background Image */}
      <Image
        src="/banner.png" // put your image in public folder
        alt="banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-162.5 pl-10 md:pl-20 text-white">
          {/* Users */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              <Image
                src="https://i.pravatar.cc/100?img=1"
                alt=""
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="https://i.pravatar.cc/100?img=2"
                alt=""
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="https://i.pravatar.cc/100?img=3"
                alt=""
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="https://i.pravatar.cc/100?img=4"
                alt=""
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
            </div>

            <p className="text-[20px] md:text-[24px] font-medium">
              10M+ Happy Customers
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[60px] md:text-[90px] leading-[0.95] font-black uppercase">
            Looking For Rent a Car?
          </h1>

          {/* Description */}
          <p className="mt-8 text-[22px] leading-[1.7] text-white/90 max-w-[600px]">
            Choose from thousands of vehicles from multiple brands &
            buy online with Click & Drive, or visit us at one of our
            dealerships today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">

            <Link href="/explore-cars">

              <button className="border-2 border-white/70 hover:bg-white hover:text-black transition-all duration-300 text-white text-[22px] font-medium px-10 h-[78px] rounded-full flex items-center gap-3">

                Explore Cars

                <ArrowUpRight size={28} />

              </button>

            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}