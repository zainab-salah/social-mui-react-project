import { Brush, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { borderRadius, Box, styled } from "@mui/system";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          KAINY
        </Typography>
        <Brush sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          {" "}
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="data:image/jpeg;base64,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"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <Userbox 
            onClick={(e) => setOpen(true)}
        
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="data:image/jpeg;base64,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"
          />
          <Typography variant="span">Onodera</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
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
