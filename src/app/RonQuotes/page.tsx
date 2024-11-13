//only if a client component is needed
// "use client";
// import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import styles from "./page.module.css";

const RonQuotes = async () => {
  // const [data, setData] = useState<string>("");
  // useEffect(() => {
  //   axios.get(`/api/ron-quotes`).then((res) => {
  //     setData(res.data);
  //   });
  // }, []);
  let data = await fetch("/api/ron-quotes");
  let result = await data.json();
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.RonQuotes}>{result}</div>
    </Suspense>
  );
};
export default RonQuotes;
