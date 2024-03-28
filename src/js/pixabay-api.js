export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43106887-eff60e26b4e1d2e0df5166367";

export const options = {
    params: {
        key: API_KEY,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 40,
    },
};