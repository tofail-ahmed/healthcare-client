import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import { MdOutlineLogin } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}


const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              fontSize={60}
              fontWeight={900}
              sx={{
                color: "primary.main",
              }}
            >
              <MdOutlineLogin />
            </Box>
            <Box>
              <Typography fontWeight={600} fontSize={20} my={2}>
                Patient Login
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid container spacing={2} my={1}>
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
              </Grid>
              <Typography textAlign="end" component="p" fontWeight={300}>
                <Link className="text-black-600" href="/">
                  Forgot Password?
                </Link>
              </Typography>
              <Button fullWidth={true} sx={{ margin: "20px 0px" }}>
                Login
              </Button>
              <Typography component="p" fontWeight={300} color="GrayText">
                Don&apos;t You Have an Account?{" "}
                <Link className="text-blue-600 font-semibold" href="/register">
                  Register
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
