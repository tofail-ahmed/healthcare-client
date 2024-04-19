import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import FileUploader from "@/components/Forms/FileUploader";
import HealthCareModal from "@/components/Shared/HealthCareModal/HealthCareModal";
import { TextField, Grid, Button, Box } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { useCreateSpecialityMutation } from "@/redux/api/specialtiesApi";
import { toast } from 'sonner';
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  const [createSpeccility] = useCreateSpecialityMutation();
  const handleModalForm = async (values: FieldValues) => {
    // console.log(values)

    const data = modifyPayload(values);
    try {
      const res = await createSpeccility(data).unwrap();
      // console.log(res);
      if(res?.id){
        toast.success("Speciality Created Successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
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
