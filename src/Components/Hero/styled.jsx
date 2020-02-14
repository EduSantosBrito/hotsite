import styled from 'styled-components';
import theme from '../../theme';
import { GridContainer, FlexContainer } from '../../Shared/styled';

export const Title = styled.h1`
    font-size: 6rem;
    color: ${theme.palette.secondary};
    padding: 0;
    margin: 0;
    font-weight: 100;
    ${theme.breakpoints.down('md')} {
        font-size: 8rem;
    }
    ${theme.breakpoints.down('sm')} {
        font-size: 5rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 4rem;
    color: ${theme.palette.primary};
    font-weight: 500;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: ${theme.spacing(2)};
    ${theme.breakpoints.down('md')} {
        font-size: 6rem;
    }
    ${theme.breakpoints.down('sm')} {
        font-size: 3rem;
    }
`;

export const HeroContainer = styled(GridContainer)`
    ${theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
    }
`;

export const DrawContainer = styled(FlexContainer)`
    ${theme.breakpoints.down('md')} {
        display: none;
    }
`;

export const TitleContainer = styled(FlexContainer)`
    ${theme.breakpoints.down('md')} {
        justify-content: center;
    }
`;
