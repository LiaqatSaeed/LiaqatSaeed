"use client"

import { Text } from "@/components";
import { Title } from "@/components/sections/title";
import { sectionDetailsStyle, summaryStyle } from "@/styles";
import { Raleway } from "next/font/google";
import cx from "classnames";
import { useDataContext } from "@/context/data-provider";

const raleway = Raleway({
  subsets: ["latin"],
});

export default function Home() {
  const {data} = useDataContext();
  return (
    <div className={sectionDetailsStyle}>
      <Title title="About Me" />
      <Text variant="display" className={cx(raleway.className, summaryStyle)}>{data.summary}</Text>
      <Text variant="h3" className={cx(raleway.className, summaryStyle)}>Objectives</Text>
      <Text variant="display" className={cx(raleway.className, summaryStyle)}>{data.about_me}</Text>
      <Text variant="h3" className={cx(raleway.className, summaryStyle)}>What I do!</Text>

    </div>
  );
}
