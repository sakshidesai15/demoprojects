import { motion } from "motion/react";
import { Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-8">Get in Touch</h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have questions about our programs or want to get involved? 
              Our team is here to help. Reach out to us through any of the 
              following channels or use the contact form.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-xl font-bold text-primary">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email</div>
                  <div className="text-xl font-bold text-primary">contact@impacthope.org</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:brightness-110 text-white py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-slate-200">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
