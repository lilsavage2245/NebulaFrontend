// src/Pages/collaborate/IndustryPartnership.jsx
import React from 'react';
import HeroMentor from '../../Components/HeroMentor';
import MentorBenefit from '../../Components/benefit/MentorBenefit';
import MentorType from '../../Components/type/MentorType';
import MentorTestimonial from '../../Components/MentorTestimonials';
import MentorStep from '../../Components/step/MentorStep';
import MentorForm from '../../Components/MentorForm';
import MentorFaqs from '../../Components/MentorFaqs';
import MentorCta from '../../Components/MentorCta';

const IndividualMentors = () => {
  return (
    <>
    <HeroMentor />
    <MentorBenefit />
    <MentorType />
    <MentorTestimonial />
    <MentorStep />
    <MentorForm />
    <MentorFaqs />
    <MentorCta />
    </>
  );
};

export default IndividualMentors;
