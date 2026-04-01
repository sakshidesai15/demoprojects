import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-lg">
            Humanitarian Mission
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-8">
            Empowering Lives, <br />
            <span className="text-secondary">Rebuilding Futures</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            We support victims of violence by providing employment, education, and essential resources to help them rebuild their lives with dignity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-accent hover:brightness-110 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2 group">
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-slate-50 text-primary border-2 border-slate-200 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center">
              Explore Programs
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
              alt="NGO Impact"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative accents */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
