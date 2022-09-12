import UserItem from "./UserItem"
import React from 'react'
import Rating from './Rating'
import { useState, useEffect } from "react"
import useFetch from "./UseFetch";

const API = 'http://localhost:9292/';


function Home(){

    const [games, setGames] = useState([])

    // // function handleNewUser(user){
    // //     setUsers([...users, user])
    // // }
    // function handleUserDelete(deletedUser) {
    //   const updatedUsers = users.filter(
    //     (user) => user.id !== deletedUser.id
    //   );
    //   setUsers(updatedUsers);
    // }
    // function handleUserUpdate(updatedUser) {
    //   // const updatedUsers = users.map((user) => {
    //   //   if (user.id === updatedUser.id) {
    //   //     return updatedUser;
    //   //   } else {
    //   //     return user;
    //   //   }
    //   // });
    //   // setUsers(updatedUsers);
    //   setUsers ([...users,updatedUser])
    // }
    const { data } = useFetch(`${API}/users/all`)
    
    useEffect(()=>{fetch(`${API}/games/all`)
    .then((res) => res.json())
    .then((json) =>setGames(json))
    .catch((err) => console.error(err))
},[])

    // return(
    //     <div>
    //       <Users handleNewUser={handleNewUser} deleteUser={deleteUser} users={users}/>
    //       <Rating users={users} games={games}/>
    //     </div>
    // )
    return (
      <div>
          <UserItem
            
          />
        <Rating users={data} games={games}/>
      </div>
)
}

export default Home

