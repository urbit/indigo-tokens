import baseStyled, { ThemedStyledInterface } from 'styled-components';
import colors from './colors';
import reset from './reset';
import core from './core';

const theme = {
  // color, background-color, border-color
  colors: {
    util: '#FFFF00',
    // Black, white, grays
    black: colors.white,
    gray8: colors.gray0,
    gray7: colors.gray1,
    gray6: colors.gray2,
    gray5: colors.gray3,
    gray4: colors.gray4,
    gray3: colors.gray5,
    gray2: colors.gray6,
    gray1: colors.gray7,
    gray0: colors.gray8,
    white: colors.black,
    // Red
    red4: colors.red0,
    red3: colors.red1,
    red2: colors.red2,
    red1: colors.red3,
    red0: colors.red4,
    // Yellow
    yellow4: colors.yellow0,
    yellow3: colors.yellow1,
    yellow2: colors.yellow2,
    yellow1: colors.yellow3,
    yellow0: colors.yellow4,
    // Green
    green4: colors.green0,
    green3: colors.green1,
    green2: colors.green2,
    green1: colors.green3,
    green0: colors.green4,
    // Blue
    blue4: colors.blue0,
    blue3: colors.blue1,
    blue2: colors.blue2,
    blue1: colors.blue3,
    blue0: colors.blue4,
  },
  ...core,
  reset: reset,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
