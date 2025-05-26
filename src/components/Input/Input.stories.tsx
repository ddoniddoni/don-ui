// src/stories/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline"],
    },
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search"],
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    hasError: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력하세요...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
    helperText: "실명을 입력해주세요.",
  },
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px",
      }}
    >
      <Input variant="default" placeholder="Default variant" />
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="ghost" placeholder="Ghost variant" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px",
      }}
    >
      <Input inputSize="sm" placeholder="Small size" />
      <Input inputSize="md" placeholder="Medium size" />
      <Input inputSize="lg" placeholder="Large size" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px",
      }}
    >
      <Input
        leftIcon={<SearchIcon />}
        placeholder="검색어를 입력하세요..."
        label="검색"
      />
      <Input
        leftIcon={<UserIcon />}
        placeholder="사용자명을 입력하세요"
        label="사용자명"
      />
      <Input
        type="password"
        rightIcon={<EyeIcon />}
        placeholder="비밀번호를 입력하세요"
        label="비밀번호"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px",
      }}
    >
      <Input placeholder="일반 상태" label="일반" />
      <Input
        placeholder="에러 상태"
        label="에러"
        hasError
        helperText="올바른 이메일 주소를 입력해주세요."
        value="invalid-email"
      />
      <Input placeholder="비활성화 상태" label="비활성화" disabled />
      <Input placeholder="로딩 상태" label="로딩" isLoading />
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        padding: "32px",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
      }}
    >
      <h3
        style={{
          marginBottom: "24px",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        로그인
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Input
          type="email"
          label="이메일"
          placeholder="name@example.com"
          leftIcon={<MailIcon />}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          rightIcon={<EyeIcon />}
        />
        <button
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          로그인
        </button>
      </div>
    </div>
  ),
};
