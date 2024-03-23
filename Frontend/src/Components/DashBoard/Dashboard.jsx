import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import BuildIcon from "@mui/icons-material/Build";
import PeopleIcon from "@mui/icons-material/People";

import { Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Attendee from "./Attendee";
import Navbar from "../Navbar/Navbar";

const INITIAL_STATE = {
  anchorEl: null, // State to control the Avatar menu
};

const DashBoard = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [page, setPage] = useState("Home");
  const onClickhome = () => {
    setPage("Home");
  };
  const onClickservice = () => {
    setPage("Service");
  };
  const onClickattendee = () => {
    setPage("Attendee");
  };
  const handleMenuOpen = (event) => {
    setState({ anchorEl: event.currentTarget });
  };

  const handleMenuClose = () => {
    setState({ anchorEl: null });
  };
  return (
    <>
    
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <Drawer
          variant="permanent"
          className="hidden lg:block"
          sx={{
            "& .MuiDrawer-paper": {
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              backgroundColor: "rgba(243, 244, 246, 0.4)",
              color: "rgba(0, 0, 0, 0.87)",
            },
          }}
        >
          <div className="flex h-full max-h-screen flex-col">
            <div className="flex items-center border-b px-6 h-[60px]">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <BuildIcon className="h-6 w-6" />
                <span>Acme Inc</span>
              </Link>
            </div>
            <List className="flex-1 overflow-auto py-2">
              <ListItem
                onClick={onClickhome}
                className="hover:bg-gray-100 dark:hover:bg-gray-800/40 "
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" className="cursor-pointer" />
              </ListItem>
              <ListItem className="hover:bg-gray-100 dark:hover:bg-gray-800/40">
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Events" className="cursor-pointer" />
              </ListItem>
              <ListItem
                onClick={onClickservice}
                className="hover:bg-gray-100 dark:hover:bg-gray-800/40"
              >
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Services" className="cursor-pointer" />
              </ListItem>
              <ListItem
                onClick={onClickattendee}
                className="hover:bg-gray-100 dark:hover:bg-gray-800/40"
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Attendees" className="cursor-pointer" />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <div className="flex flex-col">
          <AppBar
            position="static"
            color="inherit"
            elevation={0}
            className="border-b bg-gray-100/40 dark:bg-gray-800/40"
          >
            <Toolbar>
              <Link href="#" className="lg:hidden">
                <BuildIcon />
              </Link>
              <div className="w-full flex-1"></div>
              <IconButton>
                <Avatar
                  alt="Avatar"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                />
              </IconButton>
              {state.anchorEl && (
                <Menu
                  anchorEl={state.anchorEl}
                  open={Boolean(state.anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Support</MenuItem>
                  <Divider />
                  <MenuItem>Logout</MenuItem>
                </Menu>
              )}
            </Toolbar>
          </AppBar>
          {page === "Home" && <Home />}
          {page === "Service" && <Services />}
          {page === "Attendee" && <Attendee />}
        </div>
      </div>
    </>
  );
};
export default DashBoard;
