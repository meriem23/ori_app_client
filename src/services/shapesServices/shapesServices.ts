import { useQuery } from "react-query";
import axiosInstance from "../../config/axios-instance";

export const useGetShapes = () =>
  useQuery(
    ["Shapes"],
    async () => {
      let url = "http://localhost:5000/api/shape";

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
export const AddShape = (data: any) => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "post",
    url: "http://localhost:5000/api/shape",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  });
};

//delete
export const DeleteShape = (id: string) => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "delete",
    url: `http://localhost:5000/api/shape/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
