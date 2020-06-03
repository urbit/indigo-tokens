// Use 6-digit hex for all colors
const toHexIntStr = (n: number) => (~~(n * 255)).toString(16);
const white = '#FFFFFF';
const black = '#000000';

const scales = {
  red: [] as string[],
  yellow: [] as string[],
  gray: [] as string[],
  green: [] as string[],
  blue: [] as string[],
  purple: [] as string[],
};

scales.red = [
  '#C2111B', // 8
  '#D12228', // 7
  '#DE2A2F', // 6
  '#FF4036', // 5
  '#F95251', // 4
  '#ED7374', // 3
  '#F59B9B', // 2
  '#FFCED3', // 1
  '#FFEBEF', // 0
];

scales.yellow = [
  '#FF6800', // 8
  '#FF8A00', // 7
  '#FF9C00', // 6
  '#FFBE00', // 5
  '#FFC800', // 4
  '#FFD342', // 3
  '#FFDF7B', // 2
  '#FFEBAF', // 1
  '#FFF8DF', // 0
];

scales.gray = [
  '#222222', // 8
  '#333333', // 7
  '#555555', // 6
  '#808080', // 5
  '#999999', // 4
  '#AAAAAA', // 3
  '#CCCCCC', // 2
  '#EEEEEE', // 1
  '#F4F4F4', // 0
];

scales.green = [
  '#005C37', // 8
  '#007C4C', // 7
  '#008D58', // 6
  '#0AAE6F', // 5
  '#45BA85', // 4
  '#6AC69A', // 3
  '#97D6B6', // 2
  '#C0E6D2', // 1
  '#E5F5ED', // 0
];

scales.blue = [
  '#0B3DA8', // 8
  '#005CC9', // 7
  '#006EDB', // 6
  '#008EFE', // 5
  '#289EFF', // 4
  '#56AFFE', // 3
  '#89C6FF', // 2
  '#B8DCFF', // 1
  '#E2F1FF', // 0
];

scales.purple = [
  '#4110CF', // 8
  '#5B08EA', // 7
  '#6C15EF', // 6
  '#8928FF', // 5
  '#9D52FF', // 4
  '#B176FF', // 3
  '#C8A0FF', // 2
  '#DEC7FF', // 1
  '#F3E8FF', // 0
];

const accent = {
  red: scales.red[5],
  yellow: scales.yellow[4],
  green: scales.green[5],
  blue: scales.blue[4],
  purple: scales.purple[4],
};

const foreground = {
  // Black
  black: black,
  black8: black + toHexIntStr(0.8),
  black3: black + toHexIntStr(0.3),
  // White
  white: white,
  white8: white + toHexIntStr(0.8),
  white4: white + toHexIntStr(0.4),
};

const background = {
  black: black,
  white: white,
  lightGrey: '#F4F4F4',
  silver: '#CCCCCC',
  darkGray: '#222222',
};

const special = {
  // Pimrary focus color
  primary: accent.blue,
  primary8: accent.blue + toHexIntStr(0.8),
  primary3: accent.blue + toHexIntStr(0.3),
  // Error color
  error: accent.red,
  error8: accent.red + toHexIntStr(0.8),
  error3: accent.red + toHexIntStr(0.3),
  // caution color
  caution: accent.yellow,
  caution8: accent.yellow + toHexIntStr(0.8),
  caution3: accent.yellow + toHexIntStr(0.3),
  // Success color for successful validation checks
  success: accent.green,
  success8: accent.green + toHexIntStr(0.8),
  success3: accent.green + toHexIntStr(0.3),
};

const colors = {
  ...accent,
  ...foreground,
  ...background,
  ...special,
};

export type Colors = typeof colors;
export default colors;
