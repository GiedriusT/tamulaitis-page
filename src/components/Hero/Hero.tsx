import React from 'react';
import { WHO_I_AM } from '../../constants';
import S from './Hero.module.scss';

function Hero() {
  return (
    <section className={S.heroContainer}>
      <h1 className={S.heroTitle}>{WHO_I_AM}</h1>
    </section>
  );
}

export default Hero;
