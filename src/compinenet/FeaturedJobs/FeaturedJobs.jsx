import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs,setJobs]= useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=> {
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data));
    })
    return (
        <div>
                <div className="text-center">
                    <h3 className="text-4xl">Featured Jobs {jobs.length} </h3>
                    <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid <br /> quibusdam nisi, deleniti molestias dolor soluta?</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length && 'hidden' }>
                    <button 
                        onClick={() => setDataLength(jobs.length)}
                        className="btn btn-primary">Show All Jobs</button>
                </div>
        </div>
    );
};

export default FeaturedJobs;