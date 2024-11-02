import { useRef } from 'react'
import axios from 'axios';
import{ useEffect, useState } from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


export const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const newtag = useRef(tag);

    async function fetchData(tag) {
        setLoading(true);
        console.log('chal rha hu');
        // const {data} = await axios.get(url);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        console.log("mil gyi gif ? ");
    }

    useEffect(() => {
        fetchData(newtag.current?newtag.current:"");
    }, []);

    return{gif, loading, fetchData};
}
