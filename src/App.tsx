/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";
import { Cpu, Server, Mail, Phone, Rocket, CpuIcon, CircuitBoard, CheckCircle2 } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Faded Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2560&q=80"
            alt="Server racks with GPUs"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          {/* Fading Gradients to blend into pure black */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 uppercase"
          >
            OffScript
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto tracking-[0.2em] uppercase font-mono"
          >
            Next era AI training for your EE & PCB design needs.
          </motion.p>
        </div>
      </section>

      {/* Models Released Section */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 flex items-center gap-4">
              <CircuitBoard className="w-8 h-8 text-white/50" />
              Models Released
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Otter 0.5", desc: "Foundation electrical engineering reasoning." },
                { name: "Otter 1.0", desc: "Advanced PCB layout routing & verification." },
                { name: "Otter 1.5", desc: "State-of-the-art copilot for full board design." }
              ].map((model, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                  <h3 className="text-2xl font-mono font-bold mb-3 group-hover:text-white text-white/90">{model.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{model.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">About Us</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                We are an AI training company building copilot models specialized for PCB design and Electrical Engineering.
              </p>
              <div className="p-6 border border-white/20 bg-black mb-8">
                <div className="flex items-start gap-4">
                  <Server className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">A100 Compute Cluster</h4>
                    <p className="text-sm text-white/60">We operate a massive cluster of A100 GPUs dedicated exclusively to training our EE-focused models.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-white/70 leading-relaxed flex items-center gap-2">
                <CheckCircle2 className="text-white/50 w-5 h-5" />
                All our models are open source for the community.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-xl font-mono text-white/50 uppercase tracking-widest mb-4">Contact</h3>
                <a href="mailto:bdhdbssh53@gmail.com" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black">
                    <Mail className="w-5 h-5" />
                  </div>
                  bdhdbssh53@gmail.com
                </a>
                <a href="tel:+12522481113" className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black">
                    <Phone className="w-5 h-5" />
                  </div>
                  +1 (252) 248-1113
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Rocket className="w-12 h-12 mx-auto mb-8 text-white/50" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Plans</h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              We will continue training and giving our models to the community. 
              We are actively looking for funding through grants, investors, and partnerships to scale our compute and research capabilities.
            </p>
            
            <a href="mailto:bdhdbssh53@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-white/90 transition-colors">
              <Mail className="w-5 h-5" />
              bdhdbssh53@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-white/40 text-sm font-mono uppercase tracking-widest">
        &copy; {new Date().getFullYear()} OffScript. Open Source AI for EE.
      </footer>
    </main>
  );
}

