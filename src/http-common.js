import axios from "axios";

export default axios.create({
  baseURL: "https://reviewbackend.herokuapp.com/api/v1/places",
  headers: {
    "Content-type": "application/json"
  }
});