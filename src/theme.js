import createBreakpoints from './utils/breakpoints';

const spacingBase = 8;

function isValidSpacing(value) {
    return value || value === 0 || Number.isInteger(value);
}

const theme = {
    palette: {
        primary: '#EEBBC3',
        secondary: '#FFFFFE',
        background: '#232946',
    },
    spacing(top, right, bottom, left) {
        if (isValidSpacing(top) && isValidSpacing(right) && !isValidSpacing(bottom) && !isValidSpacing(left)) {
            return `${top * spacingBase}px ${right * spacingBase}px`;
        }
        if (isValidSpacing(top) && !isValidSpacing(right) && !isValidSpacing(bottom) && !isValidSpacing(left)) {
            return `${top * spacingBase}px`;
        }
        if (isValidSpacing(top) && isValidSpacing(right) && isValidSpacing(bottom) && isValidSpacing(left)) {
            return `${top * spacingBase}px ${right * spacingBase}px ${bottom * spacingBase}px ${left * spacingBase}px`;
        }
        throw new Error('Wrong spacing format');
    },
    breakpoints: createBreakpoints({}),
};

export default theme;
