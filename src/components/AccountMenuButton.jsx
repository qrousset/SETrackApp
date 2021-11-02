import * as React from "react";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { NavLink as Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar"
import UpcomingIcon from '@mui/icons-material/Upcoming';
import styled from "styled-components";


const NavLink = styled(Link)`
  color: #white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        {/* <Typography sx={{ minWidth: 100 }}>
          <NavLink to="/">Home</NavLink>
        </Typography> */}
        {/* <Typography sx={{ minWidth: 100 }}>
          <NavLink to="/graph">Graph</NavLink>
        </Typography> */}
        {/* <Typography sx={{ minWidth: 100 }} to="/coming">
          <NavLink to="/coming">Up coming</NavLink>
        </Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            to="/graph"
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}>Q</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
        <ListItemIcon>
            <HomeIcon fontSize="small" />
            </ListItemIcon>
        <NavLink to="/">Home</NavLink>
        </MenuItem>
            <MenuItem>
          <ListItemIcon> 
             <ShowChartIcon fontSize="small" />
          </ListItemIcon> 
          <NavLink to="/graph">Graph</NavLink>
        </MenuItem>
        <MenuItem>
        <ListItemIcon>
            <UpcomingIcon fontSize="small" />
            </ListItemIcon>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
           <ListItemIcon>
            <PersonAdd fontSize="small" />
            </ListItemIcon>
            <NavLink to="/upcoming">Add another application</NavLink>
            </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <NavLink to="/upcoming">Logout</NavLink>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
