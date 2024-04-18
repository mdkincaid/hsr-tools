import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, Button, Space, createTheme } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  primaryColor: 'cyan',

})

export const metadata: Metadata = {
  title: "HSR-Tools",
  description: "A set of tools, created by laundry, for use with Honkai Star Rail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <nav color="dark.8" className="flex gap-4">
            <Button component={Link} href="/">Home</Button>
            <Button component={Link} href="/tools/aventurine-calc">Aventurine Calc</Button>
            <Button component={Link} href="/tools/tingyun-calc">Tingyun Calc</Button>
          </nav>
          {children}
          </MantineProvider>
      </body>
    </html>
  );
}
