import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../css/styles.css'

export default function CompanyFilter({ setCompanyFilter }) {
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setCompanyFilter(event.target.value.toLowerCase());
    }
    return (

        <TextField 
        sx={{width:"200px",fontFamily:"Poppins"}} 
            placeholder='Search Company name'
            onChange={handleInputChange}
        />

    );
}

