import "./layout.css";

export default function ItemTwo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ItemTwo">
      <div>{children}</div>
    </div>
  );
}
