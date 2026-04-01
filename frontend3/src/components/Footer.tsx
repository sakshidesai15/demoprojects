import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-500 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 group">
              <div className="bg-accent p-2 rounded-xl shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary tracking-tight uppercase">ImpactHope</span>
            </div>
            <p className="text-base text-slate-500 leading-relaxed">
              ImpactHope is a registered international non-governmental organization dedicated to restoring dignity and providing sustainable paths for recovery through structured humanitarian intervention.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all border border-slate-100 group/social shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <Icon className="w-5 h-5 transition-transform group-hover/social:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-10">Institutional</h4>
            <ul className="space-y-5 text-base">
              <li><Link to="/" className="hover:text-accent transition-all flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /> Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-all flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /> About Us</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-all flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /> Programs</Link></li>
              <li><Link to="/impact" className="hover:text-accent transition-all flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /> Impact</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-all flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" /> Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-10">Initiatives</h4>
            <ul className="space-y-5 text-base">
              <li><Link to="/programs/rehabilitation-through-jobs" className="hover:text-accent transition-all">Economic Rehabilitation</Link></li>
              <li><Link to="/programs/skill-development-training" className="hover:text-accent transition-all">Vocational Training</Link></li>
              <li><Link to="/programs/women-empowerment" className="hover:text-accent transition-all">Women Empowerment</Link></li>
              <li><Link to="/programs/safe-drinking-water" className="hover:text-accent transition-all">WASH Initiatives</Link></li>
              <li><Link to="/programs/educational-scholarships" className="hover:text-accent transition-all">Education Grants</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-10">Contact Info</h4>
            <ul className="space-y-8 text-base">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="leading-relaxed text-slate-500">123 Impact Way, Suite 500<br />New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span className="text-slate-500">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-slate-500">hq@impacthope.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© {currentYear} ImpactHope International. Registered NGO.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
