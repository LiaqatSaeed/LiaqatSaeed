"use client";

import { NavBarIcon } from "@/assets/icons/gernal";
import {
    navbarItemLinkStyle,
    navbarItemStyle,
    navbarStyle,
    navbarlistStyle,
} from "@/styles";
import { ROUTES } from "@/utils/consts";
import cx from "classnames";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "@/components";

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});

interface INavbarItemProps {
  children: React.ReactNode;
  name: string;
  active?: boolean;
  url: string;
}

export const NavbarItem: React.FC<INavbarItemProps> = ({
  children,
  name,
  active,
  url,
}: INavbarItemProps) => {
  return (
    <li className={navbarItemStyle({ active })}>
      <Link href={url} className={cx(navbarItemLinkStyle, raleway.className)}>
        {children} <Text variant="body3">{name}</Text>
      </Link>
    </li>
  );
};

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={navbarStyle}>
      <ul className={navbarlistStyle}>
        {ROUTES.map(({name, url}, index) => (
          <NavbarItem url={url} key={index} name={name} active={pathname === url}>
            <NavBarIcon icon={name} fill="currentColor" fillOpacity={pathname === url ? "1" : "0.5"} />
          </NavbarItem>
        ))}
      </ul>
    </nav>
  );
};
