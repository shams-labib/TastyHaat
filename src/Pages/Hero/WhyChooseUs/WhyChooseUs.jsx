import { useEffect } from "react";
import { Utensils, Leaf, Truck, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: 1,
    icon: Utensils,
    title: "Delicious Food",
    desc: "Expert chefs craft mouth-watering dishes every day.",
    color: "#f97316", // orange
    animation: "float",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "100% fresh and organic ingredients guaranteed.",
    color: "#22c55e", // green
    animation: "wiggle",
  },
  {
    id: 3,
    icon: Truck,
    title: "Fast Delivery",
    desc: "Lightning-fast delivery while food stays hot.",
    color: "#3b82f6", // blue
    animation: "float",
  },
  {
    id: 4,
    icon: Star,
    title: "Top Rated",
    desc: "Rated 5 stars by thousands of food lovers.",
    color: "#facc15", // yellow
    animation: "wiggle",
  },
];

const iconAnimations = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
`;

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-base-100 dark:bg-gray-800">
      <style>{iconAnimations}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Why <span className="text-primary">Food Lovers</span> Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Taste, quality, and speed — all in one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="card bg-base-200 shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body items-center text-center">
                  <div
                    style={{
                      color: item.color,
                      animation: `${item.animation} 1s ease-in-out infinite`,
                    }}
                    className="mb-4"
                  >
                    <Icon size={46} strokeWidth={2} />
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
