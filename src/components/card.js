import React from 'react';
import '../styles/card.css';

const Card = ({title,publishedAt,url,handleRemove}) => {
    return (
        <div className="divstyle2">
            <h4 style={{fontFamily: 'sans-serif'}}>{title}</h4>
            <h4 style={{color: "gray",fontWeight: 'lighter', marginTop: '8px',flexGrow: '1'}}>{publishedAt.slice(0,10)}</h4>
            <div className="buttonContainer">
                <button className="buttonstyle2" style={{color: '#75E6DA'}}><a href={url} style={{textDecoration: 'none',color: '#75E6DA'}} target='_blank'>Read More</a></button>
                <button className="buttonstyle2" style={{color: 'red'}} onClick={() => handleRemove(title)}>Remove</button>
            </div>
        </div>
    )
}

export default Card;
