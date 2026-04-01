import { motion } from "motion/react";
import { ShieldCheck, Users, Eye } from "lucide-react";

const highlights = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
    title: "Trusted NGO Network",
    desc: "Collaborating with global partners for maximum reach."
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: "Community-Driven Approach",
    desc: "Empowering locals to lead their own development."
  },
  {
    icon: <Eye className="w-6 h-6 text-secondary" />,
    title: "Transparent Operations",
    desc: "Full accountability in every dollar spent."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Restoring Dignity to <br /> Affected Communities
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We are a dedicated organization working to support internally displaced people affected by violence. 
              Our mission is to restore dignity, provide opportunities, and create sustainable solutions for 
              affected communities. Through our comprehensive support system, we ensure that no one is left behind 
              in the journey towards recovery and growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {highlights.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-primary text-sm leading-tight">{item.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2062&auto=format&fit=crop" 
                alt="Community Support"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-black text-primary mb-1">15+</div>
              <div className="text-slate-500 font-bold text-sm uppercase tracking-wider">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
