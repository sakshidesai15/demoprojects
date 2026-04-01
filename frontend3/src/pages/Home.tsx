import { motion } from "motion/react";
import { ArrowRight, Globe, Heart, Target, Shield, Award, CheckCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-12 bg-white">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[60vh] flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight tracking-tighter mb-8">
                Empowering <br />
                <span className="text-accent">Action.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
                ImpactHope is a professional non-profit dedicated to rebuilding lives through structured rehabilitation, education, and economic empowerment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Involved
                </Link>
                <Link to="/programs" className="btn-secondary">
                  Our Programs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                  alt="NGO Impact"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section - Clean Cards */}
      <section className="section-padding bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="mb-8">Our Programs</h2>
            <p className="text-slate-500 mb-8">
              We implement structured, data-driven initiatives designed to address the root causes of 
              vulnerability. Our programs provide sustainable paths to self-sufficiency through 
              education, economic empowerment, and essential resource allocation.
            </p>
            <div className="h-1.5 w-24 bg-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Women's Livelihood", 
                desc: "Providing sustainable employment to widows through hygiene product manufacturing.",
                icon: Heart,
                link: "/programs/women-empowerment"
              },
              { 
                title: "Educational Recovery", 
                desc: "Scholarships and support for children affected by the Manipur crisis.",
                icon: GraduationCap,
                link: "/programs/educational-scholarships"
              },
              { 
                title: "Safe Water Access", 
                desc: "Installing high-capacity filtration systems in high-need relief camps.",
                icon: Globe,
                link: "/programs/safe-drinking-water"
              }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid-card group"
              >
                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <program.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-4">{program.title}</h3>
                <p className="text-slate-500 text-base mb-8">
                  {program.desc}
                </p>
                <Link to={program.link} className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Simple Stat Cards */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Lives Impacted", value: "250K+" },
              { label: "Active Programs", value: "15+" },
              { label: "Countries Served", value: "12" },
              { label: "Global Partners", value: "45+" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-12 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="text-5xl font-bold text-accent mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
