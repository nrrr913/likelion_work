const createPost = async (postData) => {
  const api = import.meta.env.VITE_API_URL;
  try {
    const response = await api.post("/posts", postData);
    {
      /*(`${API_KEY}/posts`) */
    }
    return response.data;
  } catch (error) {
    console.error("생성 에러:", error);
    throw error;
  }
};

export default createPost;
