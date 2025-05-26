// src/components/ui/Badge.tsx
import React from "react";
import styled, { css } from "styled-components";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "filled" | "gradient";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "pill" | "square";
  color?: string; // 사용자 커스텀 색상
  backgroundColor?: string; // 사용자 커스텀 배경색
  borderColor?: string; // 사용자 커스텀 테두리색
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  children: React.ReactNode;
}

// 크기별 스타일
const sizeStyles = {
  sm: css`
    height: 20px;
    padding: 2px 8px;
    font-size: 11px;
    line-height: 16px;
    font-weight: 500;
  `,
  md: css`
    height: 24px;
    padding: 4px 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  `,
  lg: css`
    height: 32px;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  `,
};

// 모양별 스타일
const shapeStyles = {
  rounded: css`
    border-radius: 6px;
  `,
  pill: css`
    border-radius: 50px;
  `,
  square: css`
    border-radius: 2px;
  `,
};

// 기본 변형 스타일 (사용자 색상이 없을 때)
const variantStyles = {
  default: css`
    background-color: #f1f5f9;
    color: #475569;
    border: 1px solid #e2e8f0;
  `,
  outline: css`
    background-color: transparent;
    color: #475569;
    border: 1px solid #cbd5e1;
  `,
  filled: css`
    background-color: #3b82f6;
    color: #ffffff;
    border: 1px solid #3b82f6;
  `,
  gradient: css`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    border: none;
  `,
};

const StyledBadge = styled.div<
  BadgeProps & { $hasIcon: boolean; $hasRemove: boolean }
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: inherit;
  transition: all 0.2s ease-in-out;
  cursor: default;
  white-space: nowrap;

  ${({ size = "md" }) => sizeStyles[size]}
  ${({ shape = "pill" }) => shapeStyles[shape]}
  
  /* 사용자 커스텀 색상이 있으면 우선 적용, 없으면 기본 variant 적용 */
  ${({ variant = "default", color, backgroundColor, borderColor }) => {
    if (backgroundColor || color || borderColor) {
      return css`
        background-color: ${backgroundColor || "#f1f5f9"};
        color: ${color || "#475569"};
        border: 1px solid ${borderColor || backgroundColor || "#e2e8f0"};
      `;
    }
    return variantStyles[variant];
  }}
  
  /* 아이콘이 있을 때 패딩 조정 */
  ${({ $hasIcon, size = "md" }) =>
    $hasIcon &&
    css`
      padding-left: ${size === "sm" ? "6px" : size === "md" ? "8px" : "12px"};
    `}
  
  /* 제거 버튼이 있을 때 패딩 조정 */
  ${({ $hasRemove, size = "md" }) =>
    $hasRemove &&
    css`
      padding-right: ${size === "sm" ? "4px" : size === "md" ? "6px" : "8px"};
    `}
  
  /* hover 효과 (removable일 때만) */
  ${({ removable }) =>
    removable &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.8;
        transform: translateY(-1px);
      }
    `}
`;

const IconContainer = styled.div<{ size: "sm" | "md" | "lg" }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          width: 12px;
          height: 12px;
          font-size: 10px;
        `;
      case "lg":
        return css`
          width: 18px;
          height: 18px;
          font-size: 14px;
        `;
      default:
        return css`
          width: 14px;
          height: 14px;
          font-size: 12px;
        `;
    }
  }}
`;

const RemoveButton = styled.button<{ size: "sm" | "md" | "lg" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  color: inherit;
  opacity: 0.7;

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          width: 14px;
          height: 14px;
          font-size: 10px;
        `;
      case "lg":
        return css`
          width: 20px;
          height: 20px;
          font-size: 14px;
        `;
      default:
        return css`
          width: 16px;
          height: 16px;
          font-size: 12px;
        `;
    }
  }}

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      shape = "pill",
      color,
      backgroundColor,
      borderColor,
      icon,
      removable = false,
      onRemove,
      children,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    };

    return (
      <StyledBadge
        ref={ref}
        variant={variant}
        size={size}
        shape={shape}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        removable={removable}
        $hasIcon={!!icon}
        $hasRemove={removable}
        className={className}
        onClick={onClick}
        {...props}
      >
        {icon && <IconContainer size={size}>{icon}</IconContainer>}

        <span>{children}</span>

        {removable && (
          <RemoveButton size={size} onClick={handleRemove}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </RemoveButton>
        )}
      </StyledBadge>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
