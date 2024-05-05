import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import './css/styles.css';
import { Filter } from "./Filter";

export const Home = () => {
    const [jobData, setJobData] = useState([]);
    const [rolefilter, setRolefilter] = useState([]);
    const [locFilter,setLocFilter] = useState("");
    const [expfilter, setExpfilter] = useState("");
    const [salaryfilter, setSalaryfilter] = useState("");
    const [companyFilter, setCompanyFilter] = useState("");
    const fetchJobs = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 100,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
        const items = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
        console.log("jobs", items.jdList);
        setJobData(items.jdList);
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    return <div>
        <Filter
        jobData={jobData}
        rolefilter={rolefilter}
        setRolefilter={setRolefilter}
        locFilter={locFilter}
        setLocFilter={setLocFilter}
        expfilter={setExpfilter}
        setExpfilter={setExpfilter}
        salaryfilter={salaryfilter}
        setSalaryfilter={setSalaryfilter}
        companyFilter={companyFilter}
        setCompanyFilter={setCompanyFilter}
        />
        <div className="cards-container" >
        {jobData.filter((job) => {
            return rolefilter.includes(job.jobRole) ? job : rolefilter.length > 0 ? "" : job
        }).filter((job) => {
            return locFilter === "" ? job : job.location.includes(locFilter) 
        }).filter((job) => {
            return expfilter === "" ? job : job.minExp >= expfilter 
        }).filter((job) => {
            return salaryfilter === "" ? job : job.minJdSalary >= salaryfilter 
        })
        .filter((job) => {
            return companyFilter === "" ? job : job.companyName.toLowerCase().includes(companyFilter) 
        }).map((job)=>{
           return <JobCard 
           job={job}
           />
        })}
        </div>

        
    </div>
}