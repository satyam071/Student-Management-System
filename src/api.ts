import axios from "axios";

// import data from "./data.users.json";
interface LoginData {
  email: string;
  password: string;
}
const BASE_URL = "https://facebook.com/feed";
export const login = (data: LoginData) => {
  console.log(BASE_URL);
    const url = BASE_URL;
  console.log(data);
  axios.post(url,undefined,{params:data}).then(response=>console.log(response));

//   return fetch(BASE_URL, {
//     method: "POST",
//     body: JSON.stringify({
//       username: data.email,
//       password: data.password,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//     console.log(response);
//     return response.json();
//   });
};

//Snake Case (Nomenclature of writing variables)
//thisIsCamleCase
//ThisIsPascalCase
//this_is_snake_case
//THIS_IS_CONSTANT_CASE or THIS_IS_CAPS_SNAKE_CASE
//this-is-kebab-case
