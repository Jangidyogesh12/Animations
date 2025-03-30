"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider store={store}>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
}
