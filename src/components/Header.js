import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";



const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
const logout = () => {
  localStorage.clear();
  history.push("/");
}
  if(hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          Back to explore
        </Button>
        </Box>
    )
  }
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {/* <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          Back to explore
        </Button> */}
        {localStorage.getItem("username") ? (
          <div>
            {/* <Avatar src="avatar.png"> */}

            <img src="avatar.png" alt={localStorage.getItem("username") }></img>
            <p>{localStorage.getItem("username")}</p>
            {/* </Avatar> */}
            <Button
            onClick={logout}
            >
            LOGOUT
            </Button>
          </div>
        ) : (
          <div>
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
        </div>

        )}
        {/* <Button
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
        onClick={() => history.push("/")}
        >
          LOGOUT
        </Button> */}
      </Box>
    );
};

export default Header;
