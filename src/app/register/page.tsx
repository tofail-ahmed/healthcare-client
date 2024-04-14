"use client";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { toast } from 'sonner';
import logo from "../../../public/assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { storeUserInfo } from "@/services/actions/auth.services";
import { loginUser } from "@/services/actions/loginUser";
import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";



const RegisterPage = () => {
  const router = useRouter();
  
  const handleRegister = async (values:FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        // router.push("/login")

        const result = await loginUser({
          password: values.password,
          email: values.patient.email,
        });
        // console.log(res);
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          // toast.success(result?.message);
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container sx={{}}>
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
            <Form onSubmit={handleRegister}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <InputField
                    label="Name"
                  required={true}
                    size="small"
                    fullWidth={true}
                  name="patient.name"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Email"
                    type="email"
                    required={true}
                    size="small"
                    fullWidth={true}
                 name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Password"
                    type="password"
                    required={true}
                    size="small"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Contact No."
                    type="tel"
                    required={true}
                    size="small"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Address"
                    type="text"
                    required={true}
                    size="small"
                    fullWidth={true}
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth={true}
                sx={{ margin: "10px 0px" }}
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300} color="GrayText">
                Do You Already Have an Account?{" "}
                <Link className="text-blue-600 font-semibold" href="/login">
                  Login
                </Link>
              </Typography>
            </Form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
