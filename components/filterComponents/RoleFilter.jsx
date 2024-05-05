import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../css/styles.css';
export default function RoleFilter({rolefilter,setRolefilter}) {
  const handleInputChange = (event,value) => {
    console.log(value);
    var temp = value.map((role)=>{
      return role.key;
    })
    console.log("temp",temp);
    setRolefilter(temp);
  }
  return (
    <Stack spacing={3} className="filter-boxes">
      <Autocomplete
        multiple
        id="tags-outlined"
        options={jobRoles}
        getOptionLabel={(option) => option.title}
        onChange={handleInputChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Roles"
          />
        )}
      />
    </Stack>
  );
}

const jobRoles = [
    {
      "title": "Frontend Developer",
      "key": "frontend",
      "id": 1
    },
    {
      "title": "iOS Developer",
      "key": "ios",
      "id": 2
    },
    {
      "title": "Android Developer",
      "key": "android",
      "id": 3
    },
    {
      "title": "Tech Lead",
      "key": "tech lead",
      "id": 4
    },
    {
      "title": "Backend Developer",
      "key": "backend",
      "id": 5
    }
  ];
