import { Suspense, useEffect, useState } from "react";
import "./layout.css";
import Link from "next/link";

export default function HomeRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="homeRoute">
      {/* how to navigate between nested routes with layout acting as context */}
      <nav>
        <ul>
          <Link href="/HomeRoute/BlueBlock">
            <li>
              <button>blue block</button>
            </li>
          </Link>
          <Link href="/HomeRoute/RedBlock">
            <li>
              <button>red block</button>
            </li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
