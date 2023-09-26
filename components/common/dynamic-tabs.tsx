"use client"
import React, { ReactNode } from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import { tabPanel } from '.';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box >{children}</Box>}
    </div>
  );
}

interface DynamicTabsProps {
  tabs: { label: string; content: ReactNode }[];
}

const DynamicTabs: React.FC<DynamicTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={tabPanel}>
      <AppBar
        position="static"
        className="tab-container"
      >
        <Tabs value={value} onChange={handleChange} variant="fullWidth" centered>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} id={`tab-${index}`} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default DynamicTabs;