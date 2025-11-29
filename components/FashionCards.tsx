"use client";
import Image from "next/image";

export default function FashionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
      
      {}
      <div className="relative rounded-lg overflow-hidden shadow-lg group">
        <Image
          src="/model1.jpeg"        
          alt="Women Fashion"
          width={500}
          height={600}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Women's Trendy Styles</h2>
          <p className="text-sm mb-4">
            Explore the latest fashion trends for women. Chic, casual, and classy styles.
          </p>
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
            Show More
          </button>
        </div>
      </div>

      {}
      <div className="relative rounded-lg overflow-hidden shadow-lg group">
        <Image
          src="/model2.png"        
          alt="Men Fashion"
          width={500}
          height={600}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Men's Fashion Essentials</h2>
          <p className="text-sm mb-4">
            Curated must-have men's styles, from classic to modern.
          </p>
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
            Show More
          </button>
        </div>
      </div>

      {}
      <div className="relative rounded-lg overflow-hidden shadow-lg group">
        <Image
          src="/model3.jpeg" 
          alt="Accessories"
          width={500}
          height={600}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Accessories to Complete</h2>
          <p className="text-sm mb-4">
            Bags, jewelry, shades, and all the little things that make the outfit.
          </p>
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
            Show More
          </button>
        </div>
      </div>

    </div>
  );
}
