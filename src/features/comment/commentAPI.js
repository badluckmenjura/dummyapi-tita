import { axiosInstance } from "../../serviceConf";

export function fetchComents(postId) {
  let url = `post/${postId}/comment?limit=10`
  return new Promise((resolve) =>
    axiosInstance.get(url,{})
    .then((response) => {
      resolve(response.data)
    })
  )
}