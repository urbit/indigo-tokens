const fs = require("fs");
const toTachyons = require("@theme-ui/tachyons");
const tachyonsGenerator = require("tachyons-generator");
const themeAdapter = require("./tachyons-adapter");

const generate = async () => {
  const indigoTheme = await themeAdapter();
  const { css, min } = await tachyonsGenerator(
    toTachyons(indigoTheme)
  ).generate();

  fs.writeFileSync("./dist/tachyons-indigo.css", css);
  fs.writeFileSync("./dist/tachyons-indigo.min.css", min);

  return css;
};

generate();
