import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface Props {

}

const Login: React.FC<Props> = (props) => {

  // const [data, setData] = useState({ email: "", password: "" })
  // const [touched, setTouched] = useState({ email: false, password: false });


  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const nameOfChangedInput = event.target.name
  //   setData({ ...data, [nameOfChangedInput]: event.target.value })
  // }
  // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  //   const nameOfBlurredEmail = event.target.name
  //   setTouched({ ...touched, [nameOfBlurredEmail]: true })
  // }

  // const formValidator = yup.object().shape({
  //   email: yup.string().required().email(),
  //   password: yup.string().required().min(8),
  // });

 
  // const myData = {
  //   age: 10,
  //   firstName: "Su",
  //   lastName: "Yadav"
  // };

  // const nameValidator = yup.object().shape({
  //   firstName: yup.string().required().min(2),
  //   lastName: yup.string().required().min(2),
  //   age:yup.number().required().positive()
  // })

  // console.log("My data Validator",nameValidator.isValidSync(myData))
  

  // let emailError = "";
  // let passwordError = "";

  // if (!data.email) {
  //   emailError = "Email address required*";
  // } else if (!data.email.endsWith("@gmail.com")) {
  //   emailError = "Please enter a valid Email";
  // }

  // if (!data.password) {
  //   passwordError = "Password required*";
  // } else if (data.password.length < 6) {
  //   emailError = "Please enter a valid password";
  // }
  const myForm=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema:yup.object().shape({
      email:yup.string().required("Email chahiye bhai!").email(),
      password:yup.string().required().min(8,({min})=>`Atleast ${min} chars!!!`),
    }),
    onSubmit:(data)=>{
      console.log("Form Submitting",data);
    }
  })



  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-[#101829] w-1/2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://i.pinimg.com/736x/ba/5c/da/ba5cdac1245bfd0cbb3231c17ed9201f.jpg"
          className="mx-auto h-20 w-auto rounded-full border-2 border-amber-50"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="POST" className="space-y-6"
          onSubmit={myForm.handleSubmit}
        >
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onBlur={myForm.handleBlur}
                value={myForm.values.email} //prefilled data
                onChange={myForm.handleChange}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          {myForm.touched.email && <div className="text-sm text-red-600">{myForm.errors.email}</div>}

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onBlur={myForm.handleBlur} 
                value={myForm.values.password} //prefilled data
                onChange={myForm.handleChange}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          {myForm.touched.password && <div className="text-sm text-red-600">{myForm.errors.password}</div>}

          <div>
            <button
              type="submit"

              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </button>

          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?{' '}
          <Link to="/auth/signup" className="font-semibold text-indigo-400 hover:text-indigo-300">
            Start a 14 day free trial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;