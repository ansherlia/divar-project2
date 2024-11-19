import { TailSpin } from "react-loader-spinner";

import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.container}>
      <TailSpin color="#aaa"/>
    </div>
  );
}

//09189990099//
export default Loader;
