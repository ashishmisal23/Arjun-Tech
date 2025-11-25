export const getEnvironmentUrl = () => {
    return process.env.REACT_APP_GOOGLE_SCRIPT_URL
}
export const getHeaders = () => {
    return ({
        "Content-Type": "text/plain;charset=utf-8",
    });
}

export const getStringifyData = (payload) => {
    return JSON.stringify({
        name: payload?.name,
        mobile: payload?.mobile,
        email: payload?.email,
        message: payload?.message,
    });
}