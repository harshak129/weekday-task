import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../css/styles.css';
export default function LocationFilter({locFilter,setLocFilter}) {
  const handleInputChange = (event,value) => {
    console.log(value);
    if(value != null) 
    {
        setLocFilter(value.name);
    }
    else
    {
        setLocFilter("");
    }
    
  }
  return (
    <Stack spacing={3} className="filter-boxes">
      <Autocomplete
        id="tags-outlined"
        options={locations}
        getOptionLabel={(option) => option.name}
        onChange={handleInputChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Location"
          />
        )}
      />
    </Stack>
  );
}

const locations = [
    {
      "name": "delhi ncr",
      "id": 1
    },
    {
      "name": "mumbai",
      "id": 2
    },
    {
      "name": "remote",
      "id": 3
    },
    {
      "name": "chennai",
      "id": 4
    },
    {
      "name": "bangalore",
      "id": 5
    }
  ];
