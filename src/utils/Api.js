import axios from "axios";
const base_url= 'https://'+process.env.REACT_APP_RAPID_API_URL;
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_URL
  }
};
// fecting data from rapidAPI...(rapidAPI->endpoints->codesnippets->(js)fetch)
export const fetchDataFromApi=async(url)=>{
    const {data}=await axios.get(`${base_url}/${url}`,options);
    return data;
};