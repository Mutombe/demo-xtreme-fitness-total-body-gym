import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, MapPin, Phone, WhatsappLogo, Star, Quotes,
  CaretLeft, CaretRight, CheckCircle, Lightning, Heart, Users, Trophy, Timer, Fire, Lightbulb,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

const iconMap = { Heart, Star, Lightning, Trophy, Users, Timer, Fire, CheckCircle, Lightbulb };

function AnimatedCounter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);
  return <span ref={ref}>{inView ? count.toLocaleString() : '0'}{suffix}</span>;
}

function NoiseTexture({ opacity = 0.035 }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10" style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
    }} />
  );
}


/* 1. HERO — Cinematic Dark, Video-Feel */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages?.map(img => img.url) || ['https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80'];
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % heroImages.length), 4500);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img key={currentSlide} src={heroImages[currentSlide]}
            alt="Xtreme Fitness Total Body Gym" className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.15 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }} loading="eager" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/50 to-black z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-[1]" />
      </motion.div>
      <NoiseTexture opacity={0.05} />
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-20" />
      <motion.div className="relative z-20 flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto px-5 sm:px-8 pt-36"
        style={{ y: textY, opacity }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-[#EF4444] text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
          {hero.badge || "Where Champions Train"}
        </motion.p>
        <div className="overflow-hidden">
          {(hero.titleLines || ['IRON', 'SHARPENS', 'IRON.']).map((line, i) => (
            <motion.div key={line} initial={{ y: '120%' }} animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className={`font-heading leading-[0.85] tracking-tighter ${i === 1 ? 'text-[#EF4444]' : 'text-white'}`}
                style={{ fontSize: 'clamp(2.5rem, 9vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                {line}
              </h1>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="flex flex-wrap justify-center gap-4 mt-12">
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#EF4444] text-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:shadow-xl hover:shadow-[#EF4444]/30 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.ctaPrimary || 'Begin Now'} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/services" className="group inline-flex items-center gap-3 border-2 border-white/20 text-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:border-[#EF4444] hover:text-[#EF4444] transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.ctaSecondary || 'Our Classes'}
          </Link>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={14} className="text-[#EF4444]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 2. TRANSFORMATION STATS */
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { stats } = siteData;
  const defaults = [{ number: '6', label: 'Reviews' }, { number: '4.3', label: 'Stars' }, { number: '800', label: 'Members Transformed' }, { number: '50', label: 'Classes Weekly' }];
  const ds = stats?.length ? stats : defaults;
  return (
    <section ref={ref} className="relative bg-[#EF4444] py-14 sm:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ds.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
              <div className="font-heading text-white leading-none font-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                <AnimatedCounter target={String(s.number).replace(/[^0-9]/g, '')} suffix={String(s.number).replace(/[0-9]/g, '')} />
              </div>
              <div className="text-white/60 text-xs uppercase tracking-[0.25em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. SERVICES */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview, services } = siteData;
  const fi = ['https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80','https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80'];
  return (
    <section ref={ref} className="bg-black py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
          <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
          <h2 className="font-heading text-white leading-[0.92] font-black tracking-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            WHAT WE <span className="text-[#EF4444]">OFFER</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {(servicesPreview || []).slice(0, 6).map((service, i) => {
            const IC = iconMap[service.icon] || iconMap[service.iconName] || Star;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.06 * i }}
                className={i === 0 ? 'sm:col-span-2' : ''}>
                <Link to={`/services#${services?.items?.[i]?.slug || ''}`} className={`group relative block overflow-hidden ${i === 0 ? 'aspect-[2/1]' : 'aspect-square'}`}>
                  <img src={service.image || fi[i] || fi[0]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#EF4444] flex items-center justify-center"><IC size={18} weight="fill" className="text-white" /></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <h3 className="font-heading text-white text-lg sm:text-xl font-black tracking-tight mb-1">{service.title}</h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{service.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EF4444] z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 4. EQUIPMENT SHOWCASE CAROUSEL */
function EquipmentShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const items = [
    { name: 'Free Weights Zone', desc: 'Olympic bars, dumbbells from 2kg–50kg, kettlebells, and racks.', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80' },
    { name: 'Cardio Floor', desc: 'Treadmills, bikes, rowers, and stair climbers with personal screens.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80' },
    { name: 'Functional Area', desc: 'Battle ropes, TRX, sleds, and open turf for dynamic training.', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80' },
    { name: 'Group Studio', desc: 'Mirrored studio for yoga, HIIT, spinning, and boxing classes.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80' },
  ];
  return (
    <section ref={ref} className="bg-neutral-950 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
          <h2 className="font-heading text-white leading-[0.92] font-black tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            OUR <span className="text-[#EF4444]">FACILITY</span>
          </h2>
        </motion.div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {items.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * i }} className="group flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] relative overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" loading="eager" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h4 className="text-white font-heading text-lg font-black mb-1">{item.name}</h4>
              <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* 5. TESTIMONIALS */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const defaults = [
    { text: 'The intensity here is unmatched. Best gym environment in Zimbabwe.', name: 'Mike C.', role: 'Powerlifter', rating: 5 },
    { text: 'From beginner to competitor — this gym made it possible.', name: 'Grace M.', role: 'Bodybuilder', rating: 5 },
  ];
  const testimonials = homeTestimonials?.length ? homeTestimonials : defaults;
  const next = useCallback(() => setActive(p => (p+1) % testimonials.length), [testimonials.length]);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);
  const t = testimonials[active];
  return (
    <section ref={ref} className="relative bg-black py-24 sm:py-32 lg:py-40 overflow-hidden">
      <NoiseTexture opacity={0.02} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <Quotes size={48} weight="fill" className="text-[#EF4444]/15 mx-auto mb-8" />
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-heading font-black mb-10">&ldquo;{t.text}&rdquo;</blockquote>
            <div className="w-8 h-[2px] bg-[#EF4444] mx-auto mb-3" />
            <div className="text-white text-sm uppercase tracking-[0.15em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{t.name}</div>
            <div className="text-white/40 text-xs uppercase tracking-[0.15em] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{t.role}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 transition-all ${i === active ? 'bg-[#EF4444] scale-125' : 'bg-white/15'}`} />)}
        </div>
      </div>
    </section>
  );
}

/* 6. CTA */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80" alt="Xtreme Fitness Total Body Gym" className="w-full h-[130%] object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
      <NoiseTexture opacity={0.03} />
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h2 className="font-heading text-white leading-[0.85] font-black tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
            THE GRIND<br /><span className="text-[#EF4444]">NEVER STOPS</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#EF4444] text-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:shadow-xl transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              {homeCta?.ctaPrimary || 'Join The Grind'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber || '263774832357'}`} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-green-500/10 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              <WhatsappLogo size={20} weight="fill" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 7. LOCATION */
function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { business } = siteData;
  return (
    <section ref={ref} className="bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
            <h2 className="font-heading text-white font-black tracking-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>FIND <span className="text-[#EF4444]">US</span></h2>
            <div className="space-y-5">
              {[{ icon: MapPin, text: business.address || 'Cnr Tongogara and, Fifth St, Harare, Zimbabwe' }, { icon: Phone, text: business.phone || '+263 77 483 2357' }, { icon: WhatsappLogo, text: 'Message on WhatsApp' }].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EF4444] flex items-center justify-center shrink-0"><item.icon size={18} weight="fill" className="text-white" /></div>
                  <p className="text-white/50 text-sm pt-2.5" style={{ fontFamily: 'var(--font-sans)' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="aspect-[4/3] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="Xtreme Fitness Total Body Gym" className="w-full h-full object-cover object-center" loading="eager" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <EquipmentShowcase />
      <TestimonialsSection />
      <CTASection />
      <LocationSection />
    </PageTransition>
  );
}
