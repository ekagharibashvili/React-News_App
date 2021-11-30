import React from 'react';
import { useSelector } from "react-redux";
import { getAllNews } from "../../features/news/newsSlice";
import  NewsCard  from "../NewsCard/NewsCard";
import "./NewsListing.scss";

const NewsListing = () => {
    const news = useSelector(getAllNews);
    let renderNews = "";
    renderNews = news.status === "ok" ? (
        // eslint-disable-next-line array-callback-return
        news.articles.map((article, index) => { 
           return <NewsCard key={index} data={article} />;
        })
    ) : (
    
       <div className="news-error">
            <h3>{news.Error}</h3>
        </div>
    );
    return (
        <div className="news-wrapper">
            <div className="news-list">
                <h2>News</h2>
            <div className="news-container">
                {renderNews}
            </div>
            </div>
        </div>
    );
};

export default NewsListing;