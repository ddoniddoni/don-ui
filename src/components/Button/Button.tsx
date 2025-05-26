import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, "children" | "onClick">>`
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  border-radius: ${(props) => (props.rounded ? "9999px" : "8px")};

  ${(props) =>
    props.size === "small" &&
    `
    padding: 8px 16px;
    height: 36px;
    font-size: 14px;
  `}

  ${(props) =>
    props.size === "medium" &&
    `
    padding: 10px 20px;
    height: 44px;
    font-size: 16px;
  `}
  
  ${(props) =>
    props.size === "large" &&
    `
    padding: 12px 24px;
    height: 52px;
    font-size: 18px;
  `}
  
  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: #20a766;
    color: white;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover:not(:disabled) {
      background-color: #1dd37b;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
  `}
  
  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: #f3f4f6;
    color: #1f2937;
    border: none;
    
    &:hover:not(:disabled) {
      background-color: #e5e7eb;
    }
  `}
  
  ${(props) =>
    props.variant === "outline" &&
    `
    background-color: transparent;
    color: #20a766;
    border: 2px solid #20a766;
    
    &:hover:not(:disabled) {
      background-color: rgba(0, 112, 243, 0.1);
    }
  `}
  
  ${(props) =>
    props.variant === "ghost" &&
    `
    background-color: transparent;
    color: #20a766;
    border: none;
    
    &:hover:not(:disabled) {
      background-color: rgba(0, 112, 243, 0.1);
    }
  `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
  }

  &:active::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  rounded = false,
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      rounded={rounded}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
