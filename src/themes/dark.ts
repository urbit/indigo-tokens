import colors from '../colors';
import core from '../core';

const theme = {
  colors: {
    ...colors,
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
    red8: colors.red0,
    red7: colors.red1,
    red6: colors.red2,
    red5: colors.red3,
    red4: colors.red4,
    red3: colors.red5,
    red2: colors.red6,
    red1: colors.red7,
    red0: colors.red8,
    // Yellow
    yellow8: colors.yellow0,
    yellow7: colors.yellow1,
    yellow6: colors.yellow2,
    yellow5: colors.yellow3,
    yellow4: colors.yellow4,
    yellow3: colors.yellow5,
    yellow2: colors.yellow6,
    yellow1: colors.yellow7,
    yellow0: colors.yellow8,
    // Green
    green8: colors.green0,
    green7: colors.green1,
    green6: colors.green2,
    green5: colors.green3,
    green4: colors.green4,
    green3: colors.green5,
    green2: colors.green6,
    green1: colors.green7,
    green0: colors.green8,
    // Blue
    blue8: colors.blue0,
    blue7: colors.blue1,
    blue6: colors.blue2,
    blue5: colors.blue3,
    blue4: colors.blue4,
    blue3: colors.blue5,
    blue2: colors.blue6,
    blue1: colors.blue7,
    blue0: colors.blue8,
    // Utils
    primary: colors.blue,
    caution: colors.red,
    none: 'rgba(0,0,0,0)',
  },
  ...core,
};

export default theme;
