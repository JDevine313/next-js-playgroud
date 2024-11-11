import "./layout.css";

export default function SlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="SlugLayout">
      <div>{children}</div>
    </div>
  );
}
