import { tokens } from "@/configs/vanilla.css";
import { style } from "@vanilla-extract/css";

export const bodyStyle = style({
  margin: 0,
  padding: "0 100px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: tokens.colors.background,
  height: '96vh',
});

export const mainStyle = style({
  background: tokens.colors.background,
  height: tokens.size.full
});

export const containerStyle = style({
    display: 'flex',
    columnGap: tokens.space.md,
    height: 'calc(100% - 100px)'
  });
  
