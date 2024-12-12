import { useState } from "react";
import { motion } from "framer-motion";
import ScrollButton from "./ScrollButton";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Social Media Strategy",
      description:
        "Data-driven strategies to maximize your social media presence. We analyze your audience, competitors, and market trends to create a customized roadmap for your success.",
      icon: "📊",
    },
    {
      title: "Content Creation",
      description:
        "Eye-catching, engaging content that tells your brand story. From photography and video to copywriting and graphics, we create content that resonates with your audience.",
      icon: "🎨",
    },
    {
      title: "Social Media Management",
      description:
        "Full-service management of your social platforms. We handle everything from posting and engagement to analytics and reporting.",
      icon: "📱",
    },
    {
      title: "Paid Advertising",
      description:
        "Strategic paid campaigns that drive results. We create and manage targeted advertising campaigns across multiple platforms.",
      icon: "📈",
    },
    {
      title: "Custom Wesbsites",
      description:
        "Beautiful, responsive websites built for conversion. We design and develop custom websites that look great on any device.",
      icon: "💻",
    },
    {
      title: "Brand Development",
      description:
        "Create a powerful and consistent brand identity. We help define your brand voice, visual identity, and positioning.",
      icon: "✨",
    },
    {
      title: "Specialized Services",
      description:
        "Tailored solutions for your unique needs. From email marketing to SEO optimization, we offer specialized services.",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-primary-accent/10 via-primary-light/30 to-white min-h-screen pt-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions tailored to elevate your brand's
            online presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                className="h-full bg-white rounded-2xl p-6 shadow-lg transition-all duration-300"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Gradient Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-primary-accent/5 opacity-0 transition-opacity duration-300"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                <div className="relative z-10">
                  {/* Icon with animation */}
                  <motion.div
                    className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-2xl mb-4"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title with slide effect */}
                  <motion.h3
                    className="text-xl font-bold text-primary mb-3"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description with fade effect */}
                  <motion.p
                    className="text-gray-600"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Learn More link with slide effect */}
                  <motion.div
                    className="mt-4 flex items-center text-primary-accent font-medium"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative h-32">
        {" "}
        <ScrollButton targetId="contact" />
      </div>
    </section>
  );
};

export default Services;
