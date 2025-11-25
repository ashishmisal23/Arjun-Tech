import axios from "axios";
import { getEnvironmentUrl } from './utils.js'

export const submitContactForm = async (formData) => {
    const url = getEnvironmentUrl();

    const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        message: formData.message,
    };

    try {
        const res = await axios.post(url, new URLSearchParams(payload), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return res.status === 200;
    } catch (err) {
        throw err;
    }
};
