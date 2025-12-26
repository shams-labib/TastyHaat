import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#FFF8F6] py-20 my-[60px] container mx-auto rounded-xl dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text Content */}
        <div className="space-y-6 max-w-xl" data-aos="fade-right">
          <h1 className="text-5xl font-bold leading-[1.2]">
            <span className="text-red-600">Fast, Fresh</span>
            <br />
            <span className="text-red-600">& Right</span>{" "}
            <span className="text-gray-900 dark:text-white">To Your Door</span>
          </h1>

          <p
            className="text-gray-600 dark:text-gray-300 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Order dishes from favorite restaurants near you.
          </p>

          <div
            className="flex w-full max-w-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <input
              type="text"
              className="input input-bordered rounded-r-none w-full outline-none"
              placeholder="Enter your location"
            />
            <button
              className="btn bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg
              transition-all duration-500 ease-in-out shadow-md hover:shadow-lg"
            >
              Find Food
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src={"https://i.ibb.co.com/twt2tWcr/image.png"}
            alt="food app"
            className="w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
