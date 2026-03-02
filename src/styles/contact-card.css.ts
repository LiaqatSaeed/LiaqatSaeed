import { tokens } from "@/configs/vanilla.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const contactCardContainerStyle = style({
  padding: tokens.space.lg,
});

export const contactCardWrapperStyle = style({
  backgroundColor: tokens.colors.blueGray,
  borderRadius: tokens.radii.md,
  padding: tokens.space.lg
});

export const contactCardStyle = style({
  display: 'flex',
  marginBottom: tokens.space.md,
  paddingBottom: tokens.space.md,
  borderBottom: `${tokens.border.base} ${tokens.colors.lightGray}`,
  alignItems: "center"
});

export const contactCardLabelStyle = style({
  borderRadius: tokens.radii.md,
  opacity: "50%",
});

export const contactCardDataStyle = style({
  width: '100%',
  textAlign: 'left',
  paddingLeft: '22px'
});

globalStyle(`${contactCardStyle} > svg`, {
  height: "20px",
  width: "20px",
});
