import axios from "axios";
// axios.interceptors.request.use((config)=>{
//   const token=localStorage.getItem(LS_LOGIN_TOKEN);
//   if(!token){
//     return config;
//   }
//   return {...config,headers:{...config.headers, Authorization:token}};

// })//nahi smjh aaya 



// key = free_user_3FIsoTTGP5vQ5e68oaWU9ywr0K1;
interface LoginData {
  email: string;
  password: string;
}
const BASE_URL = "https://reqres.in/api";
export const login = (data: LoginData) => {
  const URL = BASE_URL + "/login";
  console.log(data);

  return axios
    .post(URL, data, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "free_user_3FIsoTTGP5vQ5e68oaWU9ywr0K1",
      },
      // params:data,
    })
    .then((response) => {
      console.log(response.data.token);
      localStorage.setItem("login_token", response.data.token);
    });

  // return fetch(URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-api-key": "free_user_3FIsoTTGP5vQ5e68oaWU9ywr0K1",
  //   },
  //   body:JSON.stringify(data)
  // }).then((response) => {
  //   response.json().then((data)=>console.log("Response body",data));
  //   return response;
  // });
};

interface GroupRequest {
  page?: number;
} 
export const fetchGroups = (data?: GroupRequest) => {
  const url = BASE_URL + "/users";
  axios
    .get(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "free_user_3FIsoTTGP5vQ5e68oaWU9ywr0K1",
        },
        params: data 
      }
    )
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
};

//Snake Case (Nomenclature of writing variables)
//thisIsCamleCase
//ThisIsPascalCase
//this_is_snake_case
//THIS_IS_CONSTANT_CASE or THIS_IS_CAPS_SNAKE_CASE
//this-is-kebab-case
