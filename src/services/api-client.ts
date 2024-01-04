import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3f0f0f7dccbc43579896269002b7fd6c",
  },
});


