import React, { type ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary';
    children: string;

}

const Button: React.FC<Props> = ({ className, children, theme, ...rest }) => {
    const themeClasses =
        theme === "primary" ?
            " bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500 text-white "
            : "bg-white hover:bg-white focus-visible:outline-white text-black text-black"
    return (
        <button
            {...rest}

            className={`flex  w-full justify-center rounded-md  px-3 py-1.5 text-sm/6 font-semibold   focus-visible:outline-2 focus-visible:outline-offset-2  ${className} ${themeClasses} `}
        >
            {children}
        </button>

    );
};

export default Button;