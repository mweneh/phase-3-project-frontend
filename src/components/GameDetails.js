import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "http://localhost:9292/games/"

export default function GameDetails(){

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [ratings, setRatings] = useState("")
    const [user, setUser] = useState('')
    const [price, setPrice]= useState('')

    let {gameId} = useParams()

    const actualSearch = url + gameId

    const gameFetcher = () => {
        fetch(actualSearch)
            .then((response) => response.json())
            .then((data) => {
                const game = data
                const rating = data.ratings[0]

                setTitle(game.title)
                setDesc(game.short_description)
                setRatings(rating.rating)
                setImage(game.thumbnail)
                setUser(rating.user.name)
                setPrice(game.price)
                
            })
    }

    useEffect(
        gameFetcher, [actualSearch]
    )

    return(
        <div className="container">
            <center>
                <img src={image} style={{height: 400 + 'px', width: 500 + 'px',}} alt={title}/>
                <h4> Title: {title}</h4>
                <h5 className ='text-danger' >Price: ${price} </h5>
                <h5 className=" text-success"> Desc: {desc}</h5>
                Rating: {ratings}
                <p className="text-dark">User Name: {user} </p>
            </center>
            
        </div>
    )

}