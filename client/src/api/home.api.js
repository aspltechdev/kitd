import api from "./axios";

export const getHomeData = () =>
  api.get("/home");