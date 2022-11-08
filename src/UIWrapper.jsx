import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UIWrapper = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  return <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            id="menu-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
        <MenuItem onClick={() => navigate("/employees")}>Employees</MenuItem>
        <MenuItem onClick={() => navigate("/products")}>Products</MenuItem>
      </Menu>
    </Box>
    <Outlet />
  </div>
}

export default UIWrapper;