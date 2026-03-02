import { tokens } from "@/configs/vanilla.css";
import { style } from "@vanilla-extract/css";

export const profileCardStyle = style({
  width: "40%",
  minWidth:"400px",
  textAlign: "center",
});

export const profileImageStyle = style({
  borderRadius: tokens.radii.md,
});

export const detailsContainerStyle = style({
  backgroundColor: tokens.colors.white,
  borderRadius: tokens.radii.md,
  marginTop: "-104px",
  paddingTop: "100px",
});

export const profileDetailsTileStyle =  style({
    fontSize: tokens.size.xl,
    margin: `${tokens.space.md} 0`
})

export const profileDetailsSubTileStyle =  style({
    margin: `${tokens.space.md} 0`,
    opacity: '0.5'
})
