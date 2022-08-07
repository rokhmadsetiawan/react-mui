import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import theme from "../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
});

const Icon = styled(Box)({
  display: "none",
  gap: "20px",
  alignItems: "center",

  //   screen > 600 => display changed to flex
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  //   screen > 600 => display changed to flex
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <SpaIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Healthy Spa
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={() => setOpen(true)}
          />
        </Icon>

        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={() => setOpen(!open)}
          />
          <Typography variant="span">John Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
