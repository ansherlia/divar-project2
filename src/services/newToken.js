import { getCookie } from "utils/cookie";
import { api } from "configs/api";
const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (refreshToken) {
    try {
      const response = await api.post("auth/check-refresh-token");
      return { response };
    } catch (error) {
      return { error };
    }
  }
};

export { getNewToken };
