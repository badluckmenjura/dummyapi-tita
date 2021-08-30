import { axiosInstance } from "../../serviceConf";

export function fetchPost(limit = 10, page = 0, tag) {
  let url = `tag/${tag}/post?limit=${limit}&page=${page}`
  if(!tag) url = `post?limit=${limit}&page=${page}`
  return new Promise((resolve) =>
    axiosInstance.get(url,{})
    .then((response) => {
      resolve(response.data)
    })
  )
}