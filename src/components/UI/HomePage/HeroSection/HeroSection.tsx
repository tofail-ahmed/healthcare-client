import { Container,Box ,Typography,Button} from '@mui/material';
import Image from 'next/image';
import React from 'react'
import gridBg from '../../../../../public/assets/grid-bg.png'
const HeroSection = () => {
  return (
    <Container sx={{
      display:"flex",
      direction:"row",
      my:16
    }}>
      <Box sx={{
            flex:1,
            position:"relative"
      }}>
            <Box sx={{
              position:"absolute",
              width:"700px",
              top:"-30px",
              left:"20px"
            
            }}>
                  <Image src={gridBg} alt="grid" />
            </Box>
            <Typography component="h3" variant="h3" fontWeight={600} >Healthier Hearts</Typography>
            <Typography component="h3" variant="h3" fontWeight={600} >Come From</Typography>
            <Typography component="h3" variant="h3" fontWeight={600} color="primary.main" >Preventive Care</Typography>
            <Typography component="h6" variant="h6" fontWeight={400} sx={{
              width:"50%"
            }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus incidunt distinctio doloremque fugit sed tempore accusamus magni tempora tenetur?</Typography>
            <Button>Make Appointment</Button>
            <Button variant="outlined" sx={{
              marginLeft:"5px"
            }}>Contact Us</Button>
      </Box>
      <Box>Right</Box>
    </Container>
  )
}

export default HeroSection;