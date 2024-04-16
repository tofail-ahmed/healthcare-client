import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types/common";
import Dashboard from "@mui/icons-material/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RateReviewIcon from "@mui/icons-material/RateReview";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PaymentsIcon from "@mui/icons-material/Payments";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: SupervisorAccountIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: FolderSpecialIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DateRangeIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: RateReviewIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DateRangeIcon,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DateRangeIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: EditNoteIcon,
        },
        {
          title: "Payment-history",
          path: `${role}/payment-history`,
          icon: PaymentsIcon,
        }
      );
      break;
    default:
      break;
  }
  return [...roleMenus];
};
