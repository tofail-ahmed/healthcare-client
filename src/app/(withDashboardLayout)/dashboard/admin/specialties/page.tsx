"use client"

import HealthCareModal from '@/components/Shared/HealthCareModal/HealthCareModal';
import { Box, Stack,Button,TextField } from '@mui/material';
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import { useGetAllSpecialitiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialitiesQuery({});
  // console.log(data);
  const columns: GridColDef[] = [
    { field: "title", headerName: "title", width: 100 },
    { field: "icon", headerName: "Symbol", width: 100 },
  ];

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
      <Box sx={{ mt: 2 }}>
        {!isLoading ? (
          <DataGrid rows={data} columns={columns} />
        ) : (
          <h1>Loading.............</h1>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;