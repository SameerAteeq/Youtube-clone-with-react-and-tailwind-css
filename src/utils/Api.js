import axios from "axios"
const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': '93f818508bmsh2f5b42419347cfep129bdcjsn210fa5c51862',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
}

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}