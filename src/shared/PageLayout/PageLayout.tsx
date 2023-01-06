import React, { useCallback, useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Drawer,
  List,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Devices as DevicesIcon,
  CreditCard as CreditCardIcon,
  CompareArrows as CompareArrowsIcon,
  GpsFixed as GpsFixedIcon,
  Support as SupportIcon,
} from "@mui/icons-material";
import { config } from "../../config";
import { AccountButton } from "./AccountButton";
import { NavLink } from "./NavLink";

type Props = React.PropsWithChildren & {
  title?: string;
};

const drawerWidth = 240;
const navItems: React.ComponentProps<typeof NavLink>[] = [
  { text: "Dashboard", icon: <DashboardIcon />, url: "/" },
  { text: "Devices", icon: <DevicesIcon />, url: "/devices" },
  { text: "Carbon Credits", icon: <CreditCardIcon />, url: "/credits" },
  { text: "Transactions", icon: <CompareArrowsIcon />, url: "/transactions" },
  { text: "IoT Location", icon: <GpsFixedIcon />, url: "/iot" },
  { text: "Contact Support", icon: <SupportIcon />, url: "/support" },
];

export const PageLayout = ({ children, title }: Props) => {
  const [isDrawerOpen, toggleDrawer] = useState(true);

  const handleDrawerToggle = useCallback(
    () => toggleDrawer(!isDrawerOpen),
    [isDrawerOpen]
  );

  const drawer = useMemo(
    () => (
      <>
        <Toolbar></Toolbar>
        <List>
          {navItems.map(({ text, icon, url }, index) => (
            <NavLink key={index} text={text} icon={icon} url={url} />
          ))}
        </List>
      </>
    ),
    []
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        position="fixed"
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title ?? config.appName}</Typography>
          <Box flex={1} />
          <AccountButton />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ padding: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
