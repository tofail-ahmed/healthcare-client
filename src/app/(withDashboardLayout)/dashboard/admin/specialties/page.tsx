"use client"

import HealthCareModal from '@/components/Shared/HealthCareModal/HealthCareModal';
import { Box, Stack,Button,TextField } from '@mui/material';
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import {
  useGetAllSpecialitiesQuery,
  useDeleteSpecialityMutation,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialitiesQuery({});
  console.log(data)
  const [deleteSpeciality] = useDeleteSpecialityMutation();
  const handleDelete =  async(id: string) => {
    // console.log(id)
  
    try {
      const res = await deleteSpeciality(id).unwrap();
      // console.log(res)
      if (res?.id) {
        toast.success("Speciality deleted Successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "title", headerName: "title", width: 400 },
    {
      field: "icon",
      headerName: "Symbol",
      flex:1,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={row.icon ? row.icon : "/placeholder.png"}
              width={30}
              height={30}
              alt="icon"
            />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex:1,
      headerAlign:"center",
      align:"center",
      renderCell: ({ row }) => {
        return (
          <Box sx={{}}>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
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