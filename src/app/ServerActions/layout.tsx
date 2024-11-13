import "./layout.css";

export default function ServerActionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ServerActionsLayout">
      <div>{children}</div>
    </div>
  );
}
