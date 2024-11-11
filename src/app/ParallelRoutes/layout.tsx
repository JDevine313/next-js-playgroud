import Link from "next/link";
import "./layout.css";

export default function ParallelRoutesLayout({
  admin,
  user,
  children,
}: Readonly<{
  admin: React.ReactNode;
  user: React.ReactNode;
  children: React.ReactNode;
}>) {
  // useful for different layouts for different users like admin and public users
  // fetch data here to see if auth if true render admin if false public
  return (
    <div className="ParallelRoutesLayout">
      {/* condidional rendering based on if the user is admin or regular user */}
      {true ? <div>{admin}</div> : <div>{user}</div>}
      {/* pop up models can be handled using the URL  */}
      <Link href={"/ParallelRoutes/model"}>
        <button>open</button>
      </Link>
      {/* this is the pop up model that is inside of @user */}
      <div>{user}</div>
      <div>{children}</div>
    </div>
  );
}
