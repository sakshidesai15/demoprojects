import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, Users, Droplets, BookOpen } from "lucide-react";
import { programs } from "../data/programs";

const iconMap: { [key: string]: any } = {
  "rehabilitation-through-jobs": <Briefcase className="w-6 h-6" />,
  "skill-development-training": <GraduationCap className="w-6 h-6" />,
  "women-empowerment": <Users className="w-6 h-6" />,
  "safe-drinking-water": <Droplets className="w-6 h-6" />,
  "educational-scholarships": <BookOpen className="w-6 h-6" />
};

export default function Programs() {
  return (
    <div className="pt-12">
      {/* Header */}
      <section className="py-20 md:py-24 bg-white text-primary relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">Our <br />Programs</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              We implement structured programs designed to address the root causes of 
              vulnerability and provide sustainable paths to self-sufficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid-card group"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 glass p-3 rounded-xl shadow-sm">
                    <div className="text-accent">
                      {iconMap[program.id]}
                    </div>
                  </div>
                </div>
                <h3 className="mb-4 group-hover:text-accent transition-colors">{program.title}</h3>
                <p className="text-slate-500 mb-8 line-clamp-3">
                  {program.shortDesc}
                </p>
                <Link
                  to={`/programs/${program.id}`}
                  className="inline-flex items-center gap-3 text-accent font-bold text-xs uppercase tracking-widest group/link"
                >
                  View Details <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-10 leading-tight tracking-tight">A Data-Driven Approach to Humanitarian Aid</h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12">
                Our methodology is built on three core pillars: Immediate Intervention, Structural Support, and Long-term Sustainability. We use real-time data to monitor program efficiency and adjust our strategies to maximize impact.
              </p>
              <div className="space-y-10">
                {[
                  { title: "Needs Assessment", desc: "Rigorous analysis of community requirements before implementation." },
                  { title: "Strategic Execution", desc: "Coordinated delivery of services through local and international experts." },
                  { title: "Impact Evaluation", desc: "Continuous monitoring and reporting of outcomes for transparency." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-3">{item.title}</h4>
                      <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[100px]"></div>
              <div className="relative bg-white p-16 rounded-3xl border border-slate-100 shadow-2xl">
                <div className="space-y-12">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Efficiency Rate</div>
                      <div className="text-6xl font-bold text-primary tracking-tighter">94.2%</div>
                    </div>
                    <div className="w-32 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div className="h-px bg-slate-100"></div>
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Transparency</div>
                      <div className="text-3xl font-bold text-primary">A+ Grade</div>
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Sustainability</div>
                      <div className="text-3xl font-bold text-primary">High Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-white mb-8">Support Our Strategic Initiatives</h2>
          <p className="text-slate-400 mb-12">
            Your contribution allows us to scale our programs and reach more communities in need.
          </p>
          <Link to="/contact" className="btn-primary">
            Donate to a Program
          </Link>
        </div>
      </section>
    </div>
  );
}
