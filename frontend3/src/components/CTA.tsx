import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart className="w-64 h-64 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
            Join us in making a <br /> meaningful difference
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Your support can transform lives and bring hope to those in need. 
            Every contribution, no matter the size, helps us rebuild futures.
          </p>
          <button className="bg-accent hover:brightness-110 text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl shadow-orange-900/40 relative z-10 active:scale-95">
            Donate Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
