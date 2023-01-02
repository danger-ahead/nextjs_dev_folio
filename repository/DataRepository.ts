import { Data } from '../models/Data'
import dataFromJson from '../public/data.json'

export const data: Data = {
    intro: dataFromJson.intro,
    bio: dataFromJson.bio,
    paths: dataFromJson.paths,
}
