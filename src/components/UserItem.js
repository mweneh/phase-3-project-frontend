import React, { useEffect, useState } from 'react'
import CreateUser from './CreateUser'

function Create() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch('http://localhost:9292/users/all').then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:9292/users/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let user=users[id-1];
    setName(user.name)
        setUserId(user.id)
  }
  function updateUser()
  {
    let user={name}
    console.warn("user",user)
    fetch(`http://localhost:9292/users/put/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div className="container">
      <h1>Manipulate User Data </h1>
      <table className="table  table-hover" border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Operations</td>
          </tr>
          {
            users.map((user, i) =>
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><button className='btn btn-outline-danger ' onClick={() => deleteUser(user.id)}>Delete</button></td>
                <td><button className='btn btn-outline-success' onClick={() => selectUser(user.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <button className='btn btn-light border-success btn-sm' onClick={updateUser} >Update User</button>  
      </div>
      <CreateUser/>
    </div>
  );
}
export default Create;