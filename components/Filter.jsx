import { Autocomplete, useAutocomplete } from "@mui/material";
import React from "react";
import RoleFilter from "./filterComponents/RoleFilter";
import LocationFilter from "./filterComponents/LocationFilter";
import ExpFilter from "./filterComponents/ExpFilter";
import SalaryFilter from "./filterComponents/SalaryFilter";
import CompanyFilter from "./filterComponents/CompanyFilter";
import './css/styles.css';

export const Filter = (props) => {
    const { jobData, rolefilter, setRolefilter, locFilter, setLocFilter, expfilter, setExpfilter, salaryfilter, setSalaryfilter, companyFilter, setCompanyFilter } = props;
    return <div className="filter-header" >
        <RoleFilter
            rolefilter={rolefilter}
            setRolefilter={setRolefilter}
        />
        <LocationFilter
            locFilter={locFilter}
            setLocFilter={setLocFilter}
        />
        <ExpFilter
            expfilter={expfilter}
            setExpfilter={setExpfilter}
        />
        <SalaryFilter
            salaryfilter={salaryfilter}
            setSalaryfilter={setSalaryfilter}
        />
        <CompanyFilter
            setCompanyFilter={setCompanyFilter}
        />

    </div>
}