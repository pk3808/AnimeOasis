import axios from "axios";

const base_url = "https://api.jikan.moe/v4/anime";
const Mbase_url = "https://api.jikan.moe/v4/manga";
const Nbase_url = "https://anime-manga-and-novels-api.p.rapidapi.com/novels";

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
export const novelData = async () => {
    try {
        const response = await axios.get(Nbase_url, {
            params: {
                pageSize: '25',
                page: '1'
            },
            headers: {
                'X-RapidAPI-Key': '0963fb771fmsh5e29cef027897b9p12cfddjsnb11430359f6d',
                'X-RapidAPI-Host': 'anime-manga-and-novels-api.p.rapidapi.com'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching novel data:', error);
    }
}
