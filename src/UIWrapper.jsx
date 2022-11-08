import { AppBar, Box, IconButton, Toolbar, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const UIWrapper = ({ children }) => {
  return <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    {children}
  </div>
}

export default UIWrapper;