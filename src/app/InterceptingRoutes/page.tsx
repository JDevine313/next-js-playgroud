import Link from "next/link";

const InterceptingRoutes = () => {
  return (
    <div className="InterceptingRoutes">
      <Link href={"/InterceptingRoutes/RonQuotes"}>
        <button>open model</button>
      </Link>
    </div>
  );
};

export default InterceptingRoutes;
