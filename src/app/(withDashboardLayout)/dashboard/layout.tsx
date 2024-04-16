import DashboardDrawer from '@/components/Dashboard/DashboardDrawer/DashboardDrawer';
import React from 'react';

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <DashboardDrawer>{children}</DashboardDrawer>
  );
};

export default DashboardLayout;