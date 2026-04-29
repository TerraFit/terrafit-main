// src/pages/Team.tsx
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Lightbulb, Cog, Users, Leaf, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: "Didier Duc",
    role: "Executive Director & Founder",
    location: "South Africa",
    focus: "African Market Strategy",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69365324041dfb5bfc0596f8/feee44213_didier-duc.png",
    ventures: ["Absolute Owl", "SensCare", "JBay Zebra Lodge", "TerraFit Trail"],
    bio: "Didier brings over 15 years of entrepreneurial experience in African tourism and hospitality, with a passion for creating sustainable business models that empower local communities.",
    linkedin: "#"
  },
  {
    name: "Alex Darko",
    role: "Non-Executive Chairman",
    location: "South Africa",
    focus: "Strategic Advisory & Governance",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69365324041dfb5bfc0596f8/8855a226f_AlexDarko.png",
    ventures: ["SensCare", "Nkululeko Leadership"],
    bio: "Director at Nkululeko Leadership Consulting, specializing in organizational culture, leadership, and change management. With extensive global experience across Europe, USA, and Africa, Alex held senior positions at Dun & Bradstreet Corporation (Director UK Shared Services, Director of Finance Europe) and served as CIO at AngloGold Ashanti.",
    linkedin: "#"
  },
  {
    name: "Klemen Zupanc",
    role: "Executive Director & Technical Lead",
    location: "Slovenia",
    focus: "Engineering & Manufacturing",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69365324041dfb5bfc0596f8/7354ac02b_KlemenZupanc.jpg",
    ventures: ["ZUPI Engineering", "Vevrca Parks"],
    bio: "Klemen leads all technical operations, bringing 20+ years of adventure park engineering expertise from Europe's leading manufacturers to the African market.",
    linkedin: "#"
  }
];

const advisors = [
  {
    name: "Industry Advisory Board",
    members: [
      { name: "Sarah Nkosi", title: "Tourism Development Expert", region: "Cape Town, SA" },
      { name: "Dr. James Omondi", title: "Sustainable Design Specialist", region: "Nairobi, Kenya" },
      { name: "Elena Varga", title: "European Safety Standards", region: "Ljubljana, Slovenia" }
    ]
  }
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Local Intelligence",
    description: "Deep market understanding of African tourism, regulations, and consumer behavior"
  },
  {
    icon: Cog,
    title: "Engineering Excellence",
    description: "European precision with 20+ years of adventure park experience"
  },
  {
    icon: Users,
    title: "Community Design",
    description: "Parks designed as social landmarks and community gathering spaces"
  },
  {
    icon: Leaf,
    title: "Sustainable Models",
    description: "Business frameworks that create lasting value for operators and communities"
  }
];

export default function Team() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#74A14D] font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Meet Our Team
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A unique blend of African entrepreneurship and European engineering expertise, 
              united by a shared vision for adventure tourism excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-[#0D1A0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-terra-green/30 transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Location badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-terra-green" />
                    <span className="text-xs font-medium text-white/80">{member.location}</span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-terra-green text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <span className="text-white/40">Focus:</span>
                    <span className="text-terra-green font-medium">{member.focus}</span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Affiliated Ventures */}
                  <div className="mb-6">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Affiliated Ventures</div>
                    <div className="flex flex-wrap gap-2">
                      {member.ventures.map((venture) => (
                        <span
                          key={venture}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-terra-green/10 border border-terra-green/20 rounded-full text-xs font-medium text-terra-green"
                        >
                          <Building2 className="w-3 h-3" />
                          {venture}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-terra-green transition-colors"
                  >
                    <Linkedin size={14} />
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Approach */}
      <section className="py-24 bg-terra-green/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-terra-green font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              African Vision × Slovenian Precision
            </h2>
            <p className="text-xl text-terra-green font-medium">= Unbeatable Parks</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:border-terra-green/20 transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-terra-green/10 rounded-2xl flex items-center justify-center mb-4 border border-terra-green/20">
                  <pillar.icon className="w-7 h-7 text-terra-green" />
                </div>
                <h3 className="font-semibold text-white mb-1">{pillar.title}</h3>
                <p className="text-white/40 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board 
      <section className="py-24 bg-[#0D1A0D]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-terra-green font-semibold text-sm uppercase tracking-wider">Expert Guidance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Advisory Board
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our team is supported by an esteemed group of industry experts
            </p>
          </motion.div>

          {advisors.map((group) => (
            <div key={group.name} className="grid md:grid-cols-3 gap-6">
              {group.members.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5"
                >
                  <div className="w-16 h-16 mx-auto bg-terra-green/10 rounded-full flex items-center justify-center mb-4 border border-terra-green/20">
                    <span className="text-terra-green text-xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-terra-green text-sm mb-2">{member.title}</p>
                  <p className="text-white/40 text-xs">{member.region}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section> */}

      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-br from-terra-dark-green via-terra-green to-terra-light-green">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Join Our Network?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              We're always looking for passionate entrepreneurs, engineers, and adventure enthusiasts 
              to join our growing team.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-terra-dark-green font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/90 transition-all group"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
