import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const colors = {
  black: `#000`,
  white: `#fff`,
  blueGray: '#F2F5F9',
  orange: '#FF9C1B',
  fireEngineRed: '#E80505',
  lightGray: "#E3E3E3",
};

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

export const size = {
  zero: `0`,
  xs: `0.25rem`,
  sm: `0.5rem`,
  md: `1rem`,
  lg: `1.5rem`,
  xl: `1.75rem`,
  xxl: `2.5rem`,
  full: '100%'
};

// Rest of the imports and design tokens...

export const vars = createThemeContract({
  colors: {
    primary: ``,
    background: ``,
    ...colors,
  },
  font: {
    body: ``,
  },
  fontSize: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
    xxl: ``,
    xxxl: ``,
    xxxxl: ``
  },
  fontWeight: {
    normal: "normal",
    reqular: "",
    bold: "",
  },
  space: size,
  size,
  boxShadow: {
    sm: ``,
    md: ``,
    lg: ``,
  },
  radii: {
    sm: ``,
    md: ``,
    lg:``,
    full: ``,
  },
});

const commonVars = {
  font: {
    body: SYSTEM_FONT_STACK,
  },
  fontWeight: {
    normal: "normal",
    reqular: "400",
    bold: "700",
  },
  space: size,
  size,
  fontSize: {
    xxs: '0.75',
    xs: `0.8rem`,
    sm: `0.875rem`,
    md: `1rem`,
    lg: `1.25rem`,
    xl: `1.5rem`,
    xxl: `1.75rem`,
    xxxl: `2rem`,
    xxxxl: `2.5rem`
  },
  border: {
    base: "1px solid",
    solid: "2px solid",
  },
  boxShadow: {
    sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
    lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,
  },
  radii: {
    ...size
  },
};

// Rest of the imports, design tokens, and theme contract...

export const lightThemeVars = createGlobalTheme(":root", {
  colors: {
    primary: colors.black,
    background: colors.blueGray,    
    ...colors,
  },
  ...commonVars,
});

export const darkThemeVars = createGlobalTheme(":root", {
  colors: {
    primary: colors.black,
    background: colors.blueGray,  
    ...colors,
  },
  ...commonVars,
});

// TODO: will be Logically handle through App Context
const isLightTheme = true;
export const tokens = isLightTheme ? lightThemeVars : darkThemeVars;
