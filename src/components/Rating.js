import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import CreateRating from './CreateRating.js'

function Rating({users,games}){
    
    const [ratings, setRatings] = useState([])

    useEffect(()=>{
      fetch("http://localhost:9292/ratings/all")
      .then((r) => r.json())
      .then(ratings => setRatings(ratings))
    },[])

    function deleteRating({id}){
        setRatings(ratings.filter(rating => rating.id !== id))
        fetch(`http://localhost:9292/ratings/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }
    
    function addRating(newRating){ 
        setRatings([...ratings, newRating])
    }
return(
    <div className='container'>
       <CreateRating addRating={addRating} users={users} games={games} />


       {ratings.map((rating)=>
         <div  key={rating.id}>
            <table className="table  table-hover" border="1" style={{ float: 'left' }}>
            <thead> 
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">Rating</th>
      <th scope="col">Comment</th>
      <th scope="col">Game ID</th>
      <th scope="col">Operation</th>
    </tr>
  </thead> 
  <tbody>
  
    <tr>
      <td>{rating.user_id}</td>
      <td>{rating.rating}</td>
      <td>{rating.comment}</td>
      <td>{rating.game_id}</td>
      <td><button  className='btn btn-outline-danger' onClick={()=>deleteRating(rating)}> Delete Rating</button>
</td>
    </tr>
    </tbody>
            
            </table>
         </div> 
       )}
    </div>
)
}
export default Rating