import { tokens } from "@/configs/vanilla.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  height: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: `${tokens.space.md} 0`
});

export const headerTitleStyle = style({
  backgroundImage: `-webkit-linear-gradient(${tokens.colors.orange}, ${tokens.colors.fireEngineRed})`,
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: `0 ${tokens.space.xs}`,
  color: tokens.colors.fireEngineRed
});
