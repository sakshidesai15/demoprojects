import { motion } from "motion/react";
import { ShieldCheck, Users, Eye, Target, Compass, Heart, Award, FileText } from "lucide-react";

export default function About() {
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
            <h1 className="mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">Humanitarian <br />Excellence</h1>
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed">
              ImpactHope is a registered international non-governmental organization 
              committed to restoring dignity through sustainable community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-12 tracking-tight leading-tight">A Decade of Evolution</h2>
              <div className="space-y-10 text-slate-500 text-lg md:text-xl leading-relaxed">
                <p>
                  ImpactHope was founded in response to the growing need for structured, long-term rehabilitation for displaced populations. What began as a small-scale relief initiative has evolved into a comprehensive humanitarian organization with operations spanning multiple regions.
                </p>
                <p>
                  Over the past decade, we have refined our methodology, moving beyond traditional aid to implement data-driven programs that focus on economic self-sufficiency and psychological resilience. Our approach is rooted in the belief that sustainable change requires both immediate intervention and long-term structural support.
                </p>
              </div>

              <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="boxed-section bg-slate-50/50 border-none p-10 rounded-3xl">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-10">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-3xl font-bold mb-6 text-primary">Our Mission</h4>
                  <p className="text-lg text-slate-500 leading-relaxed">To restore dignity and provide sustainable paths for recovery through employment, education, and essential services.</p>
                </div>
                <div className="boxed-section bg-slate-50/50 border-none p-10 rounded-3xl">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-10">
                    <Compass className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-3xl font-bold mb-6 text-primary">Our Vision</h4>
                  <p className="text-lg text-slate-500 leading-relaxed">A global society where every individual has the resources and opportunity to lead an independent and productive life.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div className="boxed-section border-slate-100 bg-white p-12 rounded-3xl shadow-xl">
                <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-12 border-b border-slate-100 pb-6">Quick Facts</h4>
                <ul className="space-y-8">
                  {[
                    { label: "Founded", value: "2011" },
                    { label: "Status", value: "Registered NGO" },
                    { label: "Headquarters", value: "New York, USA" },
                    { label: "Regions", value: "East Africa, SE Asia" },
                    { label: "Staff", value: "150+ Professionals" }
                  ].map((fact, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{fact.label}</span>
                      <span className="text-base font-bold text-primary">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="boxed-section bg-primary text-white border-none p-16 rounded-3xl overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <FileText className="w-16 h-16 text-accent mb-10 relative z-10" />
                <h4 className="text-3xl font-bold mb-6 tracking-tight relative z-10">Annual Report 2025</h4>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed relative z-10">Download our latest comprehensive report on operations and financial transparency.</p>
                <button className="btn-primary w-full py-6 relative z-10">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Values */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-8 tracking-tight">Our Core Principles</h3>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Eye, title: "Transparency", desc: "We adhere to international financial reporting standards, ensuring full accountability to our donors and partners." },
              { icon: Users, title: "Community-Led", desc: "Our programs are designed and implemented in close collaboration with local leaders and community members." },
              { icon: ShieldCheck, title: "Sustainability", desc: "We prioritize long-term outcomes, designing interventions that lead to permanent self-sufficiency." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid-card border-none shadow-sm"
              >
                <div className="w-14 h-14 bg-white rounded flex items-center justify-center mb-8 shadow-sm">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-secondary">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-8 tracking-tight">Milestones & Achievements</h3>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-slate-100">
            {[
              { year: "2011", title: "Organization Founded", desc: "ImpactHope was established in New York as a direct response to humanitarian crises in East Africa." },
              { year: "2014", title: "First Skill Center", desc: "Opened our flagship vocational training center in Nairobi, serving over 500 students annually." },
              { year: "2018", title: "Global Expansion", desc: "Extended operations into Southeast Asia, focusing on sustainable water and sanitation projects." },
              { year: "2022", title: "UN Partnership", desc: "Formally recognized as a strategic partner by the United Nations for regional rehabilitation programs." },
              { year: "2024", title: "Manipur Response", desc: "Launched a dedicated educational recovery program for students affected by the crisis in Manipur." },
              { year: "2025", title: "Impact Milestone", desc: "Reached the milestone of impacting over 250,000 lives through our integrated humanitarian framework." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Award className="w-4 h-4" />
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-secondary">{item.title}</div>
                    <time className="font-black text-accent text-xs uppercase tracking-widest bg-accent/5 px-3 py-1 rounded">{item.year}</time>
                  </div>
                  <div className="text-slate-500 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Executive Leadership</h3>
            <div className="h-1 w-16 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Dr. Sarah Chen", role: "Executive Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
              { name: "Marcus Thorne", role: "Operations Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "Programs Head", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
              { name: "David Kim", role: "Financial Controller", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded overflow-hidden mb-6 border border-slate-200 shadow-sm relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">View Profile</div>
                      <div className="w-8 h-px bg-accent"></div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-secondary mb-1">{member.name}</h4>
                <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
