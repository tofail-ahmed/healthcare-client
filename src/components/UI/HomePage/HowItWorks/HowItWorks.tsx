import { Container, Box, Typography,Stack } from "@mui/material";
import howItWorks from "../../../../../public/assets/how-it-works-img.png";
import Image from "next/image";
import searchDctr from "../../../../../public/assets/icons/search-icon.png";
import checkDctr from "../../../../../public/assets/icons/doctor-icon.png";
import schedule from "../../../../../public/assets/icons/appointment-icon.png";
import solution from "../../../../../public/assets/icons/charity-icon.png";
const HowItWorks = () => {
  return (
    <Container
      sx={{
        margin: "80px auto",
      }}
    >
      <Box>
        <Typography component="p" color="primary.main">
          How It Works
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          fontWeight={600}
          sx={{ margin: "1 0px 0px" }}
        >
          4 Easy Steps To Get Your Solution
        </Typography>
        <Typography component="p" sx={{ width: "50%" }} color="GrayText">
          Access to experst physicians and surgeons, advanced techsnologies and
          top quality facilities right here.
        </Typography>
      </Box>
      <Box className="grid grid-cols-2 my-[50px] items-center">
        <Box className="flex justify-center items-center">
          <Image height={400}  src={howItWorks} alt="how it works" />
        </Box>
        <Box>
          <Box>
            <Box className="grid grid-cols-2 gap-[20px] ">
              <Box
                sx={{
                  width: "100%",
                  border: "2px solid  #3b82f6 ",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image width={30} src={searchDctr} alt="logo" />
                <Typography fontWeight={600} fontSize={20} color="primary.main" sx={{ margin: "10px 0px", }}>
                  Search Doctor
                </Typography>
                <Typography color="GrayText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, sunt!
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  border: "2px solid #3b82f6",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image width={30} src={checkDctr} alt="logo" />
                <Typography fontWeight={600} fontSize={20}  color="primary.main" sx={{ margin: "10px 0px", }}>
                 Check Doctor Profile
                </Typography>
                <Typography color="GrayText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, sunt!
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  border: "2px solid #3b82f6",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image width={30} src={schedule} alt="logo" />
                <Typography fontWeight={600} fontSize={20}  color="primary.main" sx={{ margin: "10px 0px", }}>
                  Schedule Appointment
                </Typography>
                <Typography color="GrayText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, sunt!
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  border: "2px solid #3b82f6",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image width={30} src={solution} alt="logo" />
                <Typography fontWeight={600} fontSize={20}  color="primary.main" sx={{ margin: "10px 0px", }}>
                  Get Your Solution
                </Typography>
                <Typography color="GrayText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, sunt!
                </Typography>
              </Box>
              
             
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: "linear-gradient(150deg, #007BFF, #5eead4)",borderRadius:"10px",display:"flex",justifyContent:"space-around",alignItems:"center",padding:"20px"}}>
            <Box>
                  <Typography color="white" fontSize={30} fontWeight={600} >180+</Typography>
                  <Typography color="white" fontSize={10} fontWeight={300} >Expert Doctors</Typography>
            </Box>
            <Box>
                  <Typography color="white" fontSize={30} fontWeight={600} >26+</Typography>
                  <Typography color="white" fontSize={10} fontWeight={300} >Expert Services</Typography>
            </Box>
            <Box>
                  <Typography color="white" fontSize={30} fontWeight={600} >10K+</Typography>
                  <Typography color="white" fontSize={10} fontWeight={300} >Happy Patients</Typography>
            </Box>
            <Box>
                  <Typography color="white" fontSize={30} fontWeight={600} >150+</Typography>
                  <Typography color="white" fontSize={10} fontWeight={300} >Best Award Winners</Typography>
            </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
