import { Container, Stack, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  getUSerInfo,
  isLoggedIn,
  removeUser,
} from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
      const router = useRouter();
  const authInfo = getUSerInfo();

  const handleLogout = () => {
    toast.dismiss();
    toast(
      <div>
        <p>Are you sure to Logout?</p>
        {/* <p>Logout will navigate you to Login page!!</p> */}
        <Box
          sx={{
            marginTop: "5px",
          }}
        >
          <Box >
            <Button  size="small" onClick={() => handleLogoutConfirm(true)}>
              Yes
            </Button>
            <Button size="small" onClick={() => handleLogoutConfirm(false)}>
              No
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  const handleLogoutConfirm = (confirmed: boolean) => {
    if (confirmed) {
      removeUser();
      toast.success("Logout successful!");
      router.refresh();
      toast.dismiss();
    } else {
      toast.dismiss();
    }
  };
      return (
            <>
               {authInfo?.userId ? (
          <Button onClick={handleLogout} color="error">
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}    
            </>
      );
};

export default AuthButton;