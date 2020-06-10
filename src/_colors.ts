// Use 6-digit hex for all colors
const toHexIntStr = n =>
  (~~(n * 255))
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
const white = '#FFFFFF';
const black = '#000000';

// const scales = {
//   red: [] as string[],
//   yellow: [] as string[],
//   gray: [] as string[],
//   green: [] as string[],
//   blue: [] as string[],
//   purple: [] as string[],
// };

// scales.red = [
//   '#C2111B', // 8
//   '#D12228', // 7
//   '#DE2A2F', // 6
//   '#FF4036', // 5
//   '#F95251', // 4
//   '#ED7374', // 3
//   '#F59B9B', // 2
//   '#FFCED3', // 1
//   '#FFEBEF', // 0
// ];

// scales.yellow = [
//   '#FF6800', // 8
//   '#FF8A00', // 7
//   '#FF9C00', // 6
//   '#FFBE00', // 5
//   '#FFC800', // 4
//   '#FFD342', // 3
//   '#FFDF7B', // 2
//   '#FFEBAF', // 1
//   '#FFF8DF', // 0
// ];

// scales.gray = [
//   '#222222', // 8
//   '#333333', // 7
//   '#555555', // 6
//   '#808080', // 5
//   '#999999', // 4
//   '#AAAAAA', // 3
//   '#CCCCCC', // 2
//   '#EEEEEE', // 1
//   '#F4F4F4', // 0
// ];

// scales.green = [
//   '#005C37', // 8
//   '#007C4C', // 7
//   '#008D58', // 6
//   '#0AAE6F', // 5
//   '#45BA85', // 4
//   '#6AC69A', // 3
//   '#97D6B6', // 2
//   '#C0E6D2', // 1
//   '#E5F5ED', // 0
// ];

// scales.blue = [
//   '#0B3DA8', // 8
//   '#005CC9', // 7
//   '#006EDB', // 6
//   '#008EFE', // 5
//   '#289EFF', // 4
//   '#56AFFE', // 3
//   '#89C6FF', // 2
//   '#B8DCFF', // 1
//   '#E2F1FF', // 0
// ];

// scales.purple = [
//   '#4110CF', // 8
//   '#5B08EA', // 7
//   '#6C15EF', // 6
//   '#8928FF', // 5
//   '#9D52FF', // 4
//   '#B176FF', // 3
//   '#C8A0FF', // 2
//   '#DEC7FF', // 1
//   '#F3E8FF', // 0
// ];

const accent = {
  red: scales.red[5],
  yellow: scales.yellow[4],
  green: scales.green[5],
  blue: scales.blue[4],
  purple: scales.purple[4],
};

const background = {
  bg: white,
};

const foreground = {
  // Black
  black: black,
  black80: black + toHexIntStr(0.8),
  black30: black + toHexIntStr(0.3),
  black05: black + toHexIntStr(0.05),
  // White
  white: white,
  white80: white + toHexIntStr(0.8),
  white40: white + toHexIntStr(0.4),
  white05: white + toHexIntStr(0.05),
  // Pimrary focus color
  blue: accent.blue,
  primary: accent.blue,
  primary80: accent.blue + toHexIntStr(0.8),
  primary30: accent.blue + toHexIntStr(0.3),
  primary05: accent.blue + toHexIntStr(0.05),
  // Error color
  red: accent.red,
  error: accent.red,
  error80: accent.red + toHexIntStr(0.8),
  error30: accent.red + toHexIntStr(0.3),
  error05: accent.red + toHexIntStr(0.05),
  // Caution color
  yellow: accent.yellow,
  caution: accent.yellow,
  caution80: accent.yellow + toHexIntStr(0.8),
  caution30: accent.yellow + toHexIntStr(0.3),
  caution05: accent.yellow + toHexIntStr(0.05),
  // Success color for successful validation checks
  green: accent.green,
  success: accent.green,
  success80: accent.green + toHexIntStr(0.8),
  success30: accent.green + toHexIntStr(0.3),
  success05: accent.green + toHexIntStr(0.05),
};

const colors = [
  { name: 'white', base: '#FFFFFF' },
  { name: 'black', base: '#000000' },
  { name: 'red', base: '#FF4036' },
  { name: 'orange', base: '#FF6800' },
  { name: 'yellow', base: '#FFC800' },
  { name: 'green', base: '#0AAE6F' },
  { name: 'blue', base: '#289EFF' },
  { name: 'purple', base: '#9D52FF' },
];

const shades = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];

const shadeToKey = f => {
  const s = f.toString(10).replace('.', '');
  return s.substr(s.length - 2);
};

const createScale = (color, shades) => {
  return shades.reduce((acc, shade) => {
    const key = shadeToKey(shade);
    acc[color.name + key] = color.base + toHexIntStr(shade);
    return acc;
  }, {});
};

const scales = colors.reduce((acc, color) => {
  acc = { ...acc, ...createScale(color, shades) };
  return acc;
}, {});

const colors = {
  scales: scales,
  ...foreground,
  ...background,
};

export type Colors = typeof colors;
export default colors;
