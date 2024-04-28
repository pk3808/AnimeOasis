import axios from "axios";

const base_url = "https://api.jikan.moe/v4/anime";
const Mbase_url = "https://api.jikan.moe/v4/manga";

export const animeData = async (search) => {
    try {
        const response = await axios.get(base_url, {
            params: {
                q: search,
                sfw: true,
                limit:25
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export const mangaData = async (search) => {
    try {
        const response = await axios.get(Mbase_url, {
            params: {
                q: search,
                sfw: true,
                limit:25
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
