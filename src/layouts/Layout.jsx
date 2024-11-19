import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";
function Layout({ children }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <React.Fragment>
      <Header navbar={navbar} setNavbar={setNavbar} />
      <div className={styles.layout} onClick={() => setNavbar(false)}>
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
