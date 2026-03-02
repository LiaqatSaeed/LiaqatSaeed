import {Pacifico} from "next/font/google"
import cx from "classnames"
import { headerStyle, headerTitleStyle } from "@/styles";
import { Text } from "@/components";

const titleFont = Pacifico({
    weight:"400",
    subsets: ["latin"]
})

export const Header = () => (
  <div className={cx(titleFont.className, headerStyle)}>
    <Text variant="h2">Liaqat<span className={headerTitleStyle}>Saeed</span></Text>
    <div></div>
  </div>
);
