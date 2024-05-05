import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../css/styles.css';
export default function SalaryFilter({ salaryfilter, setSalaryfilter }) {
    
    const handleInputChange = (event, value) => {
        console.log(value);
        if (value != null) {
            setSalaryfilter(value.value);
        }
        else {
            setSalaryfilter("");
        }

    }
    return (
        <Stack spacing={3} className="filter-boxes">
            <Autocomplete
            className="filter-boxes"
                id="tags-outlined"
                options={exps}
                getOptionLabel={(option) => option.value}
                onChange={handleInputChange}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                    sx={{fontSize:"100px"}}
                        {...params}
                        placeholder="Minimum Salary"
                    />
                )}
            />
        </Stack>
    );
}

const exps = [
    {
        "value": 0,
        "id": 0
    }
    ,
    {
        "value": 10,
        "id": 1
    },
    {
        "value": 20,
        "id": 2
    },
    {
        "value": 30,
        "id": 3
    },
    {
        "value": 40,
        "id": 4
    },
    {
        "value": 50,
        "id": 5
    },
    {
        "value": 60,
        "id": 6
    },
    {
        "value": 70,
        "id": 7
    },
    {
        "value": 80,
        "id": 8
    },
    {
        "value": 90,
        "id": 9
    },
    {
        "value": 100,
        "id": 10
    }
]

