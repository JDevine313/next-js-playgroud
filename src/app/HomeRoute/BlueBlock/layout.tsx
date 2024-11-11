import { Suspense, useEffect, useState } from "react";
import "./layout.css";

export default function BlueBlockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="BlueBlockLayout">
      <div>{children}</div>
    </div>
  );
}
