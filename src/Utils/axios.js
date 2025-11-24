import axios from "axios";
import { getEnvironmentUrl } from "./utils";

export const submitContactForm = async (formData) => {
    const url = getEnvironmentUrl();

    const payload = {
        name: formData?.name,
        mobile: formData?.mobile,
        email: formData?.email,
        message: formData?.message,
    };
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const response = await axios.post(
            url,
            payload,
            { headers }
        );
        if (response?.data?.success === 'true' || response?.success === 'true') {
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }
};
