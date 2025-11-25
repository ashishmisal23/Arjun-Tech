import axios from "axios";
import { getEnvironmentUrl, getHeaders, getStringifyData } from './utils'

export const submitContactForm = async (formData) => {
    const url = getEnvironmentUrl();
    const headers = getHeaders();
    const payload = getStringifyData(formData);

    try {
        const res = await axios.post(
            url,
            payload,
            {
                headers
            }
        );
        return res.status === 200;
    } catch (err) {
        throw err;
    }
};
