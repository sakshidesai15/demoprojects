import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Heart, Briefcase, GraduationCap, Users, Droplets, BookOpen } from "lucide-react";
import { programs } from "../data/programs";

const iconMap: { [key: string]: any } = {
  "rehabilitation-through-jobs": <Briefcase className="w-12 h-12" />,
  "skill-development-training": <GraduationCap className="w-12 h-12" />,
  "women-empowerment": <Users className="w-12 h-12" />,
  "safe-drinking-water": <Droplets className="w-12 h-12" />,
  "educational-scholarships": <BookOpen className="w-12 h-12" />
};

export default function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="pt-12 bg-white">
      {/* Header */}
      <section className="py-20 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs" className="inline-flex items-center gap-3 text-slate-400 hover:text-accent mb-16 transition-all group text-xs font-bold uppercase tracking-[0.2em]">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Back to Initiatives
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-12 border border-slate-100 bg-slate-50 text-accent shadow-sm`}>
              {iconMap[program.id]}
            </div>
            <h1 className="mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">{program.title}</h1>
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed">
              {program.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-16"
            >
              <div className="boxed-section p-12 bg-white rounded-3xl">
                <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">Program Methodology</h3>
                <p className="text-slate-500 mb-10">
                  {program.longDesc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-slate-50/50 border border-slate-100 rounded-2xl">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <p className="text-base font-medium text-primary">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="boxed-section p-12 bg-slate-50/50 border-none rounded-3xl">
                <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">Measurable Impact</h3>
                <p className="text-slate-500 italic border-l-4 border-accent pl-8 text-xl leading-relaxed">
                  "{program.impact}"
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-5 sticky top-32 space-y-10">
              <div className="aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="boxed-section bg-primary text-white border-none p-12 rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <Heart className="w-12 h-12 text-accent mb-8 relative z-10" />
                <h4 className="text-2xl font-bold mb-4 tracking-tight relative z-10">Support Initiative</h4>
                <p className="text-slate-400 mb-10 leading-relaxed relative z-10">
                  Your contribution directly supports the implementation and expansion of our {program.title.toLowerCase()} program across target regions.
                </p>
                <Link to="/contact" className="btn-primary w-full relative z-10">
                  Contribute Now
                </Link>
              </div>

              <div className="p-6 border border-slate-100 rounded bg-slate-50">
                <h5 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Related Documents</h5>
                <ul className="space-y-3">
                  {['Program Charter.pdf', 'Q4 Impact Report.pdf', 'Budget Allocation.pdf'].map((doc, i) => (
                    <li key={i} className="flex items-center justify-between text-xs text-slate-500 hover:text-accent cursor-pointer transition-colors">
                      <span>{doc}</span>
                      <BookOpen className="w-3 h-3" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
