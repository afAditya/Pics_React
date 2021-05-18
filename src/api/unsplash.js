import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID M6AG_0z83ZgKz1OxwQ1BXDp-G0kvHCkTZxjpiBSJBXI",
  },
});
