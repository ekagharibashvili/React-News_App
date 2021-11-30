import React from 'react';

const NewsCard = (props) => {
    const { data } = props;
    return (
        <div className="card-item">
            <div className="card-inner">
                <div className="card-top">
                    <img src={data.urlToImage} alt={data.title} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.title}</h4>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;