import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Users, Droplets, Heart, TrendingUp, Award } from 'lucide-react';
import { PROGRAMS } from '../constants';

const iconMap: { [key: string]: any } = {
  'women-employment': Briefcase,
  'skill-development': Users,
  'women-empowerment': Heart,
  'safe-water': Droplets,
  'scholarships': GraduationCap,
};

export default function Programs() {
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
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">Our Programs</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We design and implement targeted programs that address the most critical needs of displaced and crisis-affected communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="container-custom mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, i) => {
            const Icon = iconMap[program.id] || Heart;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-[2.5rem] overflow-hidden flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                    {program.shortDescription}
                  </p>
                  <Link
                    to={`/programs/${program.id}`}
                    className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group/link"
                  >
                    Explore Program
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Our Programs Work */}
      <section className="bg-white/[0.01] section-padding mb-32">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Our Programs Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We focus on sustainable, community-driven models that create lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Sustainable Models',
                desc: 'We build self-sustaining production units that provide long-term employment.',
                icon: TrendingUp
              },
              {
                title: 'Community First',
                desc: 'Our programs are designed in collaboration with the people they serve.',
                icon: Users
              },
              {
                title: 'Holistic Support',
                desc: 'We address economic, social, and psychological needs concurrently.',
                icon: Heart
              },
              {
                title: 'Quality Focused',
                desc: 'We maintain high standards in everything from production to education.',
                icon: Award
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover p-8 rounded-[2rem] text-center"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="container-custom">
        <div className="relative rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-blue-600" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative px-8 py-20 md:p-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Want to support a specific program?</h2>
            <p className="text-blue-50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              You can choose to donate or volunteer for any of our programs. Every contribution counts towards rebuilding a life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20"
              >
                Donate Now
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
