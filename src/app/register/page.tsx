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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import logo from "../../../public/assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { storeUserInfo } from "@/services/actions/auth.services";
import { loginUser } from "@/services/actions/loginUser";
import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import React, { useState } from "react";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Enter your name!"),
  email: z.string().email("Enter your email address!"),
  contactNumber: z.string().regex(/^\d{11}$/, "Enter your phone number!"),
  address: z.string().min(1, "Enter your address!"),
});
export const validationSchema = z.object({
  password: z.string().min(6, "Password must be 6 character long!"),
  patient: patientValidationSchema,
});
const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};
const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        // router.push("/login")

        const result = await loginUser({
          password: values.password,
          email: values.patient.email,
        });
        console.log(result);
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          // toast.success(result?.message);
          router.push("/");
        }
      } else {
        // setError();
        setError(
          res.message
            ? res.message
            : "User Already exists or something went wrong! try again!"
        );
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
            <Form
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <InputField
                    label="Name"
                    size="small"
                    fullWidth={true}
                    name="patient.name"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Contact No."
                    type="tel"
                    size="small"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    label="Address"
                    type="text"
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
              {error && (
                <Typography component="p" fontWeight={300} color="red">
                  {error}
                </Typography>
              )}
            </Form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
