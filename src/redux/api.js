import axios from "axios";

export const getComments = async () => {
  const url = "http://localhost:3005/comments";
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
