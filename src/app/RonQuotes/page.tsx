import axios from "axios";
import { Suspense } from "react";
import Loading from "./loading";
import styles from "./page.module.css";

const RonQuotes = async () => {
  //   let data = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
  //   let quotes = await data.json();
  let data = (
    await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  ).data;
  console.log(data);
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.RonQuotes}>{data}</div>
    </Suspense>
  );
};
export default RonQuotes;
