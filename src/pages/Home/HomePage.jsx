import React from 'react';
import Hero from '../../components/sections/Hero';
import Intro from '../../components/sections/Intro';
import ServicesList from '../../components/sections/ServicesList';
import Concepts from '../../components/sections/Concepts';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Process from '../../components/sections/Process';
import TechStack from '../../components/sections/TechStack';
import CtaBand from '../../components/sections/CtaBand';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import '../../components/sections/sections.css';

export function HomePage() {
  usePageMeta(
    null,
    'M.S Solutions is a digital solutions agency engineering custom web applications, e-commerce storefronts, mobile apps, and scalable SaaS platforms.'
  );
  useScrollReveal();

  return (
    <>
      <Hero />
      <Intro />
      <ServicesList />
      <Concepts />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <CtaBand title="Have a project in mind? Let's discuss your scope and architecture." />
    </>
  );
}

export default HomePage;
