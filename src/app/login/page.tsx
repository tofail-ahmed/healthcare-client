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
import { toast } from "sonner";
import Link from "next/link";
import { MdOutlineLogin } from "react-icons/md";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { loginUser } from "@/services/actions/loginUser";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/actions/auth.services";
import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";

// export type LoginData = {
//   email: string;
//   password: string;
// };
export const validationSchema = z.object({
  email: z.string().email("Enter your email!"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    try {
      const res = await loginUser(values);
      // console.log(res);
      if (res?.data?.accessToken) {
        storeUserInfo(res?.data?.accessToken);
        toast.success(res?.message);
        router.push("/dashboard");
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
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
          {error && (
            <Typography fontWeight={600} fontSize={20} my={2} color="red">
              {error}
            </Typography>
          )}
          <Box>
            <Form
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <InputField
                    name="email"
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography textAlign="end" component="p" fontWeight={300}>
                <Link style={{color:"black"}}  href="/">
                  Forgot Password?
                </Link>
              </Typography>
              <Button
                fullWidth={true}
                sx={{ margin: "20px 0px" }}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300} color="GrayText">
                Don&apos;t You Have an Account?{" "}
                <Link style={{fontWeight:"bold",color:"blue"}} href="/register">
                  Register
                </Link>
              </Typography>
            </Form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
