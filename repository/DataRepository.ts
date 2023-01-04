import { Data } from "../models/Data";
import dataFromJson from "../public/data.json";

export const data: Data = {
  intro: dataFromJson.intro,
  about: dataFromJson.about,
  picture: dataFromJson.picture,
  tagline: dataFromJson.tagline,
  bio: dataFromJson.bio,
  experience: dataFromJson.experience,
  email: dataFromJson.email,
};
