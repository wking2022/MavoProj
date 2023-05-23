import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div >
      <div className="">
        <h2>Welcome, {user.username}!</h2>
        <img></img>
        <p>Your ID is: {user.id}</p>
      </div>

      <div className="">
        <h1> View Jobs </h1>
        <button text="submit" className="buttons" onClick={() => viewJobsButton()}> View Jobs </button>
      </div>

      <div className="">
        <h1> Create Job </h1>
        <button text="submit" className="buttons" onClick={() => createJobButton()}> Create Jobs </button>
      </div>

      <div className="">
        <h1> Create Safety Advisory </h1>
        <button text="submit" className="buttons" onClick={() => advisorybButton()}> Create Advisory </button>
      </div>

      <div className="">
        <h1> View OT Requests </h1>
        <button text="submit" className="buttons" onClick={() => viewOtButton()}> View OT Requests </button>
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
