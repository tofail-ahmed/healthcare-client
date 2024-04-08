import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between">
        <Typography variant="h5" component="h1" fontWeight={600}>
          Health{" "}
          <Box component="span" color="primary.main">
            Care
          </Box>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
