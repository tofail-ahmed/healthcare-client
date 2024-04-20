"use client";
import { Box, Stack, Button, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
  const [isModalOpen,setIsModalOpen]=useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={()=>setIsModalOpen(true)}>Create a Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
        <TextField size="small" placeholder="Search Doctor" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
