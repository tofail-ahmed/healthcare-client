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
            NGO's
          </Typography>
        </Stack>
        <Stack direction="row" gap={4} justifyContent="center" py={5}>
          <span className="text-4xl text-blue-400">
            {" "}
            <FaFacebook />
          </span>
          <span className="text-4xl text-orange-400">
            {" "}
            <FaInstagram />
          </span>
          <span className="text-3xl text-white">
            {" "}
            <BsTwitterX />
          </span>
          <span className="text-4xl text-sky-400">
            {" "}
            <FaLinkedinIn />
          </span>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
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
