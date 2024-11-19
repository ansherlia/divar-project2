import { e2p, sp } from "src/utils/numbers";

import styles from "./Card.module.css";

function Card({ data }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { options } = data;
  return (
    <div className={styles.container}>
      <div>
        <p>{data.options.title}</p>
        <div className={styles.details}>
          {/* <span>{e2p(sp(options.price))} تومان</span> */}
          <p>{options.content}</p>
        </div>
      </div>
      <img src={`${baseURL}${data.images[0]}`} alt="" />
    </div>
  );
}

export default Card;
