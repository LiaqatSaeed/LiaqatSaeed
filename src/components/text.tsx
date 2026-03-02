import { textRecipe } from "@/styles";
import cx from "classnames";

interface Map {
  [key: string]: string;
}

type TextElements =
  | "span"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "li";

const tagsVariant: Map = {
  display: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "span",
  body3: "p",
};

export type TextVariants =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2"
  | "body3";

interface ITextProps {
  variant: TextVariants;
  bold?: string;
  font?: string;
  size?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Text = ({
  variant,
  children,
  className,
  size,
  font,
  bold,
}: ITextProps) => {
  let tag = tagsVariant[variant] as keyof Pick<
    JSX.IntrinsicElements,
    TextElements
  >;

  const Tag = tag;

  return (
    <Tag
      className={cx(
        textRecipe({
          variant,
        }),
        className
      )}
    >
      {children}
    </Tag>
  );
};
