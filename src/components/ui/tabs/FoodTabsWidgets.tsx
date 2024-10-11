import { Tab, Tabs, TabsProps, Typography } from "@mui/material";
import { FC, useEffect, useRef } from "react";

interface FoodTabsWidgetsProps extends TabsProps {
  tabList: string[];
  value: number;
}

const FoodTabsWidgets: FC<FoodTabsWidgetsProps> = (props) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentTab = tabsRef.current?.querySelector(
      `[role="tab"]:nth-child(${props.value + 1})`
    );
    if (currentTab) {
      currentTab.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [props.value]);

  return (
    <Tabs
      {...props}
      selectionFollowsFocus
      variant="scrollable"
      allowScrollButtonsMobile
      scrollButtons={false}
      ref={tabsRef}
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
    >
      {props.tabList.map((tab) => (
        <Tab key={tab} label={<Typography variant="h2">{tab}</Typography>} />
      ))}
    </Tabs>
  );
};

export default FoodTabsWidgets;
