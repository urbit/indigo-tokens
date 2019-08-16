const theme = require("../index");

const themeAdapter = async () => {
  let colors = new Object();
  await Object.keys(theme.colors).map(colorKey => {
    if (typeof theme.colors[colorKey] === "string") {
      colors[colorKey] = theme.colors[colorKey];
    } else if (Array.isArray(theme.colors[colorKey])) {
      theme.colors[colorKey].map((color, i) => {
        colors[`${colorKey}${i}`] = color;
      });
    }
  });

  let lineHeight = [];
  await Object.keys(theme.lineHeights).map(heightKey => {
    lineHeight.push(theme.lineHeights[heightKey]);
  });

  return {
    lineHeight,
    customMedia: [{ m: 550 / 16 }, { l: 750 / 16 }, { xl: 960 / 16 }],
    colors
  };
};

module.exports = themeAdapter;
