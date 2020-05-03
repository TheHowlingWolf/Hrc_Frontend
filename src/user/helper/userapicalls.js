import { API } from "../../backend";

export const signup = (user) => {
  console.log(user);
  return fetch(`http://localhost:5000/api/member/registration`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: user,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllMembers = () => {
  return fetch(`http://localhost:5000/api/members`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
