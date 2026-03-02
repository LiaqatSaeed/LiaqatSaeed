import {
  detailsContainerStyle,
  profileCardStyle,
  profileDetailsSubTileStyle,
  profileDetailsTileStyle,
  profileImageStyle,
} from "@/styles";
import Image from "next/image";
import cx from "classnames";
import { Raleway } from "next/font/google";
import { ContactCard } from "./contact-card";
import { Socials } from "./socials";
import { Text } from "@/components";

const railwayTitle = Raleway({
  weight: "600",
  subsets: ["latin"],
});

const railwaySubTitle = Raleway({
  weight: "400",
  subsets: ["latin"],
});

export const ProfileCard = () => (
  <div className={profileCardStyle}>
    <Image
      src="/liaqat_saeed.jpeg"
      width={200}
      height={200}
      className={profileImageStyle}
      alt="Liaqat Saeed"
    />
    <div className={cx(detailsContainerStyle)}>
      <Text
        variant="h2"
        className={cx(railwayTitle.className, profileDetailsTileStyle)}
      >
        Liaqat Saeed
      </Text>
      <Text
        variant="display"
        className={cx(railwaySubTitle.className, profileDetailsSubTileStyle)}
      >
        FullStack Engineer
      </Text>
      <Socials />
      <ContactCard />
    </div>
  </div>
);
