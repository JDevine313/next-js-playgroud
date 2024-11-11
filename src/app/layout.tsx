import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          {" "}
          <Link href="/HomeRoute">
            <button>Home Router</button>
          </Link>
          <Link href="/RonQuotes">
            <button>Best Quotes</button>
          </Link>
          <Link href="/ItemOne">
            <button>Item One</button>
          </Link>
          <Link href="/ItemTwo">
            <button>Item Two</button>
          </Link>
          <Link href="/DynamicRoutes">
            <button>Dynamic Routes</button>
          </Link>
          <Link href="/ParallelRoutes">
            <button>Parallel Routes</button>
          </Link>
          <Link href="/InterceptingRoutes">
            <button>Intercepting Routes</button>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
