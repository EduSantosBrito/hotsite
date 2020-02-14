import React from 'react';
import { HeaderContainer, Logo, LogoContainer, PinkLogoText, WhiteLogoText, LinkWithoutDecoration } from './styled';

function Navbar() {
    return (
        <HeaderContainer columns='1fr 1fr'>
            <LogoContainer width='100%' justifyContent='flex-start'>
                <LinkWithoutDecoration href='https://brito.top'>
                    <Logo>
                        <WhiteLogoText>brito</WhiteLogoText>
                        <PinkLogoText>.top</PinkLogoText>
                    </Logo>
                </LinkWithoutDecoration>
            </LogoContainer>
        </HeaderContainer>
    );
}
export default Navbar;
