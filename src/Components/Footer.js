import React from "react";
import { Box, Grid, Typography, Link as MuiLink, List, ListItem } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                // background: "rgba(0,0,0,0.75)",
                background: '#383838',
                backdropFilter: "blur(8px)",
                color: "#ffffffc9",
                width: "100%",
                mt: 6,
                py: { xs: 4, md: 6 },
            }}
        >
            <Grid
                container
                spacing={{ xs: 3, md: 6 }}
                justifyContent="center"
                textAlign="center"
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    px: { xs: 2, sm: 4, md: 6 }
                }}
            >
                {/* Column 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "white",
                            mb: 1.2,
                            fontWeight: 700,
                            fontSize: { xs: "18px", md: "22px" },
                        }}
                    >
                        Arjun Tech
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", md: "15px" },
                            lineHeight: 1.7,
                            color: "#ffffffc9"
                        }}
                    >
                        Shop No. 03, Near Shell Petrol Pump, <br />
                        Durvankur Society, Ashoka Nagar, <br />
                        Kharadi, Pune - 411014
                    </Typography>
                </Grid>

                {/* Column 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "white",
                            mb: 1.2,
                            fontWeight: 700,
                            fontSize: { xs: "18px", md: "22px" }
                        }}
                    >
                        Working Hours
                    </Typography>

                    <Typography sx={{ fontSize: { xs: "14px", md: "15px" }, lineHeight: 1.7 }}>
                        Monday to Saturday <br />
                        10:00 AM – 08:00 PM
                    </Typography>
                </Grid>

                {/* Column 3 */}
                <Grid item xs={12} sm={12} md={4}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "white",
                            mb: 1.2,
                            fontWeight: 700,
                            fontSize: { xs: "18px", md: "22px" }
                        }}
                    >
                        Contact
                    </Typography>

                    <List sx={{ p: 0 }}>
                        <ListItem
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                justifyContent: "center",
                                px: 0,
                                transition: "0.3s",
                            }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#ffffff" }}>call</span>
                            <MuiLink
                                href="tel:+917879797676"
                                target="_blank"
                                underline="none"
                                sx={{
                                    color: "#ffffffc9",
                                    fontSize: { xs: "14px", md: "15px" },
                                    fontWeight: 500,
                                    transition: "0.3s"
                                }}
                            >
                                +91 78 7979 7676
                            </MuiLink>
                        </ListItem>

                        <ListItem
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                justifyContent: "center",
                                px: 0,
                                transition: "0.3s",
                            }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#ffffff" }}>mail</span>
                            <MuiLink
                                href="mailto:admin@arjuntech.in"
                                target="_blank"
                                underline="none"
                                sx={{
                                    color: "#ffffffc9",
                                    fontSize: { xs: "14px", md: "15px" },
                                    fontWeight: 500,
                                    transition: "0.3s",
                                }}
                            >
                                admin@arjuntech.in
                            </MuiLink>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            {/* Divider */}
            <Box
                sx={{
                    width: "85%",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.25)",
                    mt: 3,
                    mx: "auto",
                }}
            />

            <Typography
                sx={{
                    textAlign: "center",
                    mt: 2,
                    fontSize: { xs: "12px", md: "14px" },
                    color: "#ffffffb5",
                }}
            >
                © {new Date().getFullYear()} Arjun Tech. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
