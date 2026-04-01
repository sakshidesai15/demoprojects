import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-xl shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary tracking-tight uppercase">ImpactHope</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-slate-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2.5 px-6">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive(link.path) ? "text-accent bg-slate-50 rounded" : "text-slate-600 hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-accent text-white py-4 rounded font-bold text-sm uppercase tracking-widest text-center shadow-lg shadow-blue-900/20"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
