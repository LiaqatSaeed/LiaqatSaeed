import { Facebook, Github, Instagram, LinkedIn, Twitter, Youtube } from "@/assets/icons/socials";
import { socialItemStyle, socialsStyle } from "@/styles";

interface ISocialItemProps {
  children: React.ReactNode;
}

export const SocialItem = ({ children }: ISocialItemProps) => (
  <div className={socialItemStyle}>{children}</div>
);

export const Socials = () => (
  <div className={socialsStyle}>
    <SocialItem>
      <LinkedIn />
    </SocialItem>
    <SocialItem>
      <Twitter />
    </SocialItem>
    <SocialItem>
      <Youtube />
    </SocialItem>
    <SocialItem>
      <Github />
    </SocialItem>
    <SocialItem>
      <Instagram />
    </SocialItem>
  </div>
);
