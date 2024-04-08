import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
const HomePage = () => {
 
  return (
    <div>
      <h1>Home Page</h1>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
     
      <Button >Text</Button>
    </Box>
    </div>
  );
};

export default HomePage;
