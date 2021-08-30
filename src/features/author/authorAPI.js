import { axiosInstance } from "../../serviceConf";

export function fetchAuthor(userId) {
  let url = `user/${userId}`
  return new Promise((resolve) =>
    axiosInstance.get(url,{})
    .then((response) => {
      resolve(response)
    })
  )
}