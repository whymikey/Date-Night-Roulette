import React, { memo } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = memo(function Button({
  children,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-white font-black text-lg py-4 rounded-xl shadow-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default Button;
