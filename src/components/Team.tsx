import { motion } from 'motion/react';
import { User, Phone, Cpu, Binary, Layers, Code2, Zap, Heart, MessageSquare, Briefcase } from 'lucide-react';
import Tilt from './Tilt';

export default function Team() {
  const team = [
    {
      name: 'Vansh Prajapati',
      role: 'Founding Engineer',
      specialization: 'Digital Architecture',
      image: '/assets/vansh.png',
      bio: 'B.Tech AI Engineer architecting high-velocity conversion engines through engineered automation and custom logic.',
      accent: 'blue',
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vansh-prajapati-6a1b2b2b1/' },
        { label: 'Instagram', href: 'https://www.instagram.com/oneverce/' }
      ]
    },
    {
      name: 'Poojan Shrivastav',
      role: 'Founding Architect',
      specialization: 'Experience Strategy',
      image: '/assets/poojan.png',
      bio: 'B.Tech AI Engineer focused on the intersection of technical fidelity and conversion-optimized digital experiences.',
      accent: 'purple',
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/poojan-shrivastav-6a1b2b2b1/' },
        { label: 'Instagram', href: 'https://www.instagram.com/oneverce/' }
      ]
    }
  ];

  return (
    <section id="team" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden bg-blueprint">
      
      {/* Background Polish with Balanced Colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-blue-500/[0.01] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Strategic Founders</span>
            </div>
            <h2 className="heading-xl text-white uppercase mb-8">
              The Architects
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-loose font-medium tracking-wide">
              The architects of high-performance digital infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <Tilt>
                <div className={`glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 transition-all duration-700 h-full flex flex-col group/card preserve-3d relative overflow-hidden ${
                  member.accent === 'blue' ? 'hover:border-blue-500/30' : 'hover:border-purple-500/30'
                }`}>
                  {/* Decorative Industrial Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blueprint opacity-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-white/5 pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 relative">
                    <div className="relative group/avatar flex-shrink-0">
                      <div className={`absolute -inset-2 rounded-[2.5rem] blur-xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-700 ${
                        member.accent === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                      }`} />
                      <div className="w-32 h-32 rounded-[2.2rem] overflow-hidden border border-white/10 relative z-10 bg-zinc-950">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale contrast-125 group-hover/card:grayscale-0 group-hover/card:contrast-100 transition-all duration-700 opacity-70 group-hover/card:opacity-100" />
                        <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className={`text-[10px] font-bold uppercase tracking-[0.5em] ${
                        member.accent === 'blue' ? 'text-blue-500' : 'text-purple-500'
                      }`}>{member.role}</div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white uppercase leading-[0.95] break-words">{member.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-12 flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                        <div className={`w-3 h-[1px] ${member.accent === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`} />
                        Technical Domain
                      </div>
                      <div className="text-2xl font-bold text-white/90 tracking-tight">{member.specialization}</div>
                    </div>

                    <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-medium">
                      {member.bio}
                    </p>

                    <div className="pt-12 border-t border-white/5 flex flex-wrap gap-10 mt-auto">
                      {member.social.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-[0.3em] transition-all flex items-center gap-3 group/link">
                          <span className={`w-1 h-1 rounded-full transition-all duration-500 ${
                            member.accent === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                          } group-hover/link:shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



