"use client";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import styles from "./page.module.css";
import Loading from "./loading";
import { useRouter } from "next/navigation";

const RonQuotes = () => {
  const router = useRouter();
  const [data, setData] = useState<string>("");
  useEffect(() => {
    axios.get(`/api/ron-quotes`).then((res) => {
      setData(res.data);
    });
  }, []);
  const handleClose = () => {
    router.back();
  };
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>Ron Quotes Modal</h2>
          <p>{data}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </Suspense>
  );
};
export default RonQuotes;
