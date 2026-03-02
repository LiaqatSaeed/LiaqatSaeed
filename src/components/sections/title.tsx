import { sectionDetailsTitleStyle } from "@/styles";
import { Poppins } from "next/font/google";
import cx from "classnames";
import { Text } from "@/components/text";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

interface ITitleProps {
  title: string;
}
export const Title = ({ title }: ITitleProps) => (
  <Text variant="h1" className={cx(sectionDetailsTitleStyle, poppins.className)}>
    {title}
    <span></span>
  </Text>
);
