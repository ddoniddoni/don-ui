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

// 스타일드 컴포넌트 정의
const StyledButton = styled.button<Omit<ButtonProps, "children" | "onClick">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  letter-spacing: 0.025em;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border-radius: ${(props) => (props.rounded ? "9999px" : "8px")};
  position: relative;
  overflow: hidden;

  /* 크기 변형 */
  ${(props) =>
    props.size === "small" &&
    `
    padding: 8px 16px;
    font-size: 14px;
    height: 36px;
  `}

  ${(props) =>
    props.size === "medium" &&
    `
    padding: 10px 20px;
    font-size: 16px;
    height: 44px;
  `}
  
  ${(props) =>
    props.size === "large" &&
    `
    padding: 12px 24px;
    font-size: 18px;
    height: 52px;
  `}
  
  /* 스타일 변형 */
  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: #0070f3;
    color: white;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover:not(:disabled) {
      background-color: #005bb5;
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
    color: #0070f3;
    border: 2px solid #0070f3;
    
    &:hover:not(:disabled) {
      background-color: rgba(0, 112, 243, 0.1);
    }
  `}
  
  ${(props) =>
    props.variant === "ghost" &&
    `
    background-color: transparent;
    color: #0070f3;
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
