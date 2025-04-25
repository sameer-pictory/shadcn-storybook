import React from "react";
import "./button.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** What border color to use */
  borderColor?: string;
  /** What text color to use */
  textColor?: string;
  /** What hover background color to use */
  hoverBackgroundColor?: string;
  /** What hover border color to use */
  hoverBorderColor?: string;
  /** What hover text color to use */
  hoverTextColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  borderColor,
  textColor,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverTextColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "pictory-button--primary"
    : "pictory-button--secondary";

  // Create custom style with CSS variables
  const customStyle = {
    backgroundColor,
    borderColor,
    color: textColor,
    // Define the CSS variables for hover states
    "--hover-bg": hoverBackgroundColor,
    "--hover-border": hoverBorderColor,
    "--hover-color": hoverTextColor,
  } as React.CSSProperties;

  return (
    <button
      type="button"
      className={["pictory-button", `pictory-button--${size}`, mode].join(" ")}
      style={customStyle}
      {...props}
    >
      {label}
    </button>
  );
};
