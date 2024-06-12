"use client";
import React from "react";
import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("@/providers/themeProvider"), { ssr: false });
const ToastProvider = dynamic(() => import("@/providers/toastProvider"), { ssr: false });
import { NextUIProvider } from "@nextui-org/react";

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <NextUIProvider>
        <ToastProvider>
            {children}
        </ToastProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default ThemeClient;
