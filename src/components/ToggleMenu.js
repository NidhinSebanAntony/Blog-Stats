import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    menuItem: {
        width: '100vw',
    },
    icon: {
        width: 60
    }

});

const ToggleMenu = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div
                onClick={handleClick}
            >
                <MenuIcon className={classes.icon}/>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MenuItem className={classes.menuItem} onClick={()=>{window.location.href='/'; handleClose()}}>Dashboard</MenuItem>
                <MenuItem className={classes.menuItem} onClick={()=>{window.location.href='/posts'; handleClose()}}>Post</MenuItem>
            </Menu>
        </div>
    );
}

export default ToggleMenu
