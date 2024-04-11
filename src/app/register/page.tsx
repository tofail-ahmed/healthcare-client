import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import logo from "../../../public/assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container
      sx={{
        padding: "50px",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 2,
            borderRadius: 1,
            padding: "32px",
            textAlign:"center"
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} width={50} alt="logo" />
            </Box>
            <Box>
              <Typography
                fontWeight={600}
                fontSize={20}
                sx={{
                  margin: "20px 0px",
                }}
              >
                Patient Registration
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
            <Grid container spacing={2} my={1}>
              <Grid item md={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Contact No."
                  type="tel"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Address"
                  type="text"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Button fullWidth={true} sx={{ margin: "10px 0px" }}>
              Register
            </Button>
            <Typography   component="p" fontWeight={300}>
              Do You Already Have an Account?{" "}
              <Link className="text-blue-600 font-semibold" href="/login">
                Login
              </Link>
            </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
