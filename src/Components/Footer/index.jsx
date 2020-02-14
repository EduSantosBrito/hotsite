import React from 'react';
import { FlexContainer } from '../../Shared/styled';
import RightSpacedLink from './styled';

function Footer() {
    return (
        <FlexContainer alignItems='center' justifyContent='center' width='100%'>
            <FlexContainer width='300px' justifyContent='space-evenly'>
                <a href='https://heartdevs.com'>
                    <img src='/heart.svg' width='80px' alt='He4rt Developers Logo' />
                </a>
                <RightSpacedLink href='https://twitter.com/edusantosbrito'>
                    <img src='/twitter.svg' width='40px' alt='He4rt Developers Logo' />
                </RightSpacedLink>
                <a href='https://www.linkedin.com/in/eduardosantosbrito/'>
                    <img src='/linkedin.svg' width='40px' alt='He4rt Developers Logo' />
                </a>
            </FlexContainer>
        </FlexContainer>
    );
}

export default Footer;
