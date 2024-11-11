"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import styles from "./page.module.css";
import Loading from "./loading";

const RonQuotesModel = () => {
  // use router to help with closing the model
  const router = useRouter();
  const [quote, setQuote] = useState<string>("");

  const handleClose = () => {
    router.back(); // Close the modal and go back to the previous page
  };
  // data fetch
  useEffect(() => {
    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => {
        setQuote(res.data);
      });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.RonQuotes}>{quote}</div>
      <button onClick={handleClose}>Close</button>
    </Suspense>
  );
};

export default RonQuotesModel;
