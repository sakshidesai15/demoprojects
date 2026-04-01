import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-white/5 pt-32 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <Heart className="text-white w-7 h-7 fill-current" />
              </div>
              <span className="text-white font-extrabold text-2xl tracking-tighter">ImpactFlow</span>
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Transforming crisis into opportunity by empowering displaced communities through sustainable employment, education, and essential support.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Programs', 'Impact', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-blue-400 font-bold transition-all flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 mr-0 transition-all group-hover:w-3 group-hover:mr-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Programs</h4>
            <ul className="space-y-5">
              {['Women Employment', 'Skill Training', 'Scholarships', 'Safe Water'].map((item) => (
                <li key={item}>
                  <Link
                    to="/programs"
                    className="text-gray-500 hover:text-blue-400 font-bold transition-all flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 mr-0 transition-all group-hover:w-3 group-hover:mr-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-gray-500 font-medium">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-blue-500" />
                </div>
                <span className="pt-1">123 Impact Plaza, Imphal West, Manipur, India</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500 font-medium">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-blue-500" />
                </div>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-500 font-medium">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-blue-500" />
                </div>
                <span>hello@impactflow.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-sm font-bold">
            © {new Date().getFullYear()} ImpactFlow Platform. Crafted for Impact.
          </p>
          <div className="flex space-x-10 text-sm font-bold text-gray-600">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
