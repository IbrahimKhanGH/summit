import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form ref={form} className="space-y-8" onSubmit={handleSubmit}>
                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Business Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                    required
                  />

                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all text-gray-500"
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="content">Content Creation</option>
                  <option value="advertising">Paid Advertising</option>
                  <option value="website">Custom Website</option>
                  <option value="other">Other Services</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent transition-all"
                  required
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
};

export default ContactForm; 