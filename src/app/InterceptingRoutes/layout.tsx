import Link from "next/link";
import "./layout.css";

export default function InterceptingRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="InterceptingRoutesLayout">
      <div>{children}</div>
    </div>
  );
}
