import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../css/styles.css';
export default function ExpFilter({expfilter,setExpfilter}) {
  const handleInputChange = (event,value) => {
    console.log(value);
    if(value != null) 
    {
        setExpfilter(value.years);
    }
    else
    {
        setExpfilter("");
    }
    
  }
  return (
    <Stack spacing={3} className="filter-boxes">
      <Autocomplete
        id="tags-outlined"
        options={exps}
        getOptionLabel={(option) => option.years}
        onChange={handleInputChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Minimum Experience"
          />
        )}
      />
    </Stack>
  );
}

const exps = [
    {
      "years": 1,
      "id": 1
    },
    {
      "years": 2,
      "id": 2
    },
    {
      "years": 3,
      "id": 3
    },
    {
      "years": 4,
      "id": 4
    },
    {
      "years": 5,
      "id": 5
    },
    {
      "years": 6,
      "id": 6
    },
    {
      "years": 7,
      "id": 7
    },
    {
      "years": 8,
      "id": 8
    },
    {
      "years": 9,
      "id": 9
    },
    {
      "years": 10,
      "id": 10
    }
  ]
  
