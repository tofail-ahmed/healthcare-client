import Link from "next/link";
import React from "react";
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
import { DrawerItem } from "@/types/common";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SidebarItem = ({ item, index }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  // console.log(oathName)
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? { borderRight: "3px solid blue", "& svg": { color: "blue" },my:2 }
            : {}),
            
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
