import { tokens } from "@/configs/vanilla.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const socialsStyle = style({
  display: "flex",
  gap: tokens.space.sm,
  justifyContent: "center",
  alignItems: "center",
});

export const socialItemStyle = style({
  width: "40px",
  height: "40px",
  borderRadius: tokens.radii.xs,
  backgroundColor: tokens.colors.blueGray,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(`${socialItemStyle} > svg`, {
  height: "20px",
  width: "20px",
});
