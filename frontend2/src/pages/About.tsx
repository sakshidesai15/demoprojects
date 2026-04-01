import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Globe, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-custom mb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">Who We Are</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We are a mission-driven organization focused on rebuilding lives affected by violence. We provide employment, education, and essential resources to create long-term impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white/[0.01] section-padding mb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass glass-hover p-12 rounded-[3rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-blue-500/10 transition-colors" />
              <Target className="text-blue-500 w-12 h-12 mb-8" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower vulnerable communities with sustainable opportunities, ensuring that every individual has the tools and support needed to rebuild their future with dignity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass glass-hover p-12 rounded-[3rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-purple-500/10 transition-colors" />
              <Eye className="text-purple-500 w-12 h-12 mb-8" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To build a future where every individual has dignity, stability, and opportunity, regardless of the crises they have faced. We envision a world of resilient, self-sufficient communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container-custom mb-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Approach</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just provide aid; we build systems for long-term resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Community-Led',
              desc: 'We work directly with community leaders to ensure our programs are culturally sensitive and locally relevant.',
              icon: Users
            },
            {
              title: 'Data-Driven',
              desc: 'Every program is monitored and evaluated using real-time data to maximize impact and efficiency.',
              icon: TrendingUp
            },
            {
              title: 'Holistic Support',
              desc: 'We address the root causes of vulnerability by providing integrated economic and social support.',
              icon: Heart
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-10 rounded-[2.5rem]"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white/[0.01] section-padding mb-32">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A timeline of our commitment to social impact.
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/20 before:to-transparent">
            {[
              { year: '2023', title: 'Foundation', desc: 'ImpactFlow was founded in response to the humanitarian crisis in Manipur.' },
              { year: '2024', title: 'First Employment Unit', desc: 'Launched our first manufacturing unit providing jobs to 50 widows.' },
              { year: '2025', title: 'Scholarship Expansion', desc: 'Reached a milestone of 300+ educational scholarships provided.' },
              { year: '2026', title: 'Digital Transformation', desc: 'Implemented tech-driven monitoring systems for all our programs.' }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0B1120] text-blue-400 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass glass-hover p-8 rounded-[2rem]">
                  <div className="flex items-center justify-between space-x-2 mb-2">
                    <div className="font-bold text-white text-xl">{event.title}</div>
                    <time className="font-mono text-sm text-blue-400 font-bold">{event.year}</time>
                  </div>
                  <div className="text-gray-400 leading-relaxed">{event.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-custom mb-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The principles that guide our every action and decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Integrity',
              desc: 'We operate with absolute transparency and honesty in all our dealings.',
              icon: ShieldCheck,
              color: 'blue'
            },
            {
              title: 'Empathy',
              desc: 'We put people first, understanding the human stories behind every crisis.',
              icon: Heart,
              color: 'red'
            },
            {
              title: 'Sustainability',
              desc: 'We focus on long-term solutions that empower communities to thrive independently.',
              icon: Globe,
              color: 'green'
            }
          ].map((value, i) => (
            <div key={i} className="text-center">
              <div className={`w-16 h-16 rounded-2xl bg-${value.color}-500/10 flex items-center justify-center mx-auto mb-8`}>
                <value.icon className={`text-${value.color}-400 w-8 h-8`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-[280px] mx-auto">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container-custom">
        <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center">
          <Users className="text-blue-500 w-16 h-16 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Driven by a Passionate Team</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-16">
            Our team consists of social workers, educators, and industry experts dedicated to making a tangible difference in the lives of displaced communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4 group">
                <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
                  <img
                    src={`https://picsum.photos/seed/team-${i}/400/400`}
                    alt="Team Member"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Team Member {i}</p>
                  <p className="text-gray-500 text-sm font-medium">Expert Role</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
