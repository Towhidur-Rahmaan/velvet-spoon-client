import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const data = [
  {
    name: "Ayaan Rahman",
    role: "Food Enthusiast",
    text: "The most luxurious café experience I’ve ever had. Every detail feels intentional.",
  },
  {
    name: "Sarah Khan",
    role: "Travel Blogger",
    text: "Every dish feels like a masterpiece. The ambiance is pure cinematic perfection.",
  },
  {
    name: "John Doe",
    role: "Chef & Critic",
    text: "Perfect ambiance, perfect taste, perfect service. A new benchmark for dining.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-20 py-24 md:py-40 px-6 md:px-16 bg-black border-t border-white/5 overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-400/80">
          Guest Stories
        </p>
        <h2 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
          Moments That
          <span className="block text-amber-300">Stay Forever</span>
        </h2>
      </div>

      {/* Swiper */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          className="pb-16"
        >
          {data.map((item, i) => (
            <SwiperSlide key={i} className="w-[320px]! md:w-105!">
              <div className="group relative rounded-3xl border border-white/10 bg-white/4 p-10 text-center backdrop-blur-xl transition duration-500 hover:scale-[1.03]">
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
                </div>

                {/* Quote */}
                <p className="text-gray-300 italic text-lg leading-8">
                  “{item.text}”
                </p>

                {/* Divider */}
                <div className="mx-auto mt-8 h-px w-16 bg-linear-to-r from-transparent via-amber-300/60 to-transparent" />

                {/* Name */}
                <h4 className="mt-6 text-amber-300 font-semibold text-lg">
                  {item.name}
                </h4>

                {/* Role */}
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-2">
                  {item.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
