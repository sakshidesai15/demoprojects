import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Briefcase, Heart, CheckCircle2, TrendingUp } from 'lucide-react';
import { PROGRAMS, IMPACT_STATS } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Impact Driven NGO</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
                Transforming <span className="text-gradient">Crisis</span> into Opportunity
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
                Empowering displaced communities through sustainable employment, quality education, and essential support.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-2xl hover:shadow-orange-500/30 flex items-center justify-center group active:scale-[0.98]"
                >
                  Get Involved
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/programs"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center active:scale-[0.98]"
                >
                  Explore Programs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 aspect-[4/5] lg:aspect-square">
                <img
                  src="https://picsum.photos/seed/community/1200/1200"
                  alt="NGO Impact"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Heart className="text-green-400 w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">1,000+</p>
                    <p className="text-gray-400 text-sm font-medium">Lives Impacted</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-y border-white/5 bg-[#0B1120]">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            Our Strategic Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {['UNICEF', 'UNESCO', 'WHO', 'UNDP', 'Red Cross'].map((partner) => (
              <div key={partner} className="text-xl font-bold text-white tracking-tighter">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Focus</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We focus on three pillars of impact to create a sustainable future for displaced communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Women Employment',
                desc: 'Providing job opportunities to women, especially widows, through production work like sanitary pads and wipes.',
                icon: Briefcase,
                color: 'blue'
              },
              {
                title: 'Skill & Livelihood',
                desc: 'Helping individuals build practical skills and secure sustainable income through vocational training.',
                icon: Users,
                color: 'green'
              },
              {
                title: 'Education Support',
                desc: 'Providing scholarships to children affected by Manipur violence to secure their educational future.',
                icon: GraduationCap,
                color: 'purple'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass glass-hover p-10 rounded-[2.5rem] group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${item.color}-500/10 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`text-${item.color}-400 w-7 h-7`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">{item.desc}</p>
                <Link to="/programs" className="text-blue-400 font-bold flex items-center text-sm group-hover:underline">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our systematic approach ensures that every contribution translates into long-term, sustainable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 z-0" />
            
            {[
              {
                step: '01',
                title: 'Identify & Assess',
                desc: 'We identify communities in crisis and assess their most urgent needs through ground-level research.',
                icon: CheckCircle2
              },
              {
                step: '02',
                title: 'Empower & Train',
                desc: 'We implement targeted programs, providing the training and resources needed for self-sufficiency.',
                icon: Users
              },
              {
                step: '03',
                title: 'Sustain & Scale',
                desc: 'We monitor progress and scale successful models to reach more families and communities.',
                icon: TrendingUp
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 glass glass-hover p-10 rounded-[2.5rem] text-center group"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-blue-400">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Voices of Hope</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Hear from the individuals whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "After the violence, I thought my children's education was over. The scholarship program gave them a second chance at a future.",
                author: "Mary L.",
                role: "Mother of three",
                image: "https://picsum.photos/seed/mary/100/100"
              },
              {
                quote: "The women's employment program didn't just give me a job; it gave me back my dignity and a way to support my family independently.",
                author: "Rita S.",
                role: "Production Lead",
                image: "https://picsum.photos/seed/rita/100/100"
              },
              {
                quote: "The skill training I received opened doors I never thought possible. I'm now working as a certified technician in my community.",
                author: "David K.",
                role: "Skill Training Graduate",
                image: "https://picsum.photos/seed/david/100/100"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover p-10 rounded-[2.5rem] relative"
              >
                <div className="absolute top-10 right-10 text-blue-500/10">
                  <Heart size={48} fill="currentColor" />
                </div>
                <p className="text-gray-300 text-lg italic leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-white font-bold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="space-y-4">
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tighter">{stat.value}</p>
                <p className="text-xl font-bold text-blue-400">{stat.label}</p>
                <p className="text-gray-400 text-sm max-w-[250px] mx-auto">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to make a difference?</h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed">
                Your support can help us reach more families and provide more scholarships. Join us in our mission to rebuild lives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl shadow-black/20 active:scale-[0.98]"
                >
                  Join Our Mission
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
