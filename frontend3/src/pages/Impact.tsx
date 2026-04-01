import { motion } from "motion/react";
import { Globe, Users, Heart, CheckCircle2, TrendingUp, BarChart3, PieChart, Briefcase, GraduationCap, FileText, ShieldCheck } from "lucide-react";

const stats = [
  { 
    label: "Lives Impacted", 
    value: "1,250+", 
    desc: "Direct beneficiaries of our rehabilitation and support programs." 
  },
  { 
    label: "Communities Served", 
    value: "45", 
    desc: "Active operational zones across three major regions." 
  },
  { 
    label: "Success Rate", 
    value: "88%", 
    desc: "Long-term sustainability rate for our economic empowerment initiatives." 
  }
];

export default function Impact() {
  return (
    <div className="pt-12">
      {/* Header */}
      <section className="py-20 md:py-24 bg-white text-primary relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">Measurable <br />Progress</h1>
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed">
              We are committed to full transparency and data-driven reporting. 
              Explore the tangible outcomes of our global initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Strategic Impact Metrics</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Users, label: "Total Beneficiaries", value: "250,000+", desc: "Individuals who have directly benefited from our rehabilitation and aid programs." },
              { icon: Briefcase, label: "Jobs Created", value: "12,500+", desc: "Sustainable employment opportunities generated through our vocational training centers." },
              { icon: GraduationCap, label: "Scholarships Awarded", value: "8,200+", desc: "Full educational scholarships provided to displaced children and youth." }
            ].map((kpi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid-card text-center p-16"
              >
                <div className="w-20 h-20 bg-accent/5 rounded-3xl flex items-center justify-center mx-auto mb-10">
                  <kpi.icon className="w-10 h-10 text-accent" />
                </div>
                <div className="text-5xl font-bold text-primary mb-6 tracking-tighter">{kpi.value}</div>
                <div className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-8">{kpi.label}</div>
                <p className="text-base text-slate-500 leading-relaxed">{kpi.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-8 leading-tight">Data-Driven Humanitarian Progress</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Our monitoring and evaluation framework tracks 15 key indicators across all programs. This allows us to adjust our strategies in real-time and ensure that resources are allocated where they create the most significant impact.
              </p>
              
              <div className="space-y-10">
                {[
                  { title: "Manipur Recovery", value: "100%", desc: "Educational continuity for all 200+ enrolled students from Manipur." },
                  { title: "Economic Independence", value: "78%", desc: "Of our vocational graduates achieve financial independence within 12 months." },
                  { title: "Community Resilience", value: "92%", desc: "Of served communities report improved social stability and resource access." },
                  { title: "Educational Continuity", value: "85%", desc: "Of scholarship recipients successfully transition to higher education or employment." }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-3">
                      <h4 className="font-bold text-secondary">{item.title}</h4>
                      <span className="text-accent font-bold">{item.value}</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden border border-slate-100">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent"
                      ></motion.div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-3 uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="boxed-section p-12 bg-white shadow-2xl">
              <h4 className="text-2xl font-bold text-secondary mb-8">Quarterly Impact Summary</h4>
              <div className="space-y-8">
                {[
                  { label: "Water Projects Completed", value: "24" },
                  { label: "New Skill Centers", value: "3" },
                  { label: "Emergency Relief Kits", value: "15,000" },
                  { label: "Medical Camps Organized", value: "42" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{row.label}</span>
                    <span className="text-xl font-bold text-accent">{row.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-12 py-4 bg-secondary text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">
                Download Full Dataset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-16 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Commitment to Transparency</h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  We believe that transparency is the foundation of trust. ImpactHope undergoes annual independent audits and publishes detailed financial reports to ensure every dollar is accounted for and used efficiently.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-between px-8 py-5 bg-white border border-slate-200 rounded font-bold text-xs uppercase tracking-widest hover:border-accent transition-all group">
                  Financial Report 2025 <BarChart3 className="w-5 h-5 text-slate-300 group-hover:text-accent" />
                </button>
                <button className="flex items-center justify-between px-8 py-5 bg-white border border-slate-200 rounded font-bold text-xs uppercase tracking-widest hover:border-accent transition-all group">
                  Audit Report 2025 <CheckCircle2 className="w-5 h-5 text-slate-300 group-hover:text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
