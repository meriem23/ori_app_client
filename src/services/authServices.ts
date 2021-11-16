import axiosInstance from "../config/axios-instance";

//login user
export const login = (data: any) => {
  return axiosInstance({
    method: "post",
    url: "http://localhost:5000/api/users/login-user",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  });
};

//get user data
export const getUser = () => {
  let token = localStorage.getItem("token");
  return axiosInstance({
    method: "post",
    url: "http://localhost:5000/api/users/profile",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
