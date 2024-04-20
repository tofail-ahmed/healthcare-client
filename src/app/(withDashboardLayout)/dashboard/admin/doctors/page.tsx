"use client";
import { Box, Stack, Button, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { DataGrid,GridColDef } from "@mui/x-data-grid";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from '@/components/Shared/Loader/Loader';


const DoctorsPage = () => {
  const [isModalOpen,setIsModalOpen]=useState<boolean>(false);
  const {data,isLoading}=useGetAllDoctorsQuery({});
  const handleDelete =  async(id: string) => {
    console.log(id)
  
    // try {
    //   const res = await deleteSpeciality(id).unwrap();
    //   // console.log(res)
    //   if (res?.id) {
    //     toast.success("Speciality deleted Successfully!");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex:1 },
    { field: "email", headerName: "Email", flex:1 },
    { field: "qualification", headerName: "Qualifications", flex:1 },
    { field: "apointmentFee", headerName: "Fees", flex:1 },
    
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
  const doctors=data?.doctors;
  console.log(doctors)
  const meta=data?.meta;
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={()=>setIsModalOpen(true)}>Create a Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
        <TextField size="small" placeholder="Search Doctor" />
      </Stack>
      <Box sx={{ mt: 2 }}>
        {!isLoading ? (
          <DataGrid rows={doctors} columns={columns} />
        ) : (
          <Loader/>
        )}
      </Box>
    </Box>
  );
};

export default DoctorsPage;
