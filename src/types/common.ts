import { USER_ROLE } from "@/constants/role";

export type IMeta={
      page:number;
      limit:number;
      total:number;
}

export type UserRole=keyof typeof USER_ROLE