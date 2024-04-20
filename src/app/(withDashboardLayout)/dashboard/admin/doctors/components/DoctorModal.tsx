import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import SelectField from "@/components/Forms/SelectField";
import FullScreenModal from "@/components/Shared/HealthCareModal/FullScreenModal";
import { Gender } from "@/types/common";
import { Grid ,Button} from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    // values.doctor.experience = Number(values.doctor.experience);
    // values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    // const data = modifyPayload(values);
    // try {
    //   const res = await createDoctor(data).unwrap();
    //   console.log(res);
    //   if (res?.id) {
    //     toast.success("Doctor created successfully!!!");
    //     setOpen(false);
    //   }
    // } catch (err: any) {
    //   console.error(err);
    // }
  };
  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };
  return (
    <FullScreenModal open={open} setOpen={setOpen} title="Create Doctor">
      <Form onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.name"
              label="Name"
              type="text"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.email"
              label="Email"
              type="email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
             </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
             name="password"
             type="password"
             label="Password"
             fullWidth={true}
             sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.contactNumber"
              label="Contact Number"
              type="tel"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.address"
              label="Address"
              type="text"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.registrationNumber"
              label="Registration Number"
              type="number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <SelectField
              name="doctor.gender"
              label="Gender"
             items={Gender}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.experience"
              label="Experience"
              type="number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.apointmentFee"
              label="Appointment Fee"
              type="number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.qualification"
              label="Qualification"
              type="text"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              type="text"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.designation"
              label="Designation"
              type="text"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </Form>
    </FullScreenModal>
  );
};

export default DoctorModal;
