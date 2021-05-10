import React from 'react'
import './Home.css'
import Dictionary from './Dictionary.mp4'
import SearchIcon from '@material-ui/icons/Search';
import {BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom';
import Content from './Content'
function Home() {
    return (
        <div >
            <video autoplay playsinline >
            <source src={Dictionary} type="video/mp4"></source>
            Your browser does not support the video tag.
            </video>
            <Link to="/search" >
             <div className="container_button">
                 <h1 className="buttons">Search Here</h1>
            </div>
            </Link>
        </div>
    )
}

export default Home


