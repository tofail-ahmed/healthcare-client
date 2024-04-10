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
import React from "react";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
//   console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 9%, 100% 38%, 100% 100%, 0 76%)", //use clipPath from google
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
      <Container  sx={{
            marginTop:4
      }}>
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid key={doctor.id} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
