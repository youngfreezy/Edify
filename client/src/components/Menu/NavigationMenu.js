import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { menuItems } from "../../utils/utils";

export default function NavigationMenu({ submitted }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navigation-menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, i) => {
          if (menuItem.showIfSubmitted) {
            return submitted ? (
              <MenuItem onClick={handleClose} key={i}>
                <Link to={menuItem.link}>{menuItem.text}</Link>
              </MenuItem>
            ) : null;
          } else {
            return (
              <MenuItem onClick={handleClose} key={i}>
                <Link to={menuItem.link}>{menuItem.text}</Link>
              </MenuItem>
            );
          }
        })}
      </Menu>
    </div>
  );
}
