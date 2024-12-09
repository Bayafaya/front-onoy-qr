import { Tab, Tabs, TabsProps, Typography } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface FoodTabsWidgetsProps extends TabsProps {
  tabList: string[];
  value: number;
  order?: boolean;
}

const FoodTabsWidgets: FC<FoodTabsWidgetsProps> = (props) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  useEffect(() => {
    if (props.order) return;
    const currentTab = tabsRef.current?.querySelector(
      `[role="tab"]:nth-child(${props.value + 1})`
    );
    if (currentTab) {
      currentTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [props.value, props.order]);

  return (
    <Tabs
      {...props}
      selectionFollowsFocus
      variant={props.order ? "fullWidth" : "scrollable"}
      allowScrollButtonsMobile
      scrollButtons={false}
      ref={tabsRef}
      centered={props.order ? true : false}
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
    >
      {props.tabList.map((tab) => (
        <Tab key={tab} label={<Typography variant="h2">{t(tab)}</Typography>} />
      ))}
    </Tabs>
  );
};

export default FoodTabsWidgets;
