import React from "react";

function Home() {
  return <div className="hero">
    <div className="card text-white border-0 bg-dark">
      <img src="https://wallpaperaccess.com/full/1966480.jpg" alt="Background" height='400px' width={'400px'}/>
      <div className="card-img-overlay d-flex flex-column ">
        <div className="container">
        <p className="card-text lead fs-2">
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">  <option selected>Get In Touch </option>
  <option value="1">E-mail Games-Galore@ent.com</option>
  <option value="2">Phone +254122450023</option>
  <option value="3">SMS -379379</option>
  <option value="4">Twitter @Games-Galore</option>

</select>
        </p>
        </div>
      </div>
    </div>
 
  </div>;
}

export default Home;
