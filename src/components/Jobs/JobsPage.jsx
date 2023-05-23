import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function JobsPage() {

    const user = useSelector((store) => store.user);
    const jobs = useSelector((store) => store.jobsReducer);
    const dateProper = { year: 'numeric', month: 'long', day: 'numeric' };
    const dispatch = useDispatch();
    const History = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOBS',
        })
    }, [])



    return (
        <section className="">
            <div className="" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            {jobs.length > 0 &&
                <div>
                    {
                        jobs.map(job => (
                            <div className="container" key={job.id}>
                                <section> <i><b> {job.jobname} </b></i> </section>
                                <section> <i> #{job.jobnum} </i> </section>
                                <section> {new Date(job.start_date).toLocaleDateString('en-US', dateProper)} - {new Date(job.end_date).toLocaleDateString('en-US', dateProper)} </section>
                                {/* <section> Contact Name: <i> {job.contactname} </i> </section>
                                <section> Contact Number: <i> {job.contactnum} </i> </section> */}
                                <br></br>
                                <button text="submit" className="buttons" onClick={() => handleDetails(job.id)}> View Details </button>
                            </div>
                        ))
                    }
                </div>
            }
        </section >
    );
}

// this allows us to use <App /> in index.js
export default JobsPage;