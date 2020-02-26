import baseStyled, { ThemedStyledInterface } from 'styled-components';
import colors from './colors';
import reset from './reset';
import core from './core';

const theme = {
  colors: { ...colors },
  ...core,
  reset: reset,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
