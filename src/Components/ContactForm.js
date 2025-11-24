import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import { submitContactForm } from '../Utils/axios';

const ContactForm = () => {
    const initialData = { name: "", mobile: "", email: "", message: "" };

    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState({ open: false, type: "success", message: "" });

    const validate = () => {
        let tempErrors = {};

        if (!formData?.name?.trim())
            tempErrors.name = "Please enter your name";
        else if (formData?.name?.length < 3)
            tempErrors.name = "Name should contain at least 3 characters";

        if (!formData?.mobile?.trim())
            tempErrors.mobile = "Please enter your mobile number";
        else if (!/^[0-9]+$/.test(formData?.mobile))
            tempErrors.mobile = "Only numbers are allowed";
        else if (formData?.mobile?.length !== 10)
            tempErrors.mobile = "Mobile number must be 10 digits";

        if (!formData?.email?.trim())
            tempErrors.email = "Please enter your email address";
        else if (!/^\S+@\S+\.\S+$/.test(formData?.email))
            tempErrors.email = "Please provide a valid email";

        if (!formData?.message?.trim())
            tempErrors.message = "Message cannot be empty";
        else if (formData?.message?.length < 10)
            tempErrors.message = "Please provide more details";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e?.target ?? {};
        if (!name) return;

        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await submitContactForm(formData);
            setFormData(initialData);
            setErrors({});
            setToast({ open: true, type: "success", message: "Your inquiry has been sent successfully" });
        } catch (err) {
            console.error("Submit Failed:", err?.message);
            setToast({ open: true, type: "error", message: "Failed to send message, try again later" });
        }
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={styles.boxStyle}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "white",
                        fontWeight: 700,
                        textAlign: "center",
                        marginBottom: "10px",
                        fontSize: { xs: "22px", md: "28px" }
                    }}
                >
                    Send Your Inquiry
                </Typography>

                <TextField
                    label="Name"
                    name="name"
                    value={formData?.name ?? ""}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    error={Boolean(errors?.name)}
                    helperText={errors?.name}
                    sx={styles.fieldStyle}
                    autoComplete="off"
                />

                <TextField
                    label="Mobile Number"
                    name="mobile"
                    value={formData?.mobile ?? ""}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    error={Boolean(errors?.mobile)}
                    helperText={errors?.mobile}
                    sx={styles.fieldStyle}
                    autoComplete="off"
                />

                <TextField
                    label="Email Address"
                    name="email"
                    value={formData?.email ?? ""}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    error={Boolean(errors?.email)}
                    helperText={errors?.email}
                    sx={styles.fieldStyle}
                    autoComplete="off"
                />

                <TextField
                    label="Your Message"
                    name="message"
                    value={formData?.message ?? ""}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    placeholder="How can we help you?"
                    error={Boolean(errors?.message)}
                    helperText={errors?.message}
                    sx={styles.fieldStyle}
                    autoComplete="off"
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: { xs: "16px", md: "18px" },
                        borderRadius: "12px",
                        padding: { xs: "10px 0", md: "14px 0" },
                        width: { xs: "100%", md: "100%" },
                        "&:hover": {
                            backgroundColor: "#eaeaea",
                            transform: "translateY(-2px)"
                        }
                    }}
                >
                    Send Message
                </Button>
            </Box>

            {/* Snackbar Toast */}
            <Snackbar
                open={toast.open}
                autoHideDuration={3000}
                onClose={() => setToast(prev => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={() => setToast(prev => ({ ...prev, open: false }))}
                    severity={toast.type}
                    variant="filled"
                >
                    {toast.message}
                </Alert>
            </Snackbar>
        </>
    );
};

const styles = {
    boxStyle: {
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1.6, md: 2.5 },
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        padding: { xs: "20px", md: "32px" },
        borderRadius: "20px",
        marginTop: "32px",
        width: "100%",
        maxWidth: { xs: "100%", sm: "90%", md: "600px" },
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    },
    fieldStyle: {
        input: { color: "white", fontSize: { xs: "14px", md: "16px" }, backgroundColor: "transparent !important" },
        textarea: { color: "white", backgroundColor: "transparent !important" },
        label: { color: "rgba(255,255,255,0.7)" },
        "& label.Mui-focused": { color: "white" },
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "transparent !important",
            "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white", borderWidth: "2px" }
        },
        "& .MuiFormHelperText-root": { color: "#ff9999", fontSize: "13px" }
    }
};

export default ContactForm;
