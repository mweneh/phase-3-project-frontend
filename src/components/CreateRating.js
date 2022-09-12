import React from 'react'


function CreateRating({addRating}){

    
    function handleSubmit (e){
        e.preventDefault()
        const newRating = {
            rating : e.target[0].value,
            user_id: e.target[1].value,
            game_id: e.target[2].value,
            comment: e.target[3].value
        }
        e.target.reset()
    fetch("http://localhost:9292/ratings/add",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(newRating)
    })
    .then(resp => resp.json())
    .then(resp => addRating(resp))
    }


    return(
        <div>
            <h4 className='text-primary'>Create A New Rating</h4>
          <form onSubmit={handleSubmit}>
            <label> Rating:</label>
                <input type='number'  placeholder='Rating '></input>
            <label> User ID:</label>
                   
            <input type='number'  placeholder='User id '></input>

            <label> Game ID:</label>
            <input type='number'  placeholder='Game id '></input>
            <label> Comment:</label>
            <input type='text'  placeholder='Comment '></input>
            <button className=' btn btn-outline-success btn-sm'>Add Rating</button>
          </form>
        </div>
    )
}

export default CreateRating