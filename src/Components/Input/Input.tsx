import React, { type ButtonHTMLAttributes, type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id?: string
    touched?: boolean;
    error?: string;


}

const Input: React.FC<Props> = ({ touched, error, placeholder, id, className, ...rest }) => {
    console.log(touched, error, placeholder, className)
    return (

        <div>
            {id && placeholder && <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">

            </label>}
            <div className="mt-2">
                <input
                    id={id}
                    placeholder={placeholder}
                    {...rest}
                    className={
                        "block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" + className}
                />


            </div>
            {touched && <div className="text-sm text-red-600">{error}</div>}
        </div>
    );
};

export default Input;