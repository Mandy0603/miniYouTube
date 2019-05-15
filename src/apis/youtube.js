import axios from "axios";

const KEY = "AIzaSyBR9a4_J1pTjoAxKxKwdHR-z3SnP2uuBoM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
