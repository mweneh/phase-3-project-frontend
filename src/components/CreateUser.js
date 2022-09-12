import React from "react";
import { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name };
    e.target.reset();

    fetch("http://localhost:9292/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("new user added");
    });
  };

  return (
    <div className="create">
      <h4 className=" text-primary">Create A New User</h4>
      <form onSubmit={handleSubmit}>
        <label> New user: </label>
        <input
          placeholder="User Name here"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-light border-success btn-sm">Add User</button>
      </form>
    </div>
  );
}
export default CreateUser;
