import HealthCareModal from '@/components/Shared/HealthCareModal/HealthCareModal';
import { TextField } from '@mui/material';
import React from 'react';
type TProps={
      open:boolean;
      setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}
const SpecialistModal = ({open,setOpen}:TProps) => {
      return (
            <HealthCareModal  open={open} setOpen={setOpen} title="Create Specialist">
                  <TextField size="small"/>
            </HealthCareModal>
      );
};

export default SpecialistModal;