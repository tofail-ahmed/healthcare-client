import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine{" "}
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostrics">
            Diagnostrics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGO&apos;s
          </Typography>
        </Stack>
        <Stack direction="row" gap={4} justifyContent="center" py={5}>
          <Box sx={{
            fontSize:"36px",color:"blue"
          }} >
            {" "}
            <FaFacebook />
          </Box>
          <Box  sx={{
            fontSize:"36px",color:"blue"
          }}>
            {" "}
            <FaInstagram />
          </Box>
          <Box  sx={{
            fontSize:"36px",color:"blue"
          }}>
            {" "}
            <BsTwitterX />
          </Box>
          <Box  sx={{
            fontSize:"36px",color:"blue"
          }}>
            {" "}
            <FaLinkedinIn />
          </Box>
        </Stack>
        <Box sx={{
            borderBottom: '1px dashed', // border style and color
            borderColor: 'blue', // border color
        }}></Box>
        <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" py={3}>
          <Typography component="p" color="white">
            &copy; 2024 HealthCare. All rights Reserved.
          </Typography>
          <Typography
            color="white"
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            Health
            <Box component="span" color="primary.main">
              Care
            </Box>
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms and Conditions.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
