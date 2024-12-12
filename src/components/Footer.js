import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Social Media Strategy',
    'Content Creation',
    'Social Media Management',
    'Paid Advertising',
    'Custom Websites',
    'Brand Development',
    'Specialized Services'
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/summitagency' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Facebook', href: 'https://facebook.com' }
  ];

  return (
    <footer className="bg-primary-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/summitlogo.png" alt="Summit Media" className="h-12" />
            <p className="text-gray-600">
              Empowering businesses to thrive in a digital world
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-600 hover:text-primary-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="mailto:hello@summitmedia.com" className="hover:text-primary-accent transition-colors">
                  hello@summitmedia.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} Summit Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 