import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onPress?: () => void;
}

const PermitCustomButton = ({ title, onPress, onClick, className = '', style, ...props }: CustomButtonProps) => {
    return (
        <button
            onClick={onClick || onPress}

            className={`
        bg-[#7ebdff] 
        text-white text-base font-bold
        py-3 px-5 
        rounded-full
        shadow-md
        flex items-center justify-center
        transition-all duration-200 ease-in-out
        hover:bg-[#5c9ce6] 
        hover:scale-[1.01]
        active:scale-95
        ${className} 
      `}
            style={style}
            {...props}
        >
            {title}
        </button>
    );
};

export default PermitCustomButton;
