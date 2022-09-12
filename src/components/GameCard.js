import React from "react";

import { NavLink } from "react-router-dom";

export default function GameCard({platform,genre,price,title, image, id}){

    return (
        <div className="card" style={{width: 20 + 'rem'}}>
            <img src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h6 className="card-title">Title: {title}</h6>
                <h6 className="card-title text-success">Genre: {genre} </h6>
                <h6 className="card-title">Platform: {platform}</h6>

                <h6 className="card-title text-danger">Price: ${price}</h6>

                <NavLink to={"/games/"+id} className="btn btn-primary">More Details</NavLink>
            </div>
        </div>
    )

}
