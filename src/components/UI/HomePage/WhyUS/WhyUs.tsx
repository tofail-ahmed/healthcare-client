import { Container, Box, Typography, Grid } from "@mui/material";
import whyUs from "../../../../../public/assets/choose-us.png";
import Image from "next/image";
import { FaAward, FaHandHoldingHeart,FaBookMedical } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5}>
          <Grid item md={6}>
            <Box
              my={2}
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  color="primary.main"
                  fontSize={30}
                >
                  <FaAward />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  Award Winning Service
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia saepe exercitationem debitis placeat sint! Facere
                  voluptatem.
                </Typography>
              </Box>
            </Box>
            <Box
              my={2}
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  color="primary.main"
                  fontSize={30}
                >
                  <FaHandHoldingHeart />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  Bset Quality Pregnancy Care
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia saepe exercitationem debitis placeat sint! Facere
                  voluptatem.
                </Typography>
              </Box>
            </Box>
            <Box
              my={2}
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  color="primary.main"
                  fontSize={30}
                >
                 <FaBookMedical />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  Complete Medical Equipments
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia saepe exercitationem debitis placeat sint! Facere
                  voluptatem.
                </Typography>
              </Box>
            </Box>
            <Box
              my={2}
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  color="primary.main"
                  fontSize={30}
                >
                  <MdWifiCalling3 />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  Dedicated Emergency Care
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia saepe exercitationem debitis placeat sint! Facere
                  voluptatem.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} >
          <Box sx={{
            display:"flex",
            justifyContent:"center",
            margin:"0 auto"
          }}>  <Image src={whyUs} width={400} alt="whyUs" /></Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
