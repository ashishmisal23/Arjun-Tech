import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, useLocation } from "react-router-dom";
import logo from "./Images/logo.png";

const Header = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "#06B4E7",
                padding: { xs: "8px 12px", md: "10px 50px" },
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                maxWidth: "160px",
                                height: "auto",
                            }}
                        />
                    </Link>
                </Box>

                {/* Desktop Menu */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "25px",
                    }}
                >
                    {navItems.map(item => (
                        <Button
                            key={item.path}
                            component={Link}
                            to={item.path}
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: location.pathname === item.path ? "#fff" : "#ffffffb5",
                                borderBottom: location.pathname === item.path ? "2px solid #fff" : "none",
                                textTransform: "none",
                                "&:hover": { color: "#fff" },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                {/* WhatsApp Button (Desktop only) */}
                <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
                    <Button
                        variant="contained"
                        href="https://api.whatsapp.com/send?phone=917879797676&text=Hello,%20I%20have%20a%20question%20about%20Laptop%20and%20Desktop%20Rental"
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            backgroundColor: "#ffffff",
                            color: "#06B4E7",
                            padding: "0.3rem 0.7rem",
                            fontWeight: 700,
                            borderRadius: "6px",
                            "&:hover": {
                                backgroundColor: "#06B4E7",
                                color: "#fff",
                                border: "1px solid #fff",
                            },
                        }}
                    >
                        <WhatsAppIcon fontSize="small" />
                        Message Us
                    </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Drawer / Mobile Menu */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 250, paddingTop: 2 }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.path} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: location.pathname === item.path ? "#06B4E7" : "#000",
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Box sx={{ p: 2, textAlign: "center" }}>
                        <Button
                            variant="contained"
                            href="https://api.whatsapp.com/send?phone=917879797676"
                            target="_blank"
                            fullWidth
                            sx={{
                                backgroundColor: "#25D366",
                                color: "#fff",
                                fontWeight: 700,
                            }}
                        >
                            <WhatsAppIcon sx={{ mr: 1 }} /> Message Us
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
