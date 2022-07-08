import { backend } from "./config";
import { IMovie } from "../types/IGhibli";

export const getMovie = async () => {
  try {
    const res = await backend.get("/films");

    return res.data as IMovie[];
  } catch (error) {
    console.error(error);
    return;
  }
};
