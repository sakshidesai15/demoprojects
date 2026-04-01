import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

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
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Have questions about our programs or want to get involved? We'd love to hear from you. Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-custom mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-10 rounded-[3rem] space-y-10">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Info</h2>
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@impactflow.org', color: 'blue' },
                { icon: Phone, label: 'Call Us', value: '+91 98765 43210', color: 'green' },
                { icon: MapPin, label: 'Visit Us', value: 'Imphal West, Manipur', color: 'purple' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`text-${item.color}-400 w-6 h-6`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.label}</h4>
                    <p className="text-gray-400 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/20">
              <Globe className="w-12 h-12 mb-6 text-blue-400" />
              <h4 className="text-2xl font-bold text-white mb-4">Global Reach</h4>
              <p className="text-gray-400 leading-relaxed">
                While our roots are in Manipur, our impact is global. We partner with organizations worldwide to bring sustainable change.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="flex items-center space-x-4 mb-12">
                <MessageSquare className="text-blue-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-white">Send a Message</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/5 border border-green-500/20 p-12 rounded-[2.5rem] text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="text-green-400 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg mb-8">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white/[0.01] section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Quick answers to common questions about our organization and how you can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: "How can I donate to a specific program?",
                a: "You can specify the program you'd like to support in the message field of our contact form, or choose a program-specific donation link on our Programs page."
              },
              {
                q: "Are my donations tax-deductible?",
                a: "Yes, ImpactFlow is a registered non-profit organization, and all donations are tax-deductible under applicable laws. We provide receipts for all contributions."
              },
              {
                q: "How do you select scholarship recipients?",
                a: "Recipients are selected based on a combination of financial need, academic potential, and the impact of the Manipur violence on their family's stability."
              },
              {
                q: "Can I volunteer remotely?",
                a: "Absolutely! We have several remote volunteering opportunities in areas like digital marketing, content writing, and administrative support."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl group"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-start group-hover:text-blue-400 transition-colors">
                  <span className="text-blue-500 mr-3">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-gray-400 leading-relaxed flex items-start">
                  <span className="text-green-500 mr-3 shrink-0">A:</span>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
