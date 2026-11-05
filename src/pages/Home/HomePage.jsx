import React from 'react';
import Hero from '../../components/sections/Hero';
import Intro from '../../components/sections/Intro';
import ServicesList from '../../components/sections/ServicesList';
import Concepts from '../../components/sections/Concepts';
import Process from '../../components/sections/Process';
import TechStack from '../../components/sections/TechStack';
import CtaBand from '../../components/sections/CtaBand';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import '../../components/sections/sections.css';

export function HomePage() {
  usePageMeta(null, 'M.S Solutions builds web applications, mobile apps and SaaS products for small schools and growing software businesses.');
  useScrollReveal();
  return (
    <>
      <Hero />
      <Intro />
      <ServicesList />
      <Concepts />
      <Process />
      <TechStack />
      <CtaBand />
    </>
  );
}

export default HomePage;
