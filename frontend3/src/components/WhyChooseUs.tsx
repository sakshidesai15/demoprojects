import { motion } from "motion/react";
import { CheckCircle2, Target, Heart, Zap } from "lucide-react";

const reasons = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    title: "Transparent Work",
    desc: "We ensure full accountability and transparency in every initiative we undertake."
  },
  {
    icon: <Target className="w-8 h-8 text-secondary" />,
    title: "Direct Impact",
    desc: "Your support bypasses bureaucracy and reaches those who need it most directly."
  },
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    title: "Community Focus",
    desc: "We work closely with affected communities to understand and meet their real needs."
  },
  {
    icon: <Zap className="w-8 h-8 text-secondary" />,
    title: "Sustainable Solutions",
    desc: "We prioritize long-term development and self-sufficiency over short-term aid."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-primary">A Partner You Can Trust</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="mb-6">{reason.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-4">{reason.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
