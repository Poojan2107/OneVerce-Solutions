import { motion } from 'motion/react'

const techStack = [
  { name: 'React 19', category: 'Frontend', icon: '⚛️' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Express.js', category: 'Backend', icon: '🚂' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'Prisma ORM', category: 'Database', icon: '◮' },
  { name: 'Python', category: 'AI & Language', icon: '🐍' },
  { name: 'C/C++', category: 'Language', icon: '💻' },
  { name: 'TypeScript', category: 'Language', icon: '🔷' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
  { name: 'Gemini AI', category: 'Intelligence', icon: '🧠' },
  { name: 'Git & GitHub', category: 'Version Control', icon: '🐙' },
  { name: 'DSA', category: 'Computer Science', icon: '📊' },
]

export default function TechStack() {
  return (
    <section
      id='tech-stack'
      aria-labelledby='tech-stack-heading'
      className='py-16 sm:py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <div className='w-2 h-2 bg-zinc-500 rounded-full animate-pulse' />
            <span className='text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]'>
              Under the Hood
            </span>
          </div>
          <h2 id='tech-stack-heading' className='heading-xl text-white uppercase mb-4'>
            Built With
          </h2>
          <p className='text-zinc-500 text-sm max-w-lg mx-auto font-medium leading-relaxed'>
            Modern stack, zero compromises. Every tool chosen for performance, developer experience,
            and scale.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4'>
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className='group p-4 sm:p-6 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-white/15 transition-all duration-300 text-center'
            >
              <div className='text-2xl mb-2'>{tech.icon}</div>
              <div className='text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors'>
                {tech.name}
              </div>
              <div className='text-[9px] font-bold text-zinc-600 uppercase tracking-widest mt-1'>
                {tech.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
