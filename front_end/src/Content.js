import React, { useState, useEffect, ReactDOM } from 'react';
import './App.css';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Header from './header';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


export default function Content(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const[word,setWord]=useState("");

    useEffect(() => {
     
    }, [])
    
   const url= `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=`+word
   console.log(url)
   function Search(){
    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=`+word, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bd7cf329bemshae8e6053840605ep166442jsnc60488059d95",
                "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
            }
        })
        .then(response =>response.json())
        .then(response=>{
            console.log(response.list)
            setItems(response.list)
        })
        .catch(err => {
            console.error(err);
        });
   }

    return(
        <div>
                <Header/>
                <Input className="input" id="search" color="black" placeholder="Type the word to search"
                onKeyDown={e=>{

                        if (e. key === 'Enter') {
                                Search()                    
                        }
                }}
                autoFocus="True"
                onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value)
                setWord(e.target.value)
                }}></Input>

                <SearchIcon
                type="Button"
                id="search" fontSize="medium" variant="contained" color="black " 
                onClick={()=>{
                Search();  
                }}>
                Click Here
                </SearchIcon>
                
                <ul className="List">{
                    items.map((product) => {
                    return <li key={product.defid}>
                        <div className="card">
                            <p>{product.definition}</p>
                            <h4> Example </h4>
                            <p className="example">
                                {product.example}
                            </p> 
                            <div className="thumbs_data"> 
                                    <ThumbUpAltOutlinedIcon className="thumbs"></ThumbUpAltOutlinedIcon> {product.thumbs_up}
                                    <ThumbDownOutlinedIcon className="thumbs"></ThumbDownOutlinedIcon> {product.thumbs_down}
                                </div>           
                            <br></br>
                        </div>  
                    </li>
                    })
                }
            </ul>
            </div>

    );
}