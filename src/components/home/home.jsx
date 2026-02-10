 import { useEffect, useRef, useState } from "react";

export   function Home() {
  const slides = [
    {
      image: "/b.jpg",
      title: "High-Performance Batteries",
      desc: "Long Lasting Power Storage with advanced Technology",
      cta1: "Get Best Prices",
      cta2: "View Products",
    },
    {
      image: "/inverters.jpg",
      title: "Industrial Inverters",
      desc: "Industrial Inverters",
      cta1: "Get Best Prices",
      cta2: "View Products",
    },
    {
      image: "/solar.jpg",
      title: "Premimum Solar Solutions",
      desc: "Premimum Solar Solutions",
      cta1: "Get Best Prices",
      cta2: "View Products",
    },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const total = slides.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000); // 2s per slide
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="flex-col" id="home">
    <div className="relative   overflow-hidden">
    
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-screen h-[70vh] flex-shrink-0">
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />

            
            <div className="absolute inset-0 bg-black/60 flex items-center">
              <div className="  px-20  space-y-4">
                <h6 className="  font-bold bg-green-500/40 text-green-300 p-1.5 rounded-2xl inline text-white my-2">Premimum Quality Products</h6>
                <h2 className="text-4xl font-bold  text-white">{slide.title}</h2>
                <p className="text-lg text-gray-200 ">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

 
      <button
        onClick={() => {
          prev();
          startAuto();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/80"
      >
        ❮
      </button>

  
      <button
        onClick={() => {
          next();
          startAuto();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/80"
      >
        ❯
      </button>
    </div>
    <div className="flex justify-around gap-1 bg-green-500 text-white p-3">
        <div>
            <h1 className="mb-0 font-bold">15+</h1>
            <span>Years of Experience</span>
        </div>
        <div>
            <h1 className="mb-0 font-bold">5000+</h1>
            <span>Happy Customers</span>
        </div>
        <div>
            <h1 className="mb-0 font-bold">500+</h1>
            <span>Dealers Nationwide</span>
        </div>
        <div>
            <h1 className="mb-0 font-bold">50+</h1>
            <span className="mt-0">Product Range</span>
        </div>
    </div>
    </div>
  );
}
