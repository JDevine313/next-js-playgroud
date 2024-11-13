import { Suspense } from "react";

// Server action to fetch data directly from a third-party API or database without having to make an api/route.ts for that call
const getRonQuote = async () => {
  const response = await fetch(
    "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }
  const data = await response.json();
  return data;
};

const ServerActions = async () => {
  let data;
  const fetchQuote = async () => {
    let res = await getRonQuote();
    if (res) {
      data = res[0];
    } else {
      console.log("quote not fetched");
    }
  };
  //   pulling in env var test from .env file
  let envVar = process.env.TEST_VAR || "env var not found";
  console.log(envVar);
  await fetchQuote();
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <p>{data}</p>
      </Suspense>
    </div>
  );
};

export default ServerActions;
