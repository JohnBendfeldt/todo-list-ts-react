import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5'
    }
})((props: any) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        border: 'none',
        '&:focus': {
            backgroundColor: '#2196F3',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position='static' style={{ backgroundColor: '#2196F3' }}>
            <Toolbar variant='dense'>
                <IconButton
                    style={{ paddingLeft: '-4px' }}
                    color='inherit'
                    aria-label='Menu'
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <StyledMenu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to='/'>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </StyledMenuItem>
                    </Link>
                    <Link to='/about'>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary='About' />
                        </StyledMenuItem>
                    </Link>
                </StyledMenu>
                <Typography variant='h3' color='inherit'>
                    To Do List
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
