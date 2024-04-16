import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Link from "next/link";
import { GiHospitalCross } from "react-icons/gi";
const Sidebar = () => {
  return (
    <Box>
      <div>
        <Typography variant="h4" component={Link} href="/" fontWeight={600} sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginTop:"5px"  
        }}>
            <GiHospitalCross />
          Health
          <Box component="span" color="primary.main">
            Care
          </Box>
        </Typography>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
     
    </Box>
  );
};

export default Sidebar;
