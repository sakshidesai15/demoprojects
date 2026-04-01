/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Droplets, 
  GraduationCap, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Send,
  Share2,
  CheckCircle2,
  Globe2
} from "lucide-react";

// --- Data ---

const PROGRAMS_DATA = [
  {
    id: "rehabilitation-through-jobs",
    title: "Rehabilitation through Jobs",
    shortText: "We connect displaced individuals with employment opportunities, helping them regain financial independence and rebuild their confidence. Our network of partner employers ensures fair wages and supportive environments.",
    detailedText: "Our job rehabilitation program is designed to bridge the gap between crisis and stability. We work closely with local businesses to identify roles that are suitable for individuals who have been displaced by violence. Beyond just placement, we provide ongoing support to both the employee and the employer to ensure a successful long-term integration. This program has proven to be a cornerstone of our mission, as financial independence is often the first step toward emotional and social recovery. We also provide initial workplace orientation and cultural sensitivity training for employers to foster a truly inclusive environment.",
    impact: "Over 400 individuals successfully placed in long-term employment within the last year, with a 92% retention rate after 12 months.",
    benefits: [
      "Immediate financial independence and stability", 
      "Restored self-worth and professional dignity", 
      "Community reintegration through social workplace interaction", 
      "Long-term career path development and mentorship",
      "Access to employer-sponsored health and wellness benefits"
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "skill-development-training",
    title: "Skill Development Training",
    shortText: "Our programs provide hands-on training that equips individuals with real-world skills for sustainable livelihoods. From digital literacy to technical trades, we prepare them for the modern workforce.",
    detailedText: "In a rapidly changing world, having relevant skills is essential for survival and growth. Our skill development centers offer a wide range of courses, including computer literacy, vocational trades, and soft skills training. We focus on high-demand sectors to ensure that our graduates have the best possible chance of finding meaningful work. Each course is designed to be practical and hands-on, allowing participants to build a portfolio of work that they can show to potential employers. We also partner with industry experts to keep our curriculum updated with the latest technological trends and market needs.",
    impact: "85% of our graduates find employment or start their own business within six months of completion, significantly increasing household income.",
    benefits: [
      "Marketable skills in high-demand technical sectors", 
      "Increased earning potential and economic mobility", 
      "Personalized career guidance and job search support", 
      "Recognized industry certification upon completion",
      "Access to a lifelong alumni network for peer support"
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment & Livelihood",
    shortText: "Empowering women, particularly widows, through sustainable employment in manufacturing essential hygiene products like sanitary pads and wipes.",
    detailedText: "Women are often the most affected by displacement and violence, yet they are also the most powerful agents of change. Our program now focuses on providing dignified employment to widows and vulnerable women by setting up local manufacturing units for sanitary pads and wipes. We provide comprehensive training in production, quality control, and business management. This not only creates stable income but also addresses critical hygiene needs within displaced communities, allowing these women to become financially independent leaders. Our program also includes workshops on financial literacy, legal rights, and health awareness.",
    impact: "Supported over 500 women through our manufacturing units, producing 100,000+ hygiene kits and benefiting over 2,500 family members.",
    benefits: [
      "Economic autonomy and dignified income for widows", 
      "Leadership skills and community representation", 
      "Production of essential hygiene products for relief camps", 
      "Improved family stability and child well-being",
      "Access to micro-finance and business management tools"
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "safe-drinking-water",
    title: "Safe Drinking Water",
    shortText: "Access to clean water is essential. We ensure safe drinking water in relief camps to improve health and dignity. Our infrastructure projects provide long-term solutions for water scarcity.",
    detailedText: "Water is a basic human right, yet it is often the first thing lost in a crisis. Our water projects range from emergency distribution in relief camps to the construction of permanent wells and filtration systems in rebuilding communities. We emphasize community ownership and training to ensure that these systems are maintained for years to come. Clean water not only prevents disease but also restores dignity and allows families to focus on rebuilding their lives rather than just surviving. We also implement hygiene education programs to maximize the health benefits of clean water access.",
    impact: "Provided clean water access to over 15,000 individuals, reducing water-borne illnesses by 70% in targeted areas.",
    benefits: [
      "Immediate improvement in public health and sanitation", 
      "Significant reduction in preventable disease transmission", 
      "Time savings for families, especially women and children", 
      "Enhanced community resilience to environmental stress",
      "Sustainable infrastructure managed by local committees"
    ],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "educational-scholarships",
    title: "Educational Scholarships (Manipur Crisis)",
    shortText: "Providing dedicated educational scholarships and holistic support to students affected by the Manipur violence, ensuring their future remains bright.",
    detailedText: "Education is the most powerful tool we have to break the cycle of violence and poverty. Our scholarship program has expanded to specifically support children and youth affected by the Manipur crisis. We provide comprehensive support that goes beyond just tuition; we cover books, uniforms, and boarding costs, while providing trauma-informed counseling to help students overcome the trauma of displacement. By keeping these students in school, we are protecting their childhoods and ensuring that the crisis does not halt their academic journey. We also facilitate parent-teacher meetings to ensure a holistic support system for every student.",
    impact: "Currently supporting 550 students, including 200 victims of the Manipur violence, with a 98% school retention rate.",
    benefits: [
      "Uninterrupted learning in safe, supportive environments", 
      "Trauma-informed support and psychological care", 
      "Full coverage of tuition, materials, and boarding", 
      "Brighter futures for the next generation of leaders",
      "Reduced risk of child labor and exploitation"
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
  }
];

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SocialShare = ({ title, url }: { title: string, url?: string }) => {
  const shareUrl = url || window.location.href;
  
  const handleShare = (platform: string) => {
    const text = `Check out this amazing work by Hope & Rebuild NGO: ${title}`;
    let link = "";
    
    switch (platform) {
      case "twitter":
        link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        link = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({ title, text, url: shareUrl });
          return;
        }
    }
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Share impact:</span>
      <div className="flex gap-2">
        <button onClick={() => handleShare("twitter")} className="p-2 bg-slate-50 rounded-full hover:bg-primary hover:text-white transition-all text-slate-400">
          <Twitter className="w-4 h-4" />
        </button>
        <button onClick={() => handleShare("facebook")} className="p-2 bg-slate-50 rounded-full hover:bg-primary hover:text-white transition-all text-slate-400">
          <Facebook className="w-4 h-4" />
        </button>
        <button onClick={() => handleShare("linkedin")} className="p-2 bg-slate-50 rounded-full hover:bg-primary hover:text-white transition-all text-slate-400">
          <Linkedin className="w-4 h-4" />
        </button>
        <button onClick={() => handleShare("native")} className="p-2 bg-slate-50 rounded-full hover:bg-primary hover:text-white transition-all text-slate-400 lg:hidden">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// --- Pages ---

const HomePage = () => (
  <div className="flex flex-col">
    {/* Hero Section - Split Layout */}
    <section className="relative min-h-[85vh] flex items-center bg-beige-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-8 text-left"
          >
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Humanitarian NGO</span>
            <h1 className="text-5xl md:text-7xl text-primary leading-[1.1] font-display font-black tracking-tighter">
              Restoring Hope.<br />Rebuilding Lives.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light max-w-xl">
              We stand with communities affected by violence, providing the tools needed for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-accent/20 active:scale-95 text-center">
                Support Now
              </Link>
              <Link to="/about" className="bg-slate-50 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 text-center">
                Our Story
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] rotate-3 scale-105" />
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                alt="Humanitarian Work" 
                className="relative z-10 w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
    {/* Current Focus - Spotlight Section */}
    <section className="py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-[0.4em]">Active Missions</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tighter">Current Focus</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              We are currently prioritizing two critical initiatives to address urgent humanitarian needs in our region.
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-beige-soft p-10 rounded-[2.5rem] space-y-6 border border-slate-50">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <GraduationCap className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Manipur Crisis Scholarships</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Dedicated support for students whose education was disrupted by the Manipur violence, covering all costs including boarding.
              </p>
              <Link to="/programs/educational-scholarships" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-green-soft p-10 rounded-[2.5rem] space-y-6 border border-slate-50">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Briefcase className="text-accent w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Widows' Livelihood Units</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Empowering widows through employment in manufacturing essential hygiene products like sanitary pads and wipes.
              </p>
              <Link to="/programs/women-empowerment" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Program Sections - Full Width Flowing Layout */}
    {PROGRAMS_DATA.map((program, index) => (
      <section 
        key={program.id} 
        className={`py-48 flex items-center overflow-hidden ${index % 2 === 0 ? 'bg-green-soft' : 'bg-beige-soft'}`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className={`flex flex-col lg:flex-row items-center gap-20 md:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className={`absolute -inset-4 bg-primary/5 rounded-[3rem] ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} scale-105`} />
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="relative z-10 w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-10"
            >
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Program 0{index + 1}</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
                {program.title}
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                {program.shortText}
              </p>
              <div className="pt-6">
                <Link 
                  to={`/programs/${program.id}`} 
                  className="inline-flex items-center gap-4 text-lg font-bold text-primary group"
                >
                  <span className="pb-1 border-b-2 border-secondary/20 group-hover:border-secondary transition-all">Explore detailed impact</span>
                  <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* Partners Section - No Cards */}
    <section className="py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Global Partnerships</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Collaborating with world-class organizations to scale our humanitarian efforts.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-center gap-3">
            <Globe2 className="w-10 h-10" />
            <span className="text-3xl font-bold tracking-tighter">UNICEF</span>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10" />
            <span className="text-3xl font-bold tracking-tighter">RED CROSS</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-10 h-10" />
            <span className="text-3xl font-bold tracking-tighter">OXFAM</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-10 h-10" />
            <span className="text-3xl font-bold tracking-tighter">SAVE THE CHILDREN</span>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials - Flowing Layout */}
    <section className="py-32 bg-green-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-primary">Voices of Resilience</h2>
        </div>
        
        <div className="space-y-32">
          {[
            { 
              quote: "The sanitary pad manufacturing unit gave me more than just a job; it gave me my dignity back as a widow. I can now lead my own team and provide for my children.", 
              author: "Amina K.", 
              role: "Production Unit Lead",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
            },
            { 
              quote: "When the violence in Manipur disrupted my son's education, we lost all hope. This scholarship was a lifeline, allowing him to continue his medical studies in a safe environment.", 
              author: "Samuel M.", 
              role: "Parent of Manipur Scholarship Recipient",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 shadow-2xl border-4 border-white">
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-3xl md:text-4xl text-slate-700 italic font-light leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <p className="text-2xl font-bold text-primary">{t.author}</p>
                  <p className="text-lg text-secondary font-medium uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-48 bg-accent text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1559027615-cd9d7a915490?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter">Join the Movement.</h2>
        <p className="text-2xl md:text-3xl text-white/80 mb-16 font-light leading-relaxed">
          We believe that together, we can rebuild a world where every life is valued and every community is resilient.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <Link to="/contact" className="bg-white text-accent px-16 py-6 rounded-full font-bold text-2xl hover:bg-slate-100 transition-all shadow-2xl">
            Donate Now
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white px-16 py-6 rounded-full font-bold text-2xl hover:bg-white/10 transition-all">
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="flex flex-col">
    {/* Page Header */}
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter"
        >
          Our Story
        </motion.h1>
        <p className="text-xl text-white/70 font-light tracking-widest uppercase">A Journey from Crisis to Hope</p>
      </div>
    </section>

    {/* Main Narrative */}
    <section className="py-48 bg-beige-soft">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="space-y-10 text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              Thousands of families displaced by violence struggle to rebuild their lives. Without access to jobs, education, or basic needs, survival becomes a daily challenge. Our mission is to bridge this gap and provide a path toward stability and dignity.
            </p>
            <p>
              Founded on the belief that every individual deserves a second chance, Hope & Rebuild NGO was born out of a direct response to the growing humanitarian crises in our region. We saw that while immediate relief was vital, long-term recovery required a more structured, sustainable approach.
            </p>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video relative group">
            <img 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" 
              alt="Community Work" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.4em] mb-2">Our Field Work</p>
              <p className="text-2xl font-light">Building foundations for a better tomorrow.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* History Timeline - Flowing Layout */}
    <section className="py-48 bg-green-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-40">
          <h2 className="text-5xl md:text-7xl font-display font-black text-primary mb-6 tracking-tighter">Our History</h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">A decade of commitment to humanitarian resilience.</p>
        </div>
        
        <div className="space-y-48">
          {[
            { year: "2015", title: "The Beginning", desc: "Hope & Rebuild was founded by a small group of volunteers in response to a regional displacement crisis. We started with a single relief camp, providing basic necessities to 50 families.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" },
            { year: "2018", title: "Expanding Reach", desc: "We launched our first vocational training center, helping 100 individuals find employment in its first year. This marked our shift from immediate relief to long-term rehabilitation.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" },
            { year: "2021", title: "Global Recognition", desc: "Received international awards for our innovative approach to community-led rehabilitation. Our model was adopted by several global NGOs as a best practice for sustainable aid.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" },
            { year: "2025", title: "A New Chapter", desc: "Expanded our operations to four major regions, impacting over 1,000 lives annually. We are now focused on scaling our digital literacy and women's empowerment programs.", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" },
            { year: "2026", title: "Crisis Response", desc: "Launched dedicated scholarship funds for Manipur violence victims and established our first women-led manufacturing units for essential hygiene products, providing livelihoods to hundreds of widows.", image: "https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=2070&auto=format&fit=crop" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-20 md:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 text-9xl font-black text-slate-50 z-0">{item.year}</div>
                  <img src={item.image} alt={item.title} className="relative z-10 w-full aspect-video object-cover rounded-[3rem] shadow-2xl" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-xl font-bold text-secondary tracking-widest uppercase">{item.year}</span>
                <h4 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">{item.title}</h4>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>    {/* Vision, Mission, Values - Flowing Layout */}
    <section className="py-48 bg-beige-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-64">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-20 md:gap-32"
          >
            <div className="w-full md:w-1/2">
              <div className="w-20 h-20 bg-secondary/10 rounded-[2rem] flex items-center justify-center mb-10">
                <Globe2 className="text-secondary w-10 h-10" />
              </div>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8">Our Vision</h3>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                A world where every community displaced by violence has the resources, skills, and support needed to rebuild a life of dignity.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl" />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-20 md:gap-32"
          >
            <div className="w-full md:w-1/2">
              <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-10">
                <Send className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8">Our Mission</h3>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                To provide sustainable humanitarian impact through structured programs in job rehabilitation and community empowerment.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl" />
            </div>
          </motion.div>

          {/* Values */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-16 md:gap-32"
          >
            <div className="w-full md:w-1/2">
              <div className="w-24 h-24 bg-accent/10 rounded-[2rem] flex items-center justify-center mb-10">
                <Heart className="text-accent w-12 h-12" />
              </div>
              <h3 className="text-5xl md:text-7xl font-bold text-primary mb-8">Our Values</h3>
              <ul className="space-y-8">
                {[
                  { title: "Dignity for all", desc: "Every individual deserves respect and the opportunity to thrive." },
                  { title: "Sustainable impact", desc: "We build solutions that last long after we leave." },
                  { title: "Community ownership", desc: "Local leaders drive the change they want to see." },
                  { title: "Radical transparency", desc: "We are accountable to our donors and the communities we serve." }
                ].map((v, i) => (
                  <li key={i} className="flex items-start gap-6">
                    <CheckCircle2 className="text-secondary w-8 h-8 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">{v.title}</h4>
                      <p className="text-lg text-slate-500">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Our Team Section - Flowing Layout */}
    <section className="py-32 bg-green-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-bold text-primary mb-8">Our Leadership</h2>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-light">The dedicated individuals driving our mission forward with passion and expertise.</p>
        </div>
        
        <div className="space-y-48">
          {[
            { name: "Sarah Jenkins", role: "Executive Director", bio: "Sarah has over 20 years of experience in international humanitarian aid, leading major relief operations across three continents.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
            { name: "David Chen", role: "Head of Programs", bio: "David specializes in sustainable development and has designed our core vocational training frameworks from the ground up.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
            { name: "Amara Okoro", role: "Community Outreach", bio: "Amara bridges the gap between our organization and local leaders, ensuring our programs are culturally sensitive and community-led.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
          ].map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <img src={member.image} alt={member.name} className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl" />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h4 className="text-4xl md:text-6xl font-bold text-primary leading-tight">{member.name}</h4>
                <p className="text-2xl font-bold text-secondary uppercase tracking-widest">{member.role}</p>
                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">{member.bio}</p>
                <div className="flex gap-8 pt-4">
                  <Twitter className="w-8 h-8 text-primary/30 hover:text-primary transition-colors cursor-pointer" />
                  <Linkedin className="w-8 h-8 text-primary/30 hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Financial Transparency - Flowing Layout */}
    <section className="py-48 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Where Your Money Goes</h2>
            <p className="text-2xl md:text-3xl text-white/60 leading-relaxed font-light">
              We take financial stewardship seriously. 90% of every dollar donated goes directly to our field programs, ensuring maximum impact for the communities we serve.
            </p>
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Field Programs</span>
                  <span className="text-3xl font-black text-secondary">90%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-secondary"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Fundraising</span>
                  <span className="text-3xl font-black text-accent">6%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "6%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Administration</span>
                  <span className="text-3xl font-black text-white/40">4%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "4%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-white/40"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem]">
              <div className="absolute inset-0 rounded-full border-[30px] border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-7xl md:text-9xl font-black text-secondary">90%</p>
                  <p className="text-xl md:text-2xl text-white/40 uppercase tracking-[0.3em] font-bold">Direct Impact</p>
                </div>
              </div>
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="fill-none stroke-secondary stroke-[30px]"
                  strokeDasharray="283% 100%"
                  strokeDashoffset="0"
                  style={{ strokeDasharray: "calc(2 * 3.14159 * 45%)", strokeDashoffset: "calc(2 * 3.14159 * 45% * (1 - 0.9))" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ProgramsPage = () => (
  <div className="py-48 bg-beige-soft">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-40">
        <h1 className="text-5xl md:text-7xl font-display font-black text-primary mb-6 tracking-tighter">What We Do</h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
          Our structured programs are designed to address the root causes of instability.
        </p>
      </div>

      <div className="space-y-64">
        {PROGRAMS_DATA.map((program, index) => (
          <motion.div 
            key={program.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row items-center gap-20 md:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className={`absolute -inset-4 bg-primary/5 rounded-[3rem] ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} scale-105`} />
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="relative z-10 w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-10">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Program 0{index + 1}</span>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight">{program.title}</h3>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                {program.shortText}
              </p>
              <div className="pt-6">
                <Link 
                  to={`/programs/${program.id}`} 
                  className="inline-flex items-center gap-4 text-lg font-bold text-primary group"
                >
                  <span className="pb-1 border-b-2 border-secondary/20 group-hover:border-secondary transition-all">Full program details</span>
                  <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How You Can Help Section - Flowing Layout */}
      <section className="mt-48 py-48 bg-green-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-40">
            <h2 className="text-5xl md:text-7xl font-display font-black text-primary mb-8 tracking-tighter">How You Can Help</h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              Our programs depend on the generosity and commitment of people like you.
            </p>
          </div>
          
          <div className="space-y-64">
            {[
              { title: "Donate", desc: "Financial contributions directly fund our programs and infrastructure. Your support allows us to provide immediate relief and long-term rehabilitation.", icon: Heart, color: "bg-accent/10 text-accent", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" },
              { title: "Volunteer", desc: "Share your skills and time to support our field operations. We are always looking for passionate individuals to help with education and community building.", icon: Users, color: "bg-secondary/10 text-secondary", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" },
              { title: "Partner", desc: "Organizations can partner with us for larger-scale impact. We collaborate with corporations and other NGOs to scale our humanitarian efforts globally.", icon: Globe2, color: "bg-primary/10 text-primary", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" }
            ].map((way, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-20 md:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-primary/5 rounded-[3rem] ${i % 2 === 0 ? '-rotate-2' : 'rotate-2'} scale-105`} />
                    <img src={way.image} alt={way.title} className="relative z-10 w-full aspect-video object-cover rounded-[3rem] shadow-2xl" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-10">
                  <div className={`w-20 h-20 ${way.color} rounded-[2rem] flex items-center justify-center shadow-xl`}>
                    <way.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">{way.title}</h4>
                  <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">{way.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-48 text-center">
            <Link to="/contact" className="inline-block bg-primary text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-slate-800 transition-all shadow-2xl">
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const ProgramDetailPage = () => {
  const { id } = useParams();
  const program = PROGRAMS_DATA.find(p => p.id === id);

  if (!program) return (
    <div className="py-48 text-center bg-beige-soft">
      <h1 className="text-6xl font-black text-primary mb-8">Program not found</h1>
      <Link to="/programs" className="text-secondary text-2xl font-bold hover:underline">Back to Programs</Link>
    </div>
  );

  return (
    <div className="flex flex-col bg-beige-soft">
      {/* Hero Header */}
      <section className="py-32 md:py-48 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/programs" className="inline-flex items-center gap-4 text-white/50 hover:text-white transition-colors mb-12 text-xl font-bold">
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to all programs
          </Link>
          <h1 className="text-6xl md:text-9xl font-black leading-tight tracking-tighter mb-8">{program.title}</h1>
          <p className="text-2xl md:text-3xl text-white/70 font-light max-w-3xl leading-relaxed">
            {program.shortText}
          </p>
        </div>
      </section>

      {/* Detailed Overview - Flowing */}
      <section className="py-32 bg-beige-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="w-full lg:w-2/3 space-y-12">
              <h3 className="text-5xl font-bold text-primary">The Challenge & Solution</h3>
              <p className="text-2xl text-slate-600 leading-relaxed font-light">
                {program.detailedText}
              </p>
              
              <div className="bg-beige-soft p-16 rounded-[3rem] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                <h4 className="text-2xl font-bold text-primary mb-6 uppercase tracking-widest">Direct Impact</h4>
                <p className="text-3xl text-slate-700 italic font-light leading-relaxed">
                  "{program.impact}"
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 space-y-12 sticky top-32">
              <div className="space-y-8">
                <h4 className="text-3xl font-bold text-primary">Key Benefits</h4>
                <ul className="space-y-6">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4 text-xl text-slate-600">
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-accent text-white p-12 rounded-[3rem] shadow-2xl shadow-accent/20">
                <h4 className="text-3xl font-bold mb-6">Support this Program</h4>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">Your contribution specifically helps us expand the reach of {program.title.toLowerCase()} to more families in need.</p>
                <Link to="/contact" className="block w-full bg-white text-accent py-5 rounded-2xl font-bold text-xl text-center hover:bg-slate-100 transition-all">
                  Donate Now
                </Link>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <SocialShare title={program.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="py-32 bg-green-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[21/9]">
            <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ImpactPage = () => (
  <div className="flex flex-col bg-beige-soft">
    {/* Hero Section - Editorial Style */}
    <section className="relative min-h-[70vh] flex items-center justify-center bg-secondary overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-20 scale-110" 
          alt="Impact Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-xs font-bold text-white/60 uppercase tracking-[0.5em]">Our Collective Footprint</span>
          <h1 className="text-6xl md:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter">
            THE MEASURE<br />OF HOPE.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Behind every statistic is a story of resilience, a family rebuilt, and a future reclaimed from the shadows of crisis.
          </p>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>

    {/* Key Metrics - Technical Dashboard Style */}
    <section className="py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {[
            { value: "1,542", label: "Lives Restored", sub: "Direct beneficiaries in 2025-26", trend: "+12% from last year" },
            { value: "550", label: "Students Funded", sub: "Manipur Crisis Scholarships", trend: "Goal: 1,000 students" },
            { value: "12", label: "Livelihood Units", sub: "Widow-led manufacturing centers", trend: "3 new units in Q1" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`md:px-12 space-y-4 ${i !== 0 ? 'md:border-l border-slate-100' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Metric 0{i+1}</span>
                <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{stat.trend}</span>
              </div>
              <div className="text-6xl font-mono font-black text-primary tracking-tighter">
                {stat.value}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">{stat.label}</h3>
                <p className="text-sm text-slate-400 font-light">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Live Progress Tracker - Manipur Crisis */}
    <section className="py-32 bg-beige-soft">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 space-y-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Urgent Mission</span>
              <h2 className="text-4xl font-display font-bold text-primary tracking-tight">Manipur Scholarship Fund</h2>
              <p className="text-slate-500 font-light max-w-md">Providing boarding, education, and trauma care for students displaced by violence.</p>
            </div>
            <div className="text-right">
              <span className="text-5xl font-mono font-black text-primary">55%</span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Funding Goal Reached</p>
            </div>
          </div>
          
          <div className="relative h-5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "55%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "circOut" }}
              className="absolute inset-y-0 left-0 bg-accent rounded-full shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-4">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Target</p>
              <p className="text-2xl font-bold text-primary">$250,000</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Raised</p>
              <p className="text-2xl font-bold text-secondary">$137,500</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Students</p>
              <p className="text-2xl font-bold text-primary">550/1000</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Days Left</p>
              <p className="text-2xl font-bold text-accent">42 Days</p>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/contact" className="block w-full bg-primary text-white py-6 rounded-2xl font-bold text-2xl text-center hover:bg-slate-800 transition-all shadow-2xl shadow-primary/20 active:scale-[0.98]">
              Contribute to this Fund
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Transformation Stories - Warm Organic Style */}
    <section className="py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Case Studies</span>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-primary tracking-tighter leading-none">Human<br />Transformation</h2>
          </div>
          <p className="text-xl text-slate-400 font-light max-w-xs leading-relaxed">
            Moving beyond immediate relief to sustainable rehabilitation and restored dignity.
          </p>
        </div>

        <div className="space-y-80">
          {[
            {
              title: "Amina's Leadership",
              role: "Widow & Production Lead",
              text: "After losing her husband and home, Amina found a new purpose in our women-led manufacturing unit. She now leads a team of 10 widows making essential sanitary pads and wipes, earning a dignified livelihood while supporting her children's education.",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
              quote: "I am no longer a victim of my circumstances. I am a provider for my community."
            },
            {
              title: "David's Second Chance",
              role: "Manipur Scholarship Recipient",
              text: "Young David's education was abruptly halted by the violence in Manipur. Through our dedicated scholarship fund, he is now back in a safe classroom, excelling in his studies and dreaming of becoming a doctor to serve his community.",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
              quote: "Hope & Rebuild didn't just pay my fees; they gave me my future back."
            }
          ].map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-24 md:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-8 bg-beige-soft rounded-[4rem] -rotate-2 scale-105" />
                  <img 
                    src={story.image} 
                    className="relative z-10 w-full aspect-[4/5] object-cover rounded-[3.5rem] shadow-2xl" 
                    alt={story.title}
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-12 -right-12 z-20 bg-accent text-white p-12 rounded-[3rem] max-w-sm shadow-2xl hidden md:block"
                  >
                    <p className="text-xl italic font-light leading-relaxed">"{story.quote}"</p>
                  </motion.div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-12">
                <div className="space-y-6">
                  <span className="text-sm font-bold text-secondary uppercase tracking-[0.3em]">{story.role}</span>
                  <h3 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight tracking-tighter">{story.title}</h3>
                </div>
                <p className="text-2xl text-slate-500 leading-relaxed font-light">
                  {story.text}
                </p>
                <div className="pt-8">
                  <Link to="/contact" className="inline-flex items-center gap-6 text-xl font-bold text-primary group">
                    <span className="pb-1 border-b-2 border-secondary/20 group-hover:border-secondary transition-all">Support stories like this</span>
                    <ArrowRight className="w-6 h-6 text-secondary group-hover:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Financial Stewardship - Data Visualization */}
    <section className="py-48 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="w-full lg:w-1/2 space-y-16">
            <div className="space-y-6">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Financial Integrity</span>
              <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85]">WHERE YOUR<br />MONEY GOES.</h2>
            </div>
            <p className="text-2xl md:text-3xl text-white/40 leading-relaxed font-light">
              We take financial stewardship seriously. 90% of every dollar donated goes directly to our field programs, ensuring maximum impact.
            </p>
            
            <div className="space-y-14 pt-8">
              {[
                { label: "Field Programs", value: 90, color: "bg-secondary" },
                { label: "Fundraising", value: 6, color: "bg-accent" },
                { label: "Administration", value: 4, color: "bg-white/20" }
              ].map((item, i) => (
                <div key={i} className="space-y-5">
                  <div className="flex justify-between items-end">
                    <span className="text-2xl font-bold">{item.label}</span>
                    <span className="text-5xl font-mono font-black text-secondary">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-96 h-96 md:w-[40rem] md:h-[40rem]">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 scale-110" />
              <div className="absolute inset-0 rounded-full border border-white/5 scale-125" />
              
              <div className="absolute inset-0 rounded-full border-[50px] border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-9xl md:text-[14rem] font-black text-secondary leading-none">90</p>
                  <p className="text-2xl md:text-3xl text-white/40 uppercase tracking-[0.4em] font-bold">Percent Direct</p>
                </div>
              </div>
              
              <svg className="w-full h-full -rotate-90">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="fill-none stroke-secondary stroke-[50px]"
                  initial={{ strokeDashoffset: "calc(2 * 3.14159 * 45%)" }}
                  whileInView={{ strokeDashoffset: "calc(2 * 3.14159 * 45% * (1 - 0.9))" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "circOut" }}
                  style={{ strokeDasharray: "calc(2 * 3.14159 * 45%)" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How We Measure Impact - Bento Grid Style */}
    <section className="py-48 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Accountability</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-primary tracking-tighter">Measuring Change</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            We use a multi-dimensional approach to ensure our programs create lasting, positive shifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-beige-soft p-12 rounded-[3rem] space-y-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <CheckCircle2 className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-primary">Rigorous Field Audits</h3>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Our team conducts monthly on-site visits to every manufacturing unit and scholarship school. We don't just look at spreadsheets; we talk to the people on the ground to understand the nuances of their progress.
            </p>
          </div>
          <div className="bg-primary text-white p-12 rounded-[3rem] space-y-8 flex flex-col justify-end">
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-lg text-white/60 font-light">School retention rate for our scholarship recipients across all regions.</p>
          </div>
          <div className="bg-green-soft p-12 rounded-[3rem] space-y-8">
            <h3 className="text-3xl font-bold text-primary">Income Tracking</h3>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              We monitor the household income of our livelihood program graduates for 24 months post-graduation.
            </p>
          </div>
          <div className="md:col-span-2 bg-slate-900 text-white p-12 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center">
            <div className="space-y-6 flex-1">
              <h3 className="text-3xl font-bold">Annual Impact Report</h3>
              <p className="text-lg text-white/40 font-light">Download our comprehensive 2025 report for a deep dive into our metrics and financial transparency.</p>
              <button className="bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition-all">
                Download PDF
              </button>
            </div>
            <div className="w-48 h-64 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-16 bg-white/10 rounded mx-auto" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">2025 Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Global Reach - Interactive Concept */}
    <section className="py-48 bg-beige-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Our Footprint</span>
              <h2 className="text-5xl md:text-8xl font-display font-black text-primary mb-8 tracking-tighter leading-none">Global<br />Reach</h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
              From local crisis response in Manipur to sustainable livelihood units across the region.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { region: "Manipur Zone", impact: "200+ Students", status: "Active Relief" },
                { region: "Livelihood Units", impact: "12 Centers", status: "Scaling" },
                { region: "South Asia", impact: "30k+ People", status: "Sustainable" },
                { region: "East Africa", impact: "45k+ People", status: "Active Projects" }
              ].map((loc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all group"
                >
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{loc.region}</h4>
                  <p className="text-4xl font-display font-black text-secondary mb-1 tracking-tighter">{loc.impact}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{loc.status}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square bg-white rounded-[4rem] overflow-hidden shadow-2xl p-16 flex items-center justify-center group">
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000">
                <svg viewBox="0 0 1000 500" className="w-full h-full fill-primary">
                  <path d="M150,100 Q200,50 300,100 T500,150 T700,100 T900,200" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="200" cy="150" r="10" />
                  <circle cx="450" cy="300" r="15" />
                  <circle cx="700" cy="200" r="12" />
                  <circle cx="850" cy="350" r="8" />
                </svg>
              </div>
              <div className="relative z-10 text-center space-y-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <Globe2 className="w-32 h-32 text-secondary mx-auto opacity-40" />
                </motion.div>
                <h3 className="text-4xl font-display font-bold text-primary">Connecting<br />Communities</h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed">Our network spans across borders, bringing hope to the most remote corners of the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Milestones of Hope - Timeline Section */}
    <section className="py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-40 space-y-6">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Our Journey</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-primary tracking-tighter">Milestones of Hope</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            A decade of commitment, one life at a time.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
          
          <div className="space-y-32">
            {[
              { year: "2015", title: "The Beginning", desc: "Hope & Rebuild was founded with a mission to provide immediate relief in crisis zones.", icon: Heart },
              { year: "2018", title: "First Livelihood Unit", desc: "Launched our first widow-led manufacturing center, providing sustainable jobs to 20 women.", icon: Briefcase },
              { year: "2021", title: "Clean Water Initiative", desc: "Installed 50 filtration systems across 10 relief camps, serving 5,000+ people.", icon: Droplets },
              { year: "2024", title: "Manipur Crisis Response", desc: "Established the Scholarship Fund to support 1,000 students displaced by violence.", icon: GraduationCap }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:px-20">
                  <div className={`text-center ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} space-y-4`}>
                    <span className="text-6xl font-mono font-black text-secondary/20">{milestone.year}</span>
                    <h3 className="text-3xl font-bold text-primary">{milestone.title}</h3>
                    <p className="text-lg text-slate-500 font-light max-w-sm mx-auto md:mx-0">{milestone.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-beige-soft flex items-center justify-center shadow-xl">
                  <milestone.icon className="w-6 h-6 text-secondary" />
                </div>
                
                <div className="w-full md:w-1/2 md:px-20 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA - Premium Look */}
    <section className="py-48 bg-accent text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd9d7a915490?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover" 
          alt="CTA Background"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-16">
        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">BECOME THE<br />CATALYST.</h2>
        <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
          Your support transforms statistics into stories of success. Join us in rebuilding lives today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <Link to="/contact" className="bg-white text-accent px-20 py-8 rounded-full font-bold text-2xl hover:bg-slate-100 transition-all shadow-2xl active:scale-95">
            Donate Now
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white px-20 py-8 rounded-full font-bold text-2xl hover:bg-white/10 transition-all active:scale-95">
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="flex flex-col bg-beige-soft">
    {/* Page Header */}
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter"
        >
          Get in Touch
        </motion.h1>
        <p className="text-xl text-white/70 font-light tracking-widest uppercase">We'd love to hear from you</p>
      </div>
    </section>

    {/* Contact Info - Flowing */}
    <section className="py-48 bg-beige-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-40">
          {[
            { title: "Call Us", value: "+1 (555) 123-4567", icon: Phone, desc: "Our team is available Mon-Fri, 9am-5pm EST." },
            { title: "Email Us", value: "contact@hopeandrebuild.org", icon: Mail, desc: "We aim to respond within 24 hours." },
            { title: "Visit Us", value: "123 Humanity Way, Global City", icon: MapPin, desc: "Our headquarters are open for scheduled visits." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-16 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-24 h-24 bg-beige-soft rounded-3xl flex items-center justify-center shadow-xl shrink-0">
                <item.icon className="w-10 h-10 text-secondary" />
              </div>
              <div className="text-center md:text-left flex-1 space-y-4">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-primary">{item.title}</h4>
                <p className="text-3xl md:text-5xl font-display font-black text-secondary tracking-tighter">{item.value}</p>
                <p className="text-xl text-slate-500 leading-relaxed max-w-2xl font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Form - Flowing Layout */}
    <section className="py-48 bg-green-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <h2 className="text-5xl md:text-7xl font-display font-black text-primary mb-8 tracking-tighter">Send a Message</h2>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
              Use the form below to reach out directly to our team. We are here to help.
            </p>
            <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100">
              <p className="text-xl text-slate-600 italic font-light">"Our team aims to respond to all inquiries within 24 hours. Your voice matters to us."</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Full Name</label>
                    <input type="text" className="w-full bg-beige-soft/30 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all text-lg" placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Email Address</label>
                    <input type="email" className="w-full bg-beige-soft/30 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all text-lg" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Subject</label>
                  <input type="text" className="w-full bg-beige-soft/30 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all text-lg" placeholder="How can I help?" />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Message</label>
                  <textarea rows={5} className="w-full bg-beige-soft/30 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-secondary transition-all text-lg resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button className="w-full bg-accent text-white py-6 rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-orange-600 transition-all shadow-2xl shadow-accent/30 active:scale-95">
                  Send Message <Send className="w-6 h-6" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section - Flowing Layout */}
    <section className="py-32 bg-beige-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-bold text-primary mb-8 tracking-tighter">Common Questions</h2>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">Everything you need to know about our work and how you can be a part of it.</p>
        </div>
        
        <div className="space-y-24">
          {[
            { q: "How can I be sure my donation is used effectively?", a: "We take financial stewardship seriously. 90% of every dollar donated goes directly to our field programs, ensuring maximum impact for the communities we serve. We publish independently audited annual reports for full transparency." },
            { q: "Do you offer volunteer opportunities abroad?", a: "Yes, we have both local and international volunteer programs. We look for individuals with skills in healthcare, education, engineering, and community development. Please contact us with your CV for more information." },
            { q: "Can I donate items instead of money?", a: "While we primarily accept financial donations for flexibility, we occasionally have specific drives for medical supplies or educational materials. Please check our Latest News or contact us before sending items." },
            { q: "How do I start a corporate partnership?", a: "We love working with organizations! Corporate partnerships can range from employee matching to large-scale infrastructure sponsorship. Please email our partnership team to discuss how we can collaborate." }
          ].map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-12 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-[2rem] flex items-center justify-center shrink-0">
                <span className="text-4xl font-black text-secondary">?</span>
              </div>
              <div className="flex-1">
                <h4 className="text-3xl font-bold text-primary mb-6 leading-tight">{faq.q}</h4>
                <p className="text-2xl text-slate-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-beige-soft/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-extrabold text-primary tracking-tight">REBUILD<span className="text-secondary">.</span></span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-10">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Impact', path: '/impact' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-slate-600 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link to="/contact" className="bg-accent text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-accent/20 hover:bg-orange-600 transition-all transform hover:-translate-y-0.5">
              Donate
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:id" element={<ProgramDetailPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <Heart className="text-white w-5 h-5" />
                  </div>
                  <span className="text-xl font-display font-extrabold tracking-tight">REBUILD<span className="text-secondary">.</span></span>
                </div>
                <p className="text-white/40 leading-relaxed font-light">
                  Restoring dignity and rebuilding lives through sustainable humanitarian impact.
                </p>
                <div className="flex gap-6">
                  {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-white/30 hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-white/60">Quick Links</h4>
                <ul className="space-y-5 text-white/40 font-light">
                  <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
                  <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                  <li><Link to="/impact" className="hover:text-white transition-colors">Impact Stories</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-white/60">Programs</h4>
                <ul className="space-y-5 text-white/40 font-light">
                  {PROGRAMS_DATA.map(p => (
                    <li key={p.id}><Link to={`/programs/${p.id}`} className="hover:text-white transition-colors">{p.title}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-white/60">Newsletter</h4>
                <p className="text-white/40 mb-8 font-light">Receive updates on our impact.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex-1 focus:outline-none focus:border-secondary transition-colors text-sm"
                  />
                  <button className="bg-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-bold uppercase tracking-widest">
              <p>© 2026 Hope & Rebuild NGO. All rights reserved.</p>
              <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
