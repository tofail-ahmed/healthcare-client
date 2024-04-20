"use client";
import { Box, Stack, Button, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { DataGrid,GridColDef } from "@mui/x-data-grid";
import { useGetAllDoctorsQuery ,useDeleteDoctorMutation} from "@/redux/api/doctorApi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from '@/components/Shared/Loader/Loader';
import { useDebounced } from "@/redux/hooks";
import {toast} from "sonner";


const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  const debouncedTerm=useDebounced({
    searchQuery:searchTerm,
    delay:600
  })
  if(!!debouncedTerm){
    query["searchTerm"] = searchTerm;

  }

const [deleteDoctor]=useDeleteDoctorMutation()

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const handleDelete = async (id: string) => {
    // console.log(id);

    try {
      const res = await deleteDoctor(id).unwrap();
      console.log(res)
      if (res?.id) {
        toast.success("Doctor deleted Successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "qualification", headerName: "Qualifications", flex: 1 },
    { field: "apointmentFee", headerName: "Fees", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
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
  const doctors = data?.doctors;
  // console.log(doctors);
  const meta = data?.meta;
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create a Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Doctor"
        />
      </Stack>
      <Box sx={{ mt: 2 }}>
        {!isLoading ? (
          <DataGrid rows={doctors} columns={columns} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default DoctorsPage;
