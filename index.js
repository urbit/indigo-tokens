const theme = {
  colors: {
    black: "#000000",
    darkestGray: "#333333",
    darkGray: "#4d4d4d",
    gray: "#7f7f7f",
    midGray: "#b1b2b3",
    lightGray: "#e6e6e6",
    lightestGray: "#f9f9f9",
    white: "#ffffff",
    lightBlue: "#ecf6ff",
    blue: "#4330fc",
    darkBlue: "#190d7b",
    lightRed: "#f9d6ce",
    red: "#ee5432",
    darkRed: "#c10d30",
    lightGreen: "#bdebcc",
    green: "#2aa779",
    darkGreen: "#286e55",
    lightYellow: "#ffefc5",
    yellow: "#fcc440",
    darkYellow: "#ee892b",
  },
  fonts: {
    sans: `"Inter", "Inter UI", -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Arial, sans-serif`,
    mono: `"Source Code Pro", "Roboto mono", "Courier New", monospace`
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    regular: 400,
    bold: 600
  },
  lineHeights: {
    short: 1.333333,
    regular: 1.5,
    tall: 1.6
  },
  borders: ['none', '1px solid'],
  space: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 160, 288],
  radii: [0, 4],
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  breakpoints: ["768px", "1024px", "1440px"],

};

theme.breakpoints.small = theme.breakpoints[0];
theme.breakpoints.medium = theme.breakpoints[1];
theme.breakpoints.large = theme.breakpoints[2];

module.exports = theme;
