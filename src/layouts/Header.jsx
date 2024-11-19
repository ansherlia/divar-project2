import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import { IoMdExit } from "react-icons/io";

import { getProfile } from "src/services/userReq";
import { useQuery } from "@tanstack/react-query";
import { IoEnterOutline } from "react-icons/io5";
import { getCookie } from "src/utils/cookie";

function Header({ navbar, setNavbar }) {
  const { refetch, data } = useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
  });
  const navigate = useNavigate();
  const logoutHandler = () => {
    document.cookie = `accessToken=; max-age=0`;
    document.cookie = `refreshToken=; max-age=0`;
    refetch();
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="" className={styles.logo} />
        </Link>
        <span className={styles.location}>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <div className={styles.myDashboard}>
          <div
            onClick={() => {
              setNavbar((navbar) => !navbar);
            }}
            className={navbar ? styles.myDivar : styles.default}
          >
            <img src="profile.svg" className={styles.profile} />
            <p>دیوار من</p>
          </div>
          {navbar ? (
            <>
              <ul className={styles.navbarList}>
                <li>
                  {data.data?.mobile ? (
                    <>
                      <span>
                        <span>
                          <img src="profile.svg" />
                          <p>کاربر دیوار</p>
                        </span>
                        <span>{data.data.mobile}</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <Link to="/auth">
                        <span className={styles.enter}>
                          <IoEnterOutline fontSize="1.1rem" />
                          <p>ورود</p>
                        </span>
                      </Link>
                    </>
                  )}
                </li>
                <li>تایید هویت</li>
                <li>نشان ها</li>
                <li>یادداشت ها </li>

                <li onClick={logoutHandler}>
                  {getCookie("accessToken") ? (
                    <>
                      <span>
                        <IoMdExit />
                      </span>
                      <p>خروج</p>
                    </>
                  ) : (
                    <>
                      <p>مقابله با مزاحمت</p>
                    </>
                  )}
                </li>
              </ul>
            </>
          ) : null}
        </div>
        <Link to="/dashboard">
          <button className={styles.button}> ثبت آگهی</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
