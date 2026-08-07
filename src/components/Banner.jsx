"use client"
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const images =[
    {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80",
    alt: "Highway with bus and coastline",
  },
  {
    src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=80",
    alt: "Train crossing scenic countryside",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
    alt: "Airplane over clouds",
  },
  {
    src:"/assets/boat.png",
    alt: "Coastal launch/ferry route",
  },
  ];
  const SLIDE_DURATION=5000;
  const [index,setIndex]= useState(0);
  const [paused,setPaused]=useState(false);

  const goTo= useCallback((i)=>{
    setIndex((i+images.length)%images.length);
  },[]);
  useEffect(()=>{
    if(paused) return;
    const timer= setInterval (()=>{
      setIndex((prev)=>(prev+1)% images.length);
    },SLIDE_DURATION);
    return ()=>clearInterval(timer);

  },[paused]);
  return (
    // <section className="relative overflow-hidden">
    //   {/* Background Image */}
    //   <div className="relative h-[600px] md:h-[850px]">
    //     <Image
    //       src="/assets/banner.jpeg"
    //       alt="TicketBari Banner"
    //       fill
    //       priority
    //       className="object-cover"
    //     />
  
    //     {/* Dark Overlay */}
    //     <div className="absolute inset-0 bg-black/55" />

    //     {/* Gradient Overlay */}
    //     <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/90 via-[#07111F]/60 to-transparent" />

    //     {/* Content */}
    //     <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
    //       <div className="max-w-3xl">
    //         <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
    //           Bangladesh's Premium Ticket Platform
    //         </span>

    //         <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
    //           Travel Anywhere,
    //           <br />
    //           <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    //             Book in Seconds
    //           </span>
    //         </h1>

    //         <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
    //           Book bus, train, launch, and plane tickets across Bangladesh
    //           with a fast, secure, and reliable booking experience.
    //         </p>

    //         <div className="flex flex-wrap gap-4">
    //           <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105">
    //             Explore Tickets
    //           </button>

    //           <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
    //             Learn More
    //           </button>
    //         </div>

    //         {/* Stats */}
    //         <div className="mt-12 flex flex-wrap gap-8">
    //           <div>
    //             <h3 className="text-3xl font-bold text-cyan-400">25K+</h3>
    //             <p className="text-gray-400">Tickets Booked</p>
    //           </div>

    //           <div>
    //             <h3 className="text-3xl font-bold text-cyan-400">200+</h3>
    //             <p className="text-gray-400">Routes</p>
    //           </div>

    //           <div>
    //             <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
    //             <p className="text-gray-400">Vendors</p>
    //           </div>

    //           <div>
    //             <h3 className="text-3xl font-bold text-cyan-400">10K+</h3>
    //             <p className="text-gray-400">Happy Travelers</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
     <section
      className="relative w-full h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfading background images */}
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
 
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
 
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Travel Anywhere,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Book in Seconds
          </span>
        </h1>
 
        <p className="mt-6 text-gray-200 text-lg max-w-xl">
          Book bus, train, launch, and plane tickets across Bangladesh with a
          fast, secure, and reliable booking experience.
        </p>
 
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold transition-colors">
            Explore Tickets
          </button>
          <button className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
 
        <div className="mt-10 flex gap-10 flex-wrap">
          {[
            ["25K+", "Tickets Booked"],
            ["200+", "Routes"],
            ["50+", "Vendors"],
            ["10K+", "Happy Travelers"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                {stat}
              </div>
              <div className="text-gray-300 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Slide indicators */}
      <div className="absolute bottom-6 right-8 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;