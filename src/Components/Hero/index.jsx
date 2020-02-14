import React from 'react';
import { FlexContainer } from '../../Shared/styled';
import { HeroContainer, Subtitle, Title } from './styled';

function Hero() {
    return (
        <HeroContainer columns='1fr' width='100%' height='100%'>
            <FlexContainer flexDirection='column' height='100%'>
                <Title>Meu website</Title>
                <Subtitle>Em breve</Subtitle>
            </FlexContainer>
        </HeroContainer>
    );
}

export default Hero;
