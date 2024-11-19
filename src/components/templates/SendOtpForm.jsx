import { sendNumberPhone } from "services/auth";
import styles from "./SendOtpForm.module.css";
function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendNumberPhone(mobile);
    if (response) {
      console.log(response.data.message);
    } else {
      console.log(error.response?.data.message);
    }
    setStep(2);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>پروژه دیوار</p>
      <span>ورود به حساب کاربری</span>
      <span>
        برای استفاده از امکانات دیوار شماره موبایل خود را وارد کنید.کد تایید به
        این شماره ارسال خواهدشد.
      </span>
      <label htmlFor="input">شماره موبایل خودرا وارد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد </button>
    </form>
  );
}

export default SendOtpForm;
