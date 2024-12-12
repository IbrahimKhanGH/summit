import { motion } from 'framer-motion';
import ScrollButton from './ScrollButton';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-primary-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111827_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 py-12 flex-grow flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            className="relative flex justify-center items-center mb-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-primary-accent/20 rounded-full blur-3xl transform -translate-y-1/4" />
            <img 
              src="/summitlogo.png" 
              alt="Summit Media" 
              className="h-28 md:h-52 object-contain relative z-10"
            />
          </motion.div>
          
          <div className="-mt-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-primary tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-primary">Transform Your</span>{' '}
              <span className="text-primary-accent">Digital Presence</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Empowering businesses to thrive in a digital world
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col md:flex-row gap-6 justify-center mt-12"
            >
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-primary-accent/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative">Get Started</span>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border-2 border-primary bg-transparent hover:bg-primary-accent/10 text-primary rounded-full font-semibold transition-all duration-300 group"
              >
                Our Services
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Updated Scroll Button Container with improved z-index and pointer-events */}
      <div className="absolute bottom-0 w-full pb-12 z-30 pointer-events-auto">
        <ScrollButton targetId="services" />
      </div>

      {/* Decorative elements with lower z-index */}
      <div className="absolute top-0 left-0 w-full h-64 bg-primary-accent/10 transform -skew-y-6 z-10" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-primary-accent/10 transform skew-y-6 z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-accent/30 rounded-full filter blur-3xl z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-accent/30 rounded-full filter blur-3xl z-10" />
    </div>
  );
};

export default Hero; 