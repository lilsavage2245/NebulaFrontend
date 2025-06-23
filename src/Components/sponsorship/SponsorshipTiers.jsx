// src/Pages/collaborate/components/SponsorshipTiers.jsx

import React from 'react';
import TierCard from './TierCard';
import { Download, ShieldCheck, Users, Award, Star } from 'lucide-react';

export default function SponsorshipTiers() {
  const tiers = [
    {
      tierIcon: <Award className="w-24 h-24 text-black" />,
      tierLabel: 'PLATINUM',
      tierType: 'SPONSOR',
      amount: '€ 5,000 - 9,999',
      benefits: ['Prominent Branding', 'Exclusive Events', 'Recognition'],
      buttonText: 'Choose Gold Tier',
      bgColor: '#FFD700',
    },
    {
      tierIcon: <ShieldCheck className="w-24 h-24 text-black" />,
      tierLabel: 'GOLD',
      tierType: 'SPONSOR',
      amount: '€ 5,000 - 9,999',
      benefits: ['Enhanced Branding', 'Events Invitations', 'Website and Social Media Visibility'],
      buttonText: 'Choose Silver Tier',
      bgColor: '#C0C0C0',
    },
    {
      tierIcon: <Star className="w-24 h-24 text-black" />,
      tierLabel: 'SILVER',
      tierType: 'SPONSOR',
      amount: '€ 1,000 - 4,999',
      benefits: ['Social Media Mention', 'Event Acknowledgement', 'Brand Placement'],
      buttonText: 'Choose Bronze Tier',
      bgColor: '#CD7F32',
    },
    {
      tierIcon: <Users className="w-24 h-24 text-black" />,
      tierLabel: 'BRONZE',
      tierType: 'SPONSOR',
      amount: 'Under €1,000',
      benefits: ['Name on Community Wall', 'Social Media Thank you', 'Website Acknowledgement'],
      buttonText: 'Choose Community Tier',
      bgColor: '#70B5C6',
    },
  ];

  return (
    <section className="w-full max-w-[1272px] mx-auto px-4 py-20 flex flex-col items-center gap-12">
      {/* Heading Section */}
      <div className="bg-yellow-300/70 w-full rounded-xl text-center py-8 px-4 flex flex-col gap-6">
        <h2 className="text-[40px] font-bold font-poppins text-black">Our Sponsorship Tier</h2>
        <p className="text-[32px] font-light text-black font-poppins">
          Choose a sponsorship level that matches your vision for empowering future tech leaders.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="w-full bg-white p-8 rounded-xl grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {tiers.map((tier, index) => (
          <TierCard key={index} {...tier} />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-[680px] justify-right items-start w-full">
        <button className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow text-[16px] font-light font-poppins">
          <Download className="w-8 h-8" />
          Download Sponsorship Brochure
        </button>
        <button className="bg-black/20 rounded-xl px-6 py-4 text-[16px]  font-light font-poppins text-black">
          Contact our Team
        </button>
      </div>
    </section>
  );
}
