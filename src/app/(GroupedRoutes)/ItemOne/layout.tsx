import "./layout.css";

export default function ItemOne({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ItemOne">
      <div>{children}</div>
    </div>
  );
}
