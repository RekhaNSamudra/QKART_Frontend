import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
    return (
      <Box className="header">
        <Stack spacing={2} className="form">
        <Box className="header-title">
        
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/products")}
        >
          Back to explore
        </Button>
        <Button
            onClick={() => history.push("/login")}
        >
          LOGIN
        </Button>
        <Button
        onClick={() => history.push("/register")}
        >
          REGISTER
        </Button>
        <Button
        onClick={() => history.push("/products")}
        >
          LOGOUT
        </Button>
      </Stack>
      </Box>
    );
};

export default Header;
