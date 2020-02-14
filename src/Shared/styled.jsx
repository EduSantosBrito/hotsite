import styled from 'styled-components';
import theme from '../theme';

export const FlexContainer = styled.div`
    margin: ${({ margin }) => margin || theme.spacing(0)};
    padding: ${({ padding }) => padding || theme.spacing(0)};
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const GridContainer = styled.div`
    margin: ${({ margin }) => margin || theme.spacing(0)};
    padding: ${({ padding }) => padding || theme.spacing(0)};
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    display: grid;
    grid-template-columns: ${({ columns }) => columns || '1fr'};
    grid-template-rows: ${({ rows }) => rows || '1fr'};
`;

export const BackgroundContainer = styled(FlexContainer)`
    background-color: ${theme.palette.background};
`;

export const ContentContainer = styled(GridContainer)`
    max-width: 1200px;
`;
