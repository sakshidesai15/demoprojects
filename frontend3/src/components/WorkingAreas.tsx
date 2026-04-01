import { motion } from "motion/react";
import { Briefcase, GraduationCap, Users, Droplets, BookOpen } from "lucide-react";

const areas = [
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Rehabilitation through Jobs",
    description: "We help displaced individuals regain financial independence by connecting them with job opportunities, vocational work, and sustainable income sources.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Skill Development Training",
    description: "Our training programs equip individuals with practical skills that improve employability and long-term career growth in modern industries.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Women Empowerment",
    description: "We empower women through skill-building, leadership opportunities, and financial independence programs to foster community resilience.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: "Safe Drinking Water",
    description: "We provide access to clean and safe drinking water in relief camps to improve health, hygiene, and overall living conditions for families.",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Educational Scholarships",
    description: "We support children's education through scholarships, ensuring their future is not affected by crisis situations and they can pursue their dreams.",
    color: "bg-orange-50 text-orange-600"
  }
];

export default function WorkingAreas() {
  return (
    <section id="programs" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-secondary text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Working Areas</h2>
          <h3 className="text-4xl md:text-5xl font-black text-primary mb-6">Comprehensive Support Programs</h3>
          <p className="text-xl text-slate-600">
            Our initiatives are designed to provide both immediate relief and long-term 
            sustainable development for those affected by crisis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className={`p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group ${index >= 3 ? 'lg:col-span-1' : ''}`}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 ${area.color}`}>
                {area.icon}
              </div>
              <h4 className="text-2xl font-bold text-primary mb-5">{area.title}</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
