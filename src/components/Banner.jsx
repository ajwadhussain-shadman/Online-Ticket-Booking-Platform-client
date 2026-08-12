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
   <section
  className="relative h-[600px] w-full overflow-hidden"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
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

  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25 dark:from-black/80 dark:via-black/60 dark:to-black/30" />

  <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-8 md:px-16">
    <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
      Travel Anywhere,
      <br />
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Book in Seconds
      </span>
    </h1>

    <p className="mt-6 max-w-xl text-lg text-gray-200">
      Book bus, train, launch, and plane tickets across Bangladesh with a
      fast, secure, and reliable booking experience.
    </p>

    <div className="mt-8 flex gap-4">
      <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-cyan-300">
        Explore Tickets
      </button>

      <button className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
        Learn More
      </button>
    </div>

    <div className="mt-10 flex flex-wrap gap-10">
      {[
        ["25K+", "Tickets Booked"],
        ["200+", "Routes"],
        ["50+", "Vendors"],
        ["10K+", "Happy Travelers"],
      ].map(([stat, label]) => (
        <div key={label}>
          <div className="text-2xl font-bold text-cyan-400 md:text-3xl">
            {stat}
          </div>

          <div className="text-sm text-gray-300">
            {label}
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="absolute bottom-6 right-8 z-10 flex gap-2">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => goTo(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={`h-2 rounded-full transition-all duration-300 ${
          i === index
            ? "w-8 bg-cyan-400"
            : "w-2 bg-white/40 hover:bg-white/70"
        }`}
      />
    ))}
  </div>
</section>
  );
};

export default Banner;