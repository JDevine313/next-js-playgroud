"use client";
import { useRouter } from "next/navigation";

const Model = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    router.push("/InterceptingRoutes/(..)RonQuotes");
  };
  return (
    <div className="Model">
      <button onClick={handleClick}>Open quote</button>
    </div>
  );
};

export default Model;
