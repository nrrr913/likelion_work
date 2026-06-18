import api from "./index";

const postUser = async (userData) => {
  try {
    const response = await api.post("/posts", userData);

    return response.data;
  } catch (error) {
    console.error("유저 생성 API 호출 에러:", error);
    throw error;
  }
};

export default postUser;
