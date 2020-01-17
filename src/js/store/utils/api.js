import axios from "axios";

export default axios.create({
  baseURL: 'https://your-api-endpoint.com:3000',
});
