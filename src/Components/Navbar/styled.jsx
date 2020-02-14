import styled from 'styled-components';
import theme from '../../theme';
import { GridContainer, FlexContainer } from '../../Shared/styled';

export const Logo = styled.h1``;

export const LinkWithoutDecoration = styled.a`
    text-decoration: none;
`;

export const WhiteLogoText = styled.span`
    color: ${theme.palette.secondary};
`;

export const PinkLogoText = styled.span`
    color: ${theme.palette.primary};
`;

export const NavLink = styled.p`
    color: ${theme.palette.secondary};
    font-size: 1.25rem;
    font-weight: 300px;
`;

export const HeaderContainer = styled(GridContainer)`
    ${theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'logo' 'navbar';
    }
`;

export const LogoContainer = styled(FlexContainer)`
    ${theme.breakpoints.down('md')} {
        grid-area: logo;
        justify-content: center;
    }
`;

export const NavContainer = styled(FlexContainer)`
    ${theme.breakpoints.down('md')} {
        grid-area: navbar;
        justify-content: center;
    }
`;
