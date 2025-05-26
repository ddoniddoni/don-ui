// src/components/ui/Input.tsx
import React from "react";
import styled, { css } from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "ghost" | "outline";
  inputSize?: "sm" | "md" | "lg";
  hasError?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
  label?: string;
}

const sizeStyles = {
  sm: css`
    height: 32px;
    padding: 4px 8px;
    font-size: 12px;
    line-height: 16px;
  `,
  md: css`
    height: 40px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 20px;
  `,
  lg: css`
    height: 48px;
    padding: 12px 16px;
    font-size: 16px;
    line-height: 24px;
  `,
};

const variantStyles = {
  default: css`
    border: 1px solid #20a766;
    background-color: #ffffff;

    &:hover:not(:disabled) {
      border-color: #1dd37b;
    }

    &:focus {
      border-color: #07884a;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `,
  outline: css`
    border: 2px solid #20a766;
    background-color: transparent;

    &:hover:not(:disabled) {
      border-color: #1dd37b;
    }

    &:focus {
      border-color: #07884a;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `,
  ghost: css`
    border: 1px solid transparent;
    background-color: #f8fafc;

    &:hover:not(:disabled) {
      background-color: #f1f5f9;
      border-color: #1dd37b;
    }

    &:focus {
      background-color: #ffffff;
      border-color: #07884a;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `,
};

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input<
  InputProps & { $hasLeftIcon?: boolean; $hasRightIcon?: boolean }
>`
  display: flex;
  width: 100%;
  border-radius: 6px;
  font-family: inherit;
  transition: all 0.2s ease-in-out;

  ${({ inputSize = "md" }) => sizeStyles[inputSize]}
  ${({ variant = "default" }) => variantStyles[variant]}
  
  ${({ $hasLeftIcon, inputSize = "md" }) =>
    $hasLeftIcon &&
    css`
      padding-left: ${inputSize === "sm"
        ? "32px"
        : inputSize === "md"
        ? "40px"
        : "48px"};
    `}
  
  ${({ $hasRightIcon, inputSize = "md" }) =>
    $hasRightIcon &&
    css`
      padding-right: ${inputSize === "sm"
        ? "32px"
        : inputSize === "md"
        ? "40px"
        : "48px"};
    `}
  
  &::placeholder {
    color: #94a3b8;
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f8fafc;
  }

  &:focus {
    outline: none;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #ef4444 !important;

      &:focus {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
      }
    `}

  ${({ isLoading }) =>
    isLoading &&
    css`
      background-image: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      background-size: 200px 100%;
      background-repeat: no-repeat;
      animation: loading 1.5s infinite;

      @keyframes loading {
        0% {
          background-position: -200px 0;
        }
        100% {
          background-position: calc(200px + 100%) 0;
        }
      }
    `}
`;

const IconContainer = styled.div<{
  $position: "left" | "right";
  $inputSize: "sm" | "md" | "lg";
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  pointer-events: none;
  z-index: 1;

  ${({ $position }) => $position}: 12px;

  ${({ $inputSize }) => {
    switch ($inputSize) {
      case "sm":
        return css`
          width: 16px;
          height: 16px;
          font-size: 12px;
        `;
      case "lg":
        return css`
          width: 20px;
          height: 20px;
          font-size: 16px;
        `;
      default:
        return css`
          width: 16px;
          height: 16px;
          font-size: 14px;
        `;
    }
  }}
`;

const Label = styled.label<{ $hasError?: boolean }>`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $hasError }) => ($hasError ? "#ef4444" : "#374151")};
  margin-bottom: 8px;
`;

const HelperText = styled.p<{ $hasError?: boolean }>`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ $hasError }) => ($hasError ? "#ef4444" : "#6b7280")};
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      inputSize = "md",
      hasError = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      helperText,
      label,
      id,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 11)}`;

    return (
      <InputContainer className={className} style={style}>
        {label && (
          <Label htmlFor={inputId} $hasError={hasError}>
            {label}
          </Label>
        )}

        <InputWrapper>
          {leftIcon && (
            <IconContainer $position="left" $inputSize={inputSize}>
              {leftIcon}
            </IconContainer>
          )}

          <StyledInput
            ref={ref}
            id={inputId}
            variant={variant}
            inputSize={inputSize}
            hasError={hasError}
            isLoading={isLoading}
            $hasLeftIcon={!!leftIcon}
            $hasRightIcon={!!rightIcon}
            {...props}
          />

          {rightIcon && (
            <IconContainer $position="right" $inputSize={inputSize}>
              {rightIcon}
            </IconContainer>
          )}
        </InputWrapper>

        {helperText && (
          <HelperText $hasError={hasError}>{helperText}</HelperText>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = "Input";

export { Input };
