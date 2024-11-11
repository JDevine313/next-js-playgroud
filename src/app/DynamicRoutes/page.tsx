"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

const DynamicRoutes = () => {
  //   fetch user data or after form submission to get the data (username here)

  const [test, setTest] = useState<string | null>(null);
  const [username, setUserName] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTest(username);
    // on form submission auto redirects to dynamic route
    // redirect(`/DynamicRoutes/${username}`);
  };
  return (
    <div className="DynamicRoutes">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
      {/* condiontional rendering for when the dynamic route is set */}
      {test !== null && (
        <Link href={`/DynamicRoutes/${test}`}>
          {/* prefix with parent route and then add dynamic data */}
          <button>Dynamic</button>
        </Link>
      )}
    </div>
  );
};

export default DynamicRoutes;
