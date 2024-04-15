
import {
  Box,
  Typography,
  Container,
  Grid,
  CardActions,
  Button,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

const TopRatedDoctors =  async() => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  //   console.log(doctors);
;
  
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 1%, 100% 15%, 100% 100%, 0 87%)", //use clipPath from google
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons advanced technologies
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18}>
          and top-quality surgery facility right here.
        </Typography>
      </Box>
      <Container>
        <Grid
          sx={{
            justifyContent: "center",
            margin: "30px auto",
          }}
          container
          spacing={4}
        >
          {doctors.map((doctor: any) => (
            <Grid key={doctor.id} md={4}>
              <Card
                
                sx={{
                  margin: "10px 10px",
                 
                }}
              >
                <Box sx={{
                width: '350px',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                }}>
                  <Image
                   
                   src={doctor.profilePhoto}
                   alt="photo"
                   width={350}
                   height={300} 
                 
                   
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" my={1}>
                    Email: {doctor.email}
                  </Typography>
                  <Typography sx={{
                       display: 'flex',
                       
                       alignItems: 'center',
                    }} variant="body2" color="text.secondary">
                    
                      <FaLocationDot /> {doctor.address}
                    
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
           
            textAlign:"center"
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginTop: "30px",
            }}
          >
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
