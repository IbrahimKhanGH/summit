import React from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Marketing Director",
      text: "Summit Media transformed our digital presence completely. Their strategic approach helped us achieve 3x growth in engagement.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      location: "CEO, TechFlow",
      text: "The team's innovative solutions and data-driven strategies exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Emma Wilson",
      location: "Brand Manager",
      text: "Outstanding creativity and professional execution. Summit Media has been crucial to our brand's growth.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-primary-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-accent/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-accent/10 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 lg:flex lg:items-center"
          >
            <div className="w-full">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  Let's Work Together
                </h2>
                <p className="text-gray-600 text-lg">
                  Transform your digital presence with Summit Media
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                />

                <select 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select Service</option>
                  <option>Social Media Management</option>
                  <option>Content Creation</option>
                  <option>Brand Development</option>
                  <option>Digital Marketing</option>
                </select>

                <textarea
                  placeholder="Tell us about your project"
                  rows="4"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 flex flex-col justify-start space-y-6"
          >
            <div className="sticky top-24">
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-1 text-primary-accent text-3xl mb-2">
                  ★★★★★
                </div>
                <h3 className="text-2xl font-bold text-primary">Trusted by Leading Brands</h3>
                <p className="text-gray-600">See what our clients say</p>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-primary font-semibold">{review.name}</h4>
                        <p className="text-gray-600 text-sm">{review.location}</p>
                      </div>
                      <div className="ml-auto text-primary-accent">★★★★★</div>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm; 