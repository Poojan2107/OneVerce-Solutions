import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Oneverce completely transformed our online presence. Our lead volume tripled in just 3 months after the new site went live. They understand business, not just code.",
    author: "Sarah Jenkins",
    role: "CEO at TechFlow Startups",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    content: "The free audit they provided was eye-opening. They pointed out exactly why our visitors weren't buying. The redesign paid for itself within weeks.",
    author: "Deepak Sharma",
    role: "Founder of LocalEats",
    image: "https://i.pravatar.cc/150?u=deepak"
  },
  {
    content: "Professional, fast, and incredibly focused on the numbers. If you want a website that actually works for your business, these are the people to talk to.",
    author: "Michael Chen",
    role: "Marketing Director at GrowthOps",
    image: "https://i.pravatar.cc/150?u=michael"
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 md:py-24 bg-[#0a0a0c] relative overflow-hidden bg-blueprint"
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Global Validation</span>
          </div>
          <h2 id="testimonials-heading" className="heading-xl text-white uppercase text-center">
            Market Signal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] bg-zinc-900/50 border border-white/5 relative group hover:bg-zinc-800/50 transition-colors"
            >
              <Quote className="absolute top-12 right-12 text-zinc-800 group-hover:text-blue-500/20 transition-colors" size={60} />
              <p className="text-zinc-200 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 relative z-10 leading-relaxed font-light italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
                  <span className="text-lg font-black text-white z-10 font-mono tracking-tighter uppercase">{testimonial.author[0]}</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.author}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
