/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  ArrowRight, 
  Trees, 
  Mountain, 
  Map, 
  Shield, 
  Globe, 
  Mail, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import PrivacyPolicy from './pages/PrivacyPolicy';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-terra-green flex items-center justify-center rounded-[12px] shadow-lg shadow-terra-green/20">
          <span className="text-white font-bold text-lg tracking-tighter leading-none">TF</span>
        </div>
        <span className="font-display font-bold text-2xl tracking-tight uppercase">TerraFit</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase opacity-70">
        <a href="/#solutions" className="hover:opacity-100 transition-opacity">Solutions</a>
        <a href="/#about" className="hover:opacity-100 transition-opacity">About</a>
        <a href="/#contact" className="px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')",
        }}
      />
      <div className="organic-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A0D] via-transparent to-transparent opacity-80" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="inline-block px-3 py-1 bg-terra-green/30 border border-terra-green/50 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold mb-6 backdrop-blur-sm">
          Global Infrastructure Excellence
        </span>
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
          OUTDOOR ADVENTURE & FITNESS <br />
          <span className="text-terra-green">IN HARMONY</span> <br />
          WITH NATURE.
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed mb-10">
          We design and develop world-class outdoor fitness and adrenaline adventure environments that blend seamlessly into natural landscapes.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/#solutions" className="px-8 py-4 bg-terra-green text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-terra-light-green transition-all shadow-lg shadow-terra-green/20">
            Explore Solutions <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10 flex justify-between items-end">
      <div className="hidden lg:block">
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <div>
            <p className="mb-2 text-white/20">Market Focus</p>
            <p className="text-white">South Africa & International</p>
          </div>
          <div>
            <p className="mb-2 text-white/20">Specialization</p>
            <p className="text-white">Adventure Infrastructure</p>
          </div>
          <div>
            <p className="mb-2 text-white/20">Parent Group</p>
            <p className="text-white">Aemara Group</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-12 h-[1px] bg-white/20" />
        <div className="w-12 h-[1px] bg-white" />
        <div className="w-12 h-[1px] bg-white/20" />
      </div>
    </div>
  </section>
);

const SolutionCard = ({ title, description, icon: Icon, link, image, label, targets }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative h-[650px] overflow-hidden rounded-2xl border border-white/10"
  >
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="organic-overlay opacity-60 group-hover:opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A0D] via-transparent to-transparent" />
    
    <div className="absolute inset-0 p-10 flex flex-col justify-end">
      <div className="mb-6 w-12 h-12 bg-terra-green/20 backdrop-blur-md rounded-full flex items-center justify-center border border-terra-green/30">
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-terra-green mb-2">{label}</span>
      <h3 className="font-display text-4xl font-bold mb-4">{title}</h3>
      <p className="text-white/80 mb-6 max-w-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-3">Target Sectors</p>
        <div className="flex flex-wrap gap-2">
          {targets.map((t: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-terra-green/10 border border-terra-green/20 rounded text-[9px] uppercase tracking-wider text-terra-green">
              {t}
            </span>
          ))}
        </div>
      </div>

      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all text-white"
      >
        Visit {title === 'TerraFit Trails' ? 'TerraFit Trail' : title} Solutions <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
);

const FeaturedProjects = () => (
  <section className="py-32 bg-[#0D1A0D]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-terra-green mb-4 block">Case Studies</span>
        <h2 className="font-display text-5xl font-bold">Flagship Deployments.</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* J-Bay Zebra Lodge - Public Fitness Trail - USING LOCAL IMAGE FROM PUBLIC FOLDER */}
        <a 
          href="https://terrafit-trail.com/#location" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group cursor-pointer block"
        >
          <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/5 relative" style={{ minHeight: '300px' }}>
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundImage: `url('/terrafit-trail-jbay-zebra-lodge.png')`,
              }}
            />
            <div className="organic-overlay opacity-40 group-hover:opacity-20" />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-display text-2xl font-bold mb-1">J-Bay Zebra Lodge</h4>
              <p className="text-xs text-white/40 uppercase tracking-widest">Eastern Cape, South Africa</p>
            </div>
            <span className="px-3 py-1 bg-terra-green/10 border border-terra-green/20 rounded-full text-[9px] uppercase tracking-widest font-bold text-terra-green">
              Public Fitness Trail
            </span>
          </div>
        </a>

        {/* Jangalooz Pomer Croatia - Adventure Park */}
        <a 
          href="https://www.jangalooz.com/en/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group cursor-pointer block"
        >
          <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/5 relative" style={{ minHeight: '300px' }}>
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundImage: `url('https://www.jangalooz.com/wp-content/uploads/2025/03/DSCF0235.jpg')`,
              }}
            />
            <div className="organic-overlay opacity-40 group-hover:opacity-20" />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-display text-2xl font-bold mb-1">Jangalooz Pomer Croatia</h4>
              <p className="text-xs text-white/40 uppercase tracking-widest">Croatia</p>
            </div>
            <span className="px-3 py-1 bg-terra-green/10 border border-terra-green/20 rounded-full text-[9px] uppercase tracking-widest font-bold text-terra-green">
              Adventure Park
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-24 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { label: "Active Deployments", value: "12+" },
          { label: "Communities Impacted", value: "50k+" },
          { label: "Design Excellence", value: "ISO" },
          { label: "Global Reach", value: "EMEA" }
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <p className="text-4xl md:text-6xl font-display font-bold mb-2">{stat.value}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-terra-green/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-terra-green mb-6 block">Corporate Identity</span>
          <h2 className="font-display text-5xl font-bold mb-8 leading-tight">
            TerraFit is the brand. <br />
            <span className="text-white/30">Aemara Group is the engine.</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            TerraFit represents the pinnacle of outdoor fitness and adventure infrastructure. Developed and managed by Aemara Group, the brand focuses on creating sustainable, high-impact environments that bridge the gap between nature and human performance.
          </p>
          <div className="space-y-4">
            {[
              { icon: Shield, text: "Engineered for extreme durability" },
              { icon: Globe, text: "Sustainable materials & local sourcing" },
              { icon: Map, text: "Strategic destination development" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm font-medium text-white/80">
                <div className="w-8 h-8 rounded-full bg-terra-green/10 flex items-center justify-center border border-terra-green/20">
                  <item.icon size={14} className="text-terra-green" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="organic-overlay opacity-50" />
          </div>
          <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-xl max-w-xs hidden md:block border-terra-green/20">
            <p className="text-sm italic text-white/80 mb-4">
              "Our mission is to redefine how communities interact with outdoor spaces through intelligent infrastructure."
            </p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-terra-green">Didier Duc, Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-terra-green/10">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="w-20 h-20 bg-terra-green rounded-full flex items-center justify-center mx-auto mb-10 border border-white/10">
        <Mail size={32} className="text-white" />
      </div>
      <h2 className="font-display text-5xl font-bold mb-6">Start a Project.</h2>
      <p className="text-xl text-white/60 mb-12">
        Inquire about TerraFit infrastructure for your municipality, estate, or tourism destination.
      </p>
      <a 
        href="mailto:inquiry@aemaragroup.com" 
        className="inline-block px-12 py-6 bg-terra-green text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-terra-light-green transition-all hover:scale-105"
      >
        INQUIRE NOW
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-[#0D1A0D]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <a href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-terra-green flex items-center justify-center rounded-[10px]">
              <span className="text-white font-bold text-sm tracking-tighter leading-none">TF</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">TerraFit</span>
          </a>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Global leaders in outdoor fitness and adventure infrastructure. Part of the Aemara Group ecosystem.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-terra-green mb-6">Platforms</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="https://terrafit-trail.com" className="hover:text-terra-green transition-colors">TerraFit Trails</a></li>
            <li><a href="https://terrafit-parks.com" className="hover:text-terra-green transition-colors">TerraFit Parks</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-terra-green mb-6">Corporate</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="/#about" className="hover:text-terra-green transition-colors">Aemara Group</a></li>
            <li><a href="mailto:inquiry@aemaragroup.com" className="hover:text-terra-green transition-colors">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-terra-green transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20 font-bold">
        <p>© 2026 TerraFit Infrastructure. All Rights Reserved.</p>
        <p>Developed by Aemara Group</p>
      </div>
    </div>
  </footer>
);

function HomePage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      
      <section id="solutions" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 block">Our Ecosystem</span>
            <h2 className="font-display text-5xl font-bold">Specialized Platforms.</h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            We provide specialized solutions for both public infrastructure and commercial adventure destinations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <SolutionCard 
            title="TerraFit Trails"
            label="Public Infrastructure"
            description="Public outdoor fitness trails designed for municipalities, residential estates, and nature reserves."
            icon={Trees}
            link="https://terrafit-trail.com"
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
            targets={["Municipalities", "Estates", "Resorts", "Nature Reserves"]}
          />
          <SolutionCard 
            title="TerraFit Parks"
            label="Commercial Destinations"
            description="Treetop & Adrenaline Adventure Parks engineered for tourism destinations, commercial operators, and hospitality groups."
            icon={Mountain}
            link="https://terrafit-parks.com"
            image="https://www.jangalooz.com/wp-content/uploads/2025/03/DSCF0167.jpg"
            targets={["Investors", "Tourism Operators", "Developers", "Hospitality"]}
          />
        </div>
      </section>

      <FeaturedProjects />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
