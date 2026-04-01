import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IMPACT_STATS } from '../constants';
import { TrendingUp, Users, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function Impact() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-custom mb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">Our Impact</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Numbers tell a story of resilience, growth, and hope. We measure our success by the tangible changes in the lives of the people we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="container-custom mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-12 rounded-[3rem] text-center group"
            >
              <p className="text-6xl md:text-7xl font-extrabold text-white mb-4 group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                {stat.value}
              </p>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">{stat.label}</h3>
              <p className="text-gray-400 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-white/[0.01] section-padding mb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">How We Track Success</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                We believe in radical transparency. Our impact assessment goes beyond just numbers—we track long-term socio-economic indicators to ensure our interventions are truly sustainable.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Economic Stability', desc: 'Tracking monthly income growth and household savings.', icon: TrendingUp },
                  { title: 'Educational Outcomes', desc: 'Monitoring school attendance and academic performance of scholars.', icon: Award },
                  { title: 'Community Resilience', desc: 'Assessing the strength of local support networks and leadership.', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4">
                <img
                  src="https://picsum.photos/seed/impact-photo/1000/1000"
                  alt="Impact in action"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block">
                <CheckCircle2 className="text-green-400 w-10 h-10 mb-4" />
                <p className="text-2xl font-bold text-white">100% Verified</p>
                <p className="text-gray-400 text-sm">Impact Reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-custom">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
          <Heart className="text-red-500 w-16 h-16 mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Be part of the next success story</h2>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Every life changed is a step towards a more equitable world. Your involvement can help us double our impact in the coming year.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
            >
              Get Involved Now
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto px-12 py-5 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
