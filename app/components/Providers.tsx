"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
