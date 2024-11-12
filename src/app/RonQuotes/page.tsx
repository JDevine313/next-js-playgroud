"use client";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import styles from "./page.module.css";

const RonQuotes = () => {
  const [data, setData] = useState<string>("");
  useEffect(() => {
    axios.get(`/api/ron-quotes`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.RonQuotes}>{data}</div>
    </Suspense>
  );
};
export default RonQuotes;
