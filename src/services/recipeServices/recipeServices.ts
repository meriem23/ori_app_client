import { useQuery } from "react-query";
import axiosInstance from "../../config/axios-instance";

export const useGetRecipes = () =>
  useQuery(
    ["Recipes"],
    async () => {
      let url = "https://esra-app-back.herokuapp.com/api/recipe";

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

// //add
export const addRecipe = (data: any) => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "post",
    url: "https://esra-app-back.herokuapp.com/api/recipe",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  });
};

//delete
export const DeleteRecipe = (id: string) => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "delete",
    url: `https://esra-app-back.herokuapp.com/api/recipe/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
