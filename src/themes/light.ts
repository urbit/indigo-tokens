import colors from '../colors';
import core from '../core';

const theme = {
  colors: {
    ...colors,
    primary: colors.blue,
    caution: colors.red,
    none: 'rgba(0,0,0,0)',
  },
  ...core,
};

export default theme;
