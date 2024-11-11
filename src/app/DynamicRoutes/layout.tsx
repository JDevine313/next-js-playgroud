import "./layout.css";

export default function DynamicRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="DynamicRoutesLayout">
      <div>{children}</div>
    </div>
  );
}
