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
import { DrawerItem, UserRole } from "@/types/common";
import {drawerItems} from "@/utils/drawerItems"
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <Box>
      <div>
        <Typography
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Box color="primary.main">
            {" "}
            <GiHospitalCross />
          </Box>
          Health
          <Box component="span" color="primary.main">
            Care
          </Box>
        </Typography>
        <List>
          {drawerItems("admin" as UserRole).map((item, index) => (
        <SidebarItem key={index} index={index} item={item} />
          ))}
        </List>
      </div>
    </Box>
  );
};

export default Sidebar;
