import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import FileUploader from "@/components/Forms/FileUploader";
import HealthCareModal from "@/components/Shared/HealthCareModal/HealthCareModal";
import { TextField, Grid, Button, Box } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleModalForm = (values: FieldValues) => {};
  return (
    <HealthCareModal open={open} setOpen={setOpen} title="Create Specialist">
      <Form onSubmit={handleModalForm}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <InputField name="title" label="Title"></InputField>
          </Grid>
          <Grid item md={6}>
            <FileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>

        <Button
          sx={{
            mt: 1,
          }}
          type="submit"
        >
          Create
        </Button>
      </Form>
    </HealthCareModal>
  );
};

export default SpecialistModal;
