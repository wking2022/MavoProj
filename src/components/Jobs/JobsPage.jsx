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
    const id = useParams();

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOBS',
            payload: id
        })
    }, [])



    return (
        <section className="">
            <div className="" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <div className="" key={jobs.id}>
                    <section> Job Name: <i><u> {jobs.jobname} </u></i> </section>
                    <section> Job Number: <i><u> {jobs.jobnum} </u></i> </section>
                    <section> Job Type: <i><u> {jobs.jobtype} </u></i> </section>
                    <section> Start Date: <i><u> { new Date (jobs.start_date).toLocaleDateString('en-US', dateProper)} </u></i> </section>
                    <section> Start Time: <i><u> {jobs.start_time} </u></i> </section>
                    <section> Duration: <i><u> {jobs.duration} hours </u></i> </section>
                    <section> Contact Name: <i><u> {jobs.contactname} </u></i> </section>
                    <section> Contact Number: <i><u> {jobs.contactnum} </u></i> </section>
                    <section> Job Notes: <i><u> {jobs.notes} </u></i> </section>

                    {/* <section className="booking-detail">{new Date(booking.check_in_date).toLocaleDateString('en-US', dateProper)} - */}
                                    {/* <br/>
                                    {new Date(booking.check_out_date).toLocaleDateString('en-US', dateProper)}</section>
                    <br></br> */}
                    {/* <button text="submit" className="buttons" onClick={() => handleEdit(job.id)}> Edit Job </button>
                    <button text="submit" className="buttons" onClick={() => handleDelete(job.id)}> Delete Job </button>
                    <button text="submit" className="buttons" onClick={() => jobCompleteButton()}> Job Complete </button>
                    <button text="submit" className="buttons" onClick={() => createAssignment()}> Create Job Assignment </button> */}
                </div>

        </section>
    );
}

// this allows us to use <App /> in index.js
export default JobsPage;