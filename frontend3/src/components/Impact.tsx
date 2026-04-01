import { motion } from "motion/react";

const stats = [
  { 
    label: "Lives Impacted", 
    value: "1000+", 
    desc: "Providing support and opportunities to affected individuals" 
  },
  { 
    label: "Families Supported", 
    value: "500+", 
    desc: "Helping families rebuild stable lives and secure futures" 
  },
  { 
    label: "Women Empowered", 
    value: "200+", 
    desc: "Enabling independence and leadership through skill-building" 
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Impact</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Measurable Change</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-secondary font-bold text-xl mb-4 uppercase tracking-wider">
                {stat.label}
              </h4>
              <p className="text-slate-400 text-lg leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
