// I little bit of JSS never hurts :)
const white = "#FFFFFF";
// const orginal = "#dc143c";
const black = "black";

const themeLight = {
  background: white,
  body: white,
  toggleBorder: black,
};

const themeDark = {
  background: black,
  body: black,
  toggleBorder: white,
};

const theme = (mode) => (mode === "dark" ? themeDark : themeLight);

export default theme;
