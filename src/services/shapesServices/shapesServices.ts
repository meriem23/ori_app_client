import { useQuery } from "react-query";
import axiosInstance from "../../config/axios-instance";

export const useGetIngredients = () =>
  useQuery(
    ["ingredients"],
    async () => {
      let url = "http://localhost:5000/api/ingredient";

      let token = localStorage.getItem("token");
      // console.log(token);
      return axiosInstance({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
        },
      }).then((res: any) => res.data);
    },
    {
      refetchOnWindowFocus: false,
      // enabled: pack || type ? true : false,
    }
  );

//add
export const AddIngredient = (data: any) => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "post",
    url: "http://localhost:5000/api/ingredient",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  });
};

//delete
export const DeleteIngredient = (id: string) => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "delete",
    url: `http://localhost:5000/api/ingredient/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
