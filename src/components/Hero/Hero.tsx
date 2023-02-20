import React from 'react';
import { WHO_I_AM } from '../../constants';
import * as S from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <S.HeroContainer>
      <S.HeroTitle>{WHO_I_AM}</S.HeroTitle>
    </S.HeroContainer>
  );
};

export default Hero;
