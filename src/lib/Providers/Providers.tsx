"use client"
import { ThemeProvider } from '@mui/material';
import React, { ReactNode } from 'react';
import { theme } from '../theme/theme';
import { Provider } from "react-redux";
import { store } from "../../redux/store";
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;