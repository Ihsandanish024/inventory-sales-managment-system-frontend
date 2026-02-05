import React from "react";

type ButtonVariant =
  | "add"
  | "save"
  | "update"
  | "delete"
  | "cancel"
  | "search";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "add",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    add: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-400",
    save: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    update: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400",
    delete: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
    cancel:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    search:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${(disabled || loading) && disabledStyles}
        ${className}
      `}
    >
      {loading ? "Processing..." : children}
    </button>
  );
};

export default Button;
