import "./layout.css";

export default function RonQuotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="RonQuotesLayout">
      <div>{children}</div>
    </div>
  );
}
