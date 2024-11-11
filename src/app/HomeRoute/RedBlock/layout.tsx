import { Suspense, useEffect, useState } from "react";
import "./layout.css";

export default function RedBlockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="RedBlockLayout">
      <div>{children}</div>
    </div>
  );
}
