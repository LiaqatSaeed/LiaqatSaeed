import { tokens } from "@/configs/vanilla.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const textRecipe = recipe({
  base: {
    margin: tokens.size.zero,
    padding: tokens.size.zero
  },
  variants: {
    variant: {
      body3: {
        fontSize: tokens.fontSize.xxs,
      },
      body2: {
        fontSize: tokens.fontSize.xs,
      },
      body1: {
        fontSize: tokens.fontSize.sm,
      },
      display: {
        fontSize: tokens.fontSize.md,
      },
      h5: {
        fontSize: tokens.fontSize.lg,
      },
      h4: {
        fontSize: tokens.fontSize.xl,
      },
      h3: {
        fontSize: tokens.fontSize.xxl,
      },
      h2: {
        fontSize: tokens.fontSize.xxxl,
      },
      h1: {
        fontSize: tokens.fontSize.xxxxl,
      },
    },
    
  },
  defaultVariants: {
    variant: "display"
  }

});
