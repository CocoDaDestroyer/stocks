import React from 'react';
import "../title.css"
import { Link } from 'react-router-dom';

const TitleScreen = () => {
    return (
        <div className="title-screen">
            <h1 className='title'>How Rich Would You Be In The 1980s?</h1>
            <p className='description'>The premise of this site is to see if you could have come close to beating the market in the 1980s. You will use basic modern machine learning algorithms trained on data from 1965-1983. As the user you can choose among three machine learning algorithms and three trading strategies. The program will run on data from 1983-1990, trading twice a month, and will show the resulting profits. The backend is hosted on a free service, so I apologize for any delays</p>
            <Link to="/options"><button className="start-button">Let's Start!</button></Link>
        </div>
    );
}

export default TitleScreen;