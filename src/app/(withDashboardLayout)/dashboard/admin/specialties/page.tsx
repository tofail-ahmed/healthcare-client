import HealthCareModal from '@/components/Shared/HealthCareModal/HealthCareModal';
import { Box, Stack,Button,TextField } from '@mui/material';


const SpecialtiesPage = () => {
      return (
            <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  {/* <Button>Create Specialities</Button> */}
                  <HealthCareModal></HealthCareModal>
                  <TextField size="small" placeholder="Search Specialities"> Search Specialities</TextField>
                  </Stack> 
            </Box>
      );
};

export default SpecialtiesPage;