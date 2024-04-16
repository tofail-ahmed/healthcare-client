import { Container,Box ,Typography,Button} from '@mui/material';
import Image from 'next/image';
import React from 'react'
import gridBg from '../../../../../public/assets/grid-bg.png'
import arrow from "../../../../../public/assets/arrow.png";
import doctor from "../../../../../public/assets/doctor.jpg";
import doctor1 from "../../../../../public/assets/doctor-ot.jpg";
import doctor2 from "../../../../../public/assets/doctor2.jpg";
import stethoscope from "../../../../../public/assets/stethoscope.png";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "20px",
            left: "10px",
          }}
        >
          <Image src={gridBg} alt="grid" />
        </Box>
        <Typography component="h3" variant="h3" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography component="h3" variant="h3" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          fontWeight={400}
          my={4}
          sx={
            {
              // width: "50%",
            }
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          natus incidunt distinctio doloremque fugit sed tempore accusamus magni
          tempora tenetur?
        </Typography>
        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "5px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            left: "200px",
          }}
        >
          <Image src={arrow} width={120} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box>
            <Image
              style={{
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                borderBottomRightRadius: "9999px",
                marginTop: "16px",
              }}
              width={240}
              height={400}
              src={doctor}
              alt="doctor"
            />
          </Box>
          <Box>
            <Image
              style={{
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                borderBottomRightRadius: "9999px",
                
              }}
              width={240}
              height={300}
              src={doctor1}
              alt="doctor1"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "240px",
          }}
        >
          <Image
            height={200}
            width={200}
            style={{ borderRadius: "0% 50% 50% 50%" }}
            src={doctor2}
            alt="dctr2"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-30px",
            right: "30px",
            zIndex: "-1",
          }}
        >
          <Image height={200} width={200} src={stethoscope} alt="dctr2" />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;