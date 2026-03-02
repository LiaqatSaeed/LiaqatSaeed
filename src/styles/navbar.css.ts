import { tokens } from "@/configs/vanilla.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const navbarStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  height: '100px'
});

export const navbarlistStyle = style({
  columnGap: "40px",
  backgroundColor: "#F2F7FC",
  display: "flex",
  padding: `${tokens.space.sm} ${tokens.space.lg}`,
  boxShadow: `${tokens.size.zero} ${tokens.size.zero} 4px 1px #00000012`,
  borderRadius: tokens.radii.md,
  margin: `${tokens.space.sm} ${tokens.space.zero}`
});

export const navbarItemStyle = recipe({
  base: {
    width: "67px",
    height: "67px",
    backgroundColor: "#E1E8EF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: tokens.radii.md,
    overflow: 'hidden',
  },
  variants: {
    active: {
      true: {
        backgroundImage: `-webkit-linear-gradient(${tokens.colors.orange}, ${tokens.colors.fireEngineRed})`,
        color: tokens.colors.white
      },
      false: {},
    },
  },

  defaultVariants: {
    active: false,
  },
});

export const navbarItemLinkStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: tokens.size.full,
  height: tokens.size.full,
  color: 'inherit',
  flexDirection:"column",
  fontSize: tokens.fontSize.xs,
  textDecoration: "none",
  gap: tokens.space.xs
});

globalStyle(`${navbarItemLinkStyle} > svg`, {
  height: "20px",
  width: "20px",
});
