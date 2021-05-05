import React, { useState, useEffect, ReactDOM } from 'react';
import './App.css';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import Input from '@material-ui/core/Input';
import Collapsible from 'react-collapsible';



function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": "bd7cf329bemshae8e6053840605ep166442jsnc60488059d95",
    //     "x-rapidapi-host": "google-books.p.rapidapi.com"
    //   }
    // })
    //  .then(res => res.json())
    //   .then(
    //     (result) => {
    //       // setIsLoaded(true);
    //       // setItems(result);
    //       console.log(result.items)
    //       setItems(result.items);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //       console.log(error)
    //     }
    //   )
  }, [])

  
    return (
      <div>
        <center>
        <button className="btn-api" onClick={()=>{
          fetch("https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "bd7cf329bemshae8e6053840605ep166442jsnc60488059d95",
              "x-rapidapi-host": "google-books.p.rapidapi.com"
            }
          })
           .then(res => res.json())
            .then(
              
              (result) => {
                // setIsLoaded(true);
                // setItems(result);
                console.log(result.items)
                setItems(result.items);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setIsLoaded(true);
                setError(error);
                console.log(error)
              }
            )
        }}>
          Click Here
        </button>
        </center>
 
        <ul className="List-Container">
       {
         items.map((product) => {
          return <li key={product.id}>
            <li>{product.volumeInfo.title}</li>
              <div  className="sublist">
              <ol>
              {product.volumeInfo.description?<li>{product.volumeInfo.description}</li>:<li>description cannot be found</li>}
              <li><a href={product.selfLink}> Click here for complete Info</a></li>
              <li><a href={product.previewLink}> Click here for previewLink </a></li>
                {/* <img src={product.volumeInfo.imageLinks.thumbnail} alt={product.volumeInfo.title}></img> */}
            </ol>
            </div>
            <br></br>
          </li>
         
           })
       }
       </ul>
      </div>
    );
  
}
export default App;