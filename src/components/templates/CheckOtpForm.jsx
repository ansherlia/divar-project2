import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkCodeHandler } from "src/services/auth";
import { getCookie, setCookie } from "src/utils/cookie";
import styles from "./CheckOtpForm.module.css";
// this is form for check the otp code and set in the cookie//
function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery({ queryKey: ["getProfile"] });
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkCodeHandler(mobile, code);
    if (response) {
      console.log(response);
      setCookie(response.data);
      setCode("");
      navigate("/");
      refetch();
      console.log(getCookie(accessToken))
    } else {
      console.log(error.data.message);
      // mobile * string;
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره موبایل «{mobile}» را وارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید.</label>
      <input
        type="text"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)} className={styles.backButton}>
        تغییر شماره تلفن
      </button>
    </form>
  );
}

export default CheckOtpForm;
