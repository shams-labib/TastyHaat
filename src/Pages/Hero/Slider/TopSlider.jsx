import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const sliderImages = [
  {
    img: "https://i.ibb.co.com/ZpwLvz6X/360-F-187860162-h-WCup6-TWAb-Kw-Oz-S3s-Kxkn2-ZDZm-Gx-ZA47.jpg",
    title: "Delicious Food",
    subtitle: "Get your favorite meals delivered fast",
  },
  {
    img: "https://i.ibb.co.com/nMk9JXF7/image.png",
    title: "Fast Delivery",
    subtitle: "We reach your door in minutes",
  },
  {
    img: "https://i.ibb.co.com/tw4NK5LF/image.png",
    title: "Fresh & Hot",
    subtitle: "Your order comes with love ❤️",
  },
];

const TopSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto">
      <div
        className="relative w-full h-62.5 md:h-105 overflow-hidden my-15 md:rounded-xl"
        data-aos="fade-up"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          loop={true}
          speed={900}
          className="w-full h-full"
        >
          {sliderImages.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full relative">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt="slider"
                  data-aos="zoom-in"
                />

                <div
                  className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                    {item.title}
                  </h2>
                  <p className="text-lg mb-4">{item.subtitle}</p>

                  <Link to="/all-menu" className="btn bg-red-600 border-none shadow-none text-white hover:bg-red-700 px-6">
                    Order Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSlider;
