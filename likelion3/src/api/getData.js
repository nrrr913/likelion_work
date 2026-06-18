import api from ".";

export const getData = async (data) => {
  const res = await api.post("/posts", data);
  console.log(res.data);
};
