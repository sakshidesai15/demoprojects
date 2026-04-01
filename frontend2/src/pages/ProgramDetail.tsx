import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Heart, Share2 } from 'lucide-react';
import { PROGRAMS } from '../constants';

export default function ProgramDetail() {
  const { id } = useParams();
  const program = PROGRAMS.find((p) => p.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          to="/programs"
          className="inline-flex items-center text-gray-500 hover:text-white mb-12 transition-colors group font-medium"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Programs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              {program.title}
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                {program.longDescription}
              </p>
            </div>

            <div className="space-y-16 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <CheckCircle2 className="text-green-500 mr-4 w-7 h-7" />
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 group">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <TrendingUp className="text-blue-500 mr-4 w-7 h-7" />
                  Impact Stats
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {program.impactStats.map((stat, i) => (
                    <div key={i} className="glass p-8 rounded-[2rem] group">
                      <p className="text-4xl font-extrabold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{stat.value}</p>
                      <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/20 text-center"
              >
                Support This Program
              </Link>
              <button className="glass px-10 py-5 text-white font-bold rounded-2xl transition-all flex items-center justify-center hover:bg-white/10 group">
                <Share2 size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                Share Impact
              </button>
            </div>
          </motion.div>

          {/* Right: Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 lg:sticky lg:top-32"
          >
            <div className="rounded-[3rem] overflow-hidden glass p-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-auto object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="glass p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/20">
              <Heart className="text-red-500 w-12 h-12 mb-8" />
              <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">Make a direct impact</h4>
              <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                Your contribution directly funds the {program.title.toLowerCase()}. We ensure 100% of program-specific donations go directly to the field.
              </p>
              <div className="space-y-6">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-500 uppercase tracking-widest">Funding Goal</span>
                  <span className="text-blue-400">75% Reached</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
