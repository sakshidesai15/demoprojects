import { motion } from "motion/react";
import { Phone, Mail, Send, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-12 bg-white">
      {/* Header */}
      <section className="py-20 md:py-24 bg-white text-primary relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="mb-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">Contact <br />Us</h1>
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed">
              For inquiries regarding partnerships, donations, or program information, please reach out to our administrative team. We aim to respond within 24-48 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <div className="boxed-section p-12">
                <h3 className="text-2xl font-bold text-secondary mb-10 border-b border-slate-50 pb-6">Contact Details</h3>
                <div className="space-y-10">
                  {[
                    { icon: Phone, label: "Direct Line", value: "+1 (555) 123-4567" },
                    { icon: Mail, label: "Official Email", value: "hq@impacthope.org" },
                    { icon: MapPin, label: "Mailing Address", value: "123 Impact Way, Suite 500, NY 10001" },
                    { icon: Clock, label: "Office Hours", value: "Monday - Friday: 09:00 - 17:00 EST" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center text-accent shrink-0 border border-slate-100">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-lg font-bold text-secondary">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-10 border border-slate-100 rounded">
                <h4 className="text-xl font-bold text-secondary mb-4">Press Inquiries</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">For press releases, media kits, and interview requests, please contact our global communications department.</p>
                <a href="mailto:press@impacthope.org" className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline">
                  press@impacthope.org <Send className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="boxed-section p-12 bg-white shadow-2xl border-none rounded-3xl">
                <h3 className="text-3xl font-bold text-primary mb-12 border-b border-slate-50 pb-8 tracking-tight">Official Inquiry Form</h3>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. John Smith"
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white outline-none transition-all text-base font-medium"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="e.g. john@company.com"
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white outline-none transition-all text-base font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Subject of Inquiry</label>
                    <select className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white outline-none transition-all text-base font-medium appearance-none">
                      <option>General Inquiry</option>
                      <option>Donation Support</option>
                      <option>Partnership Proposal</option>
                      <option>Volunteer Application</option>
                      <option>Media Request</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Message Content</label>
                    <textarea 
                      rows={6}
                      placeholder="Please provide detailed information regarding your inquiry..."
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white outline-none transition-all resize-none text-base font-medium"
                    ></textarea>
                  </div>
                  <button className="btn-primary w-full py-6 flex items-center justify-center gap-4 group">
                    Submit Official Inquiry
                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
