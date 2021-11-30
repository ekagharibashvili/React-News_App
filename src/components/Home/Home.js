import React, {useEffect} from 'react';
import NewsListing from "../NewsListing/NewsListing";
import { useDispatch } from 'react-redux';
import { addNews } from '../../features/news/newsSlice';
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchNews = async() => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=ai&apiKey=d2c4df4959d04019b7214b7e35fae7dc`
            )
            .catch((err)=> {
                console.log("Err: ", err);
            });
           dispatch(addNews(response.data));
        }
        fetchNews();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="banner-image"></div>
            <NewsListing />
        </div>
    );
};

export default Home;