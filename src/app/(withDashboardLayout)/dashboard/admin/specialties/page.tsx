"use client"

import HealthCareModal from '@/components/Shared/HealthCareModal/HealthCareModal';
import { Box, Stack,Button,TextField } from '@mui/material';
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import { useGetAllSpecialitiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialitiesQuery({});
  console.log(data);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>
          Create Specialities
        </Button>
        <SpecialistModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></SpecialistModal>
        <TextField size="small" placeholder="Search Specialities">
          {" "}
          Search Specialities
        </TextField>
      </Stack>
      <Box>All Specialists in Details</Box>
    </Box>
  );
};

export default SpecialtiesPage;