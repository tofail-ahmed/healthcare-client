"use client"
import { Container, Stack, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  getUSerInfo,
  isLoggedIn,
  removeUser,
} from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();
  const authInfo = getUSerInfo();

  const handleLogout = () => {
    toast.dismiss();
    toast(
      <div>
        <p>Are you sure to Logout?</p>
        <Button onClick={() => handleLogoutConfirm(true)}>Yes</Button>
        <Button onClick={() => handleLogoutConfirm(false)}>No</Button>
      </div>
    );
  };

  const handleLogoutConfirm = (confirmed: boolean) => {
    if (confirmed) {
      removeUser();
      toast.success("Logout successful!");
      router.push("/login");
      toast.dismiss();
    } else {
      toast.dismiss();
    }
  };
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          Health
          <Box component="span" color="primary.main">
            Care
          </Box>
        </Typography>
        <Stack direction="row" gap={2} justifyContent="space-between">
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine{" "}
          </Typography>
          <Typography component={Link} href="/diagnostrics">
            Diagnostrics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGO&apos;s
          </Typography>
        </Stack>
        {authInfo?.userId ? (
          <Button onClick={handleLogout} color="error">
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
