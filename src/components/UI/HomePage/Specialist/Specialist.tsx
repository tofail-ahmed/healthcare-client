import { Container, Box, Typography, Stack,Button } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  const pureSpecialties=specialties.splice(0,3);
//   console.log(pureSpecialties);
//   console.log(specialties);


  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialits
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Explore Treatments Across Specialits
          </Typography>
        </Box>
        <Stack
          direction="row"
          gap={4}
          mt={5}
          // className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[10px]"
        >
          {specialties.map((speciality: any) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "primary.main",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid black",
                },
              }}
            >
              {speciality.icon ? (
                <Image
                  src={speciality.icon}
                  alt="icon"
                  width={100}
                  height={100}
                />
              ) : (
                <div>No icon available</div>
              )}
              <Box>
                <Typography
                  component="p"
                  fontWeight={600}
                  fontSize={18}
                  mt={2}
                  color="white"
                >
                  {speciality.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "30px",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
