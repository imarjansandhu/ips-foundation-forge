import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Programs", path: "/programs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IPS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Indian Public School</h3>
                <p className="text-white/80 text-sm">Building Foundations for a Bright Future</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Nurturing young minds from Nursery to Grade 5 with PSEB-affiliated 
              quality education in a safe, caring environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">
                  Near Peer Bhem Shah Ji<br />
                  Khera Gajju, Punjab 140602
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div className="text-white/90 text-sm">
                  <a href="tel:+919417148163" className="hover:text-white transition-smooth">
                    +91 94171 48163
                  </a>
                  <br />
                  <a href="tel:+917340739163" className="hover:text-white transition-smooth">
                    +91 73407 39163
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:sandhu.jag11@gmail.com" 
                  className="text-white/90 text-sm hover:text-white transition-smooth"
                >
                  sandhu.jag11@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">School Hours</h4>
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
              <div className="text-white/90 text-sm">
                <p><strong>Monday - Saturday:</strong><br />7:00 AM - 2:00 PM</p>
                <p className="mt-2"><strong>Sunday:</strong><br />Closed</p>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-white/90 text-sm mb-2">Visit our website:</p>
              <a 
                href="https://indianpublicschool.github.io/ips" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-smooth text-sm underline"
              >
                indianpublicschool.github.io/ips
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
            <p>© {currentYear} Indian Public School, Gajju Khera. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">PSEB Affiliated | Quality Education Since Inception</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;