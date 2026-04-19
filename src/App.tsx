/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Brain, 
  GraduationCap, 
  Stethoscope, 
  ShieldCheck,
  Calendar,
  Monitor
} from "lucide-react";

export default function App() {
  const WHATSAPP_LINK = "https://wa.me/5581992351361?text=Olá%20Dra.%20Anne,%20gostaria%20de%20agendar%20uma%20consulta.";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-brand-cream">
      {/* Floating CTA */}
      <motion.a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-brand-primary text-brand-white p-4 rounded-full shadow-2xl hover:bg-brand-secondary transition-all flex items-center gap-3 md:px-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline font-bold text-sm">Agende sua consulta</span>
      </motion.a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-primary/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-brand-primary">Anne K. Santos Barbosa</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-medium">Psicóloga Clínica • CRP 03/30790</span>
          </div>
          <motion.a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-primary text-brand-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agende sua consulta
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/therapy-warm/1920/1080?blur=2" 
            alt="Interior de clínica sofisticada" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-cream/90 md:bg-gradient-to-r md:from-brand-cream md:via-brand-cream/90 md:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col pt-36 md:pt-20 md:justify-center md:min-h-0">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col gap-2 mb-6 md:flex-row md:mb-8">
                <span className="w-fit px-3 py-1.5 bg-brand-white border border-brand-accent rounded-full text-[10px] md:text-[11px] uppercase tracking-wider font-bold text-brand-secondary shadow-sm">
                  Atendimento 100% Online
                </span>
                <span className="w-fit px-3 py-1.5 bg-brand-white border border-brand-accent rounded-full text-[10px] md:text-[11px] uppercase tracking-wider font-bold text-brand-secondary shadow-sm">
                  Jovens, Adultos & Idosos
                </span>
              </div>
              <h1 className="font-serif text-[2.8rem] md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-brand-primary font-bold">
                Acolhimento e <span className="italic font-normal">neurociência</span>.
              </h1>
              <p className="text-lg md:text-xl text-brand-text mb-8 font-light leading-relaxed max-w-md md:max-w-none">
                Reconquiste seu equilíbrio através de uma prática clínica baseada em evidências.
              </p>
              
              <div className="flex flex-col items-center sm:items-start gap-8 md:gap-6">
                <motion.a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-brand-white px-8 py-4.5 rounded-xl text-lg font-bold hover:bg-brand-deep transition-all duration-300 shadow-2xl shadow-brand-primary/20 w-full sm:w-auto text-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span className="whitespace-nowrap">Agende sua consulta</span>
                </motion.a>
                <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-4 px-2 w-full pb-10 md:pb-0">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-cream bg-brand-accent flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-brand-secondary tracking-tight text-center sm:text-left">+ de 5 anos de experiência clínica</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile to avoid conflict */}
        <div className="hidden md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:flex md:items-center md:justify-center md:h-10">
          <motion.div 
            className="text-brand-secondary/60 flex flex-col items-center gap-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Descubra</span>
            <div className="w-px h-12 bg-gradient-to-b from-brand-secondary/60 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent/30 rounded-full blur-2xl"></div>
                <img 
                  src="https://picsum.photos/seed/doctor-portrait-redhead/800/1000" 
                  alt="Dra. Anne K. Santos Barbosa" 
                  className="rounded-3xl shadow-2xl relative z-10 grayscale-[0.1] border-8 border-brand-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-primary text-brand-white p-8 rounded-2xl z-20 shadow-xl hidden lg:block">
                  <p className="text-3xl font-serif italic mb-1">CRP 03/30790</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Registro Profissional Ativo</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Competência e Formação</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-8">Base Clínica Sólida</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center shrink-0">
                    <GraduationCap className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Formação Acadêmica</h4>
                    <p className="text-brand-primary/70 leading-relaxed">Bacharel em Psicologia pela UFAL (2020), desenvolvendo um olhar humanizado e crítico desde a graduação.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center shrink-0">
                    <Brain className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Especialização em Neuropsicologia</h4>
                    <p className="text-brand-primary/70 leading-relaxed">Conhecimento avançado sobre as funções cerebrais e sua relação com o comportamento humano.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center shrink-0">
                    <Stethoscope className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Saúde do Adulto e Idoso</h4>
                    <p className="text-brand-primary/70 leading-relaxed">Pós-graduação pela UFS, com vasta experiência em contextos de saúde pública, hospitalar e atenção primária (APS).</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              {...fadeIn}
              className="font-serif text-4xl md:text-5xl text-brand-primary mb-6"
            >
              Por que escolher este <span className="italic">suporte clínico</span>?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              {...fadeIn}
              className="glass-card p-10 rounded-2xl hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-brand-cream/50 rounded-2xl flex items-center justify-center mb-6 ring-8 ring-brand-cream/30 group-hover:bg-brand-primary transition-colors">
                <ShieldCheck className="text-brand-secondary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-brand-primary">Prática Baseada em Evidências</h3>
              <p className="text-brand-text leading-relaxed opacity-80">
                Abordagem técnica que une o conhecimento científico atualizado à realidade individual de cada paciente.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 rounded-2xl hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-brand-cream/50 rounded-2xl flex items-center justify-center mb-6 ring-8 ring-brand-cream/30 group-hover:bg-brand-primary transition-colors">
                <Brain className="text-brand-secondary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-brand-primary">Integração com Neurociências</h3>
              <p className="text-brand-text leading-relaxed opacity-80">
                Um olhar que entende o funcionamento cerebral por trás das emoções, proporcionando clareza sobre processos mentais.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-2xl hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-brand-cream/50 rounded-2xl flex items-center justify-center mb-6 ring-8 ring-brand-cream/30 group-hover:bg-brand-primary transition-colors">
                <Stethoscope className="text-brand-secondary group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-brand-primary">Vivência Complexa</h3>
              <p className="text-brand-text leading-relaxed opacity-80">
                Experiência prática em casos de alta complexidade emocional e clínica no SUS e ambiente hospitalar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pains / Audience Section */}
      <section className="py-24 bg-brand-primary text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                Se os dias parecem <span className="italic font-light">pesados demais</span>, você não precisa carregar tudo só.
              </h2>
              <p className="text-xl text-brand-accent mb-12 font-light">
                O atendimento é direcionado a quem busca retomar as rédeas da própria vida emocional.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Ansiedade persistente",
                  "Sobrecarga emocional",
                  "Dificuldade com rotina",
                  "Questões do envelhecimento",
                  "Luto e perdas",
                  "Escuta qualificada"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-brand-white/5 p-4 rounded-xl border border-brand-white/10">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="relative p-12 glass-card text-brand-text rounded-[40px] shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-bl-full -translate-y-8 translate-x-8"></div>
              <h3 className="font-serif text-3xl font-bold mb-6 text-brand-primary">Para quem é este espaço?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1.5 w-2 h-2 shrink-0 bg-brand-secondary rounded-full"></div>
                  <p className="leading-relaxed"><strong>Jovens Adultos:</strong> Navegando pelas crises de identidade, carreira e relacionamentos modernos.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 w-2 h-2 shrink-0 bg-brand-secondary rounded-full"></div>
                  <p className="leading-relaxed"><strong>Adultos:</strong> Lidar com a exaustão da rotina, ansiedade e o equilíbrio entre vida e profissionalismo.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 w-2 h-2 shrink-0 bg-brand-secondary rounded-full"></div>
                  <p className="leading-relaxed"><strong>Idosos:</strong> Resgate da autonomia, processamento do luto e adaptações sociais.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-secondary font-bold uppercase tracking-[0.2em] text-xs">Simples e Seguro</span>
            <h2 className="font-serif text-4xl text-brand-primary mt-4">Sua jornada começa aqui</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Monitor className="w-8 h-8 text-brand-secondary" />
              </div>
              <h4 className="font-serif text-2xl mb-3">1. Sessões Online</h4>
              <p className="text-brand-primary/60">No conforto e privacidade da sua casa, conectando-se de onde você estiver.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Calendar className="w-8 h-8 text-brand-secondary" />
              </div>
              <h4 className="font-serif text-2xl mb-3">2. Escuta Profunda</h4>
              <p className="text-brand-primary/60">Tempo de qualidade dedicado à sua história, respeitando seu tempo interno em cada sessão.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center mb-6 shadow-inner">
                <MessageCircle className="w-8 h-8 text-brand-secondary" />
              </div>
              <h4 className="font-serif text-2xl mb-3">3. Agendamento</h4>
              <p className="text-brand-primary/60">Sem burocracia. Entre em contato via WhatsApp e escolha o melhor horário.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-brand-cream">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-brand-primary rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-[1px] border-brand-primary rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-5xl md:text-7xl text-brand-primary mb-8 leading-[1.1]">
              Vamos dar o próximo <span className="italic font-light">passo</span>?
            </h2>
            <p className="text-xl text-brand-primary/70 mb-12 max-w-2xl mx-auto font-light">
              A psicoterapia é um investimento em quem mais importa: você. 
              Clique abaixo para conversarmos e iniciarmos seu processo.
            </p>
            <div className="flex justify-center">
              <motion.a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-brand-primary text-brand-white px-12 py-6 rounded-full text-xl font-medium hover:bg-brand-secondary transition-all duration-500 shadow-2xl hover:shadow-brand-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agende sua consulta
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-white border-t border-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-primary block mb-4">Anne K. Santos Barbosa</span>
            <p className="text-sm text-brand-secondary italic">Transformando sofrimento em resiliência através da clínica e ciência.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">Contato</span>
            <a href="tel:+5581992351361" className="text-brand-primary hover:text-brand-secondary transition-colors">+55 81 99235-1361</a>
            <span className="text-brand-primary">Atendimento Online</span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">Legal</span>
            <span className="text-brand-primary">CRP 03/30790</span>
            <span className="text-brand-primary text-sm opacity-60">© 2026 • Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
