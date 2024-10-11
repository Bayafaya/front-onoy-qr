import { FC } from "react";
import { TabPanel, TabPanelProps } from "@mui/lab";
import { Box } from "@mui/material";

const TabCustomPanel: FC<TabPanelProps> = (props) => {
  return (
    <TabPanel {...props} value={props.value} sx={{ padding: 0, mt: 4 }}>
      <Box display="grid" gap={6}>
        {props.children}
      </Box>
    </TabPanel>
  );
};

export default TabCustomPanel;
