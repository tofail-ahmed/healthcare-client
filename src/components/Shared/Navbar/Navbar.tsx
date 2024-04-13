"use client"
import { Container, Stack, Typography, Box } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

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

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
