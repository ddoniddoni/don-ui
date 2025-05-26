// src/stories/Badge.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "./Badge";

// 기술 스택별 아이콘들
const ReactIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M12 1a9 9 0 0 1 9 9v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a5 5 0 0 0-5-5 5 5 0 0 0-5 5v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1a9 9 0 0 1 9-9z"></path>
  </svg>
);

const JSIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.11-.403.454-.52.734-.509.292.024.491.156.682.5.297-.19.297-.19.682-.319-.297-.457-.453-.637-.743-.854-.374-.28-.816-.374-1.548-.374-.816 0-1.301.068-1.645.374-.297.259-.297.68-.297 1.079 0 .297.034.595.131.854.297.68.816 1.079 1.548 1.301.297.093.595.156.595.5 0 .297-.131.595-.595.595-.297 0-.595-.093-.816-.297-.131-.093-.297-.297-.374-.5l-.682.297c.131.297.297.595.595.854.297.259.68.374 1.165.374.816 0 1.301-.297 1.645-.68.297-.374.297-.854.297-1.301z"></path>
  </svg>
);

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "gradient"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["rounded", "pill", "square"],
    },
    color: {
      control: "color",
    },
    backgroundColor: {
      control: "color",
    },
    borderColor: {
      control: "color",
    },
    removable: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const SkillTags: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        maxWidth: "500px",
      }}
    >
      <Badge backgroundColor="#61DAFB" color="#000000">
        React
      </Badge>
      <Badge backgroundColor="#F7DF1E" color="#000000">
        JavaScript
      </Badge>
      <Badge backgroundColor="#3178C6" color="#ffffff">
        TypeScript
      </Badge>
      <Badge backgroundColor="#06B6D4" color="#ffffff">
        Tailwind CSS
      </Badge>
      <Badge backgroundColor="#DB7093" color="#ffffff">
        styled-components
      </Badge>
      <Badge backgroundColor="#FF6B6B" color="#ffffff">
        HTML5
      </Badge>
      <Badge backgroundColor="#4FC08D" color="#ffffff">
        Vue.js
      </Badge>
      <Badge backgroundColor="#68217A" color="#ffffff">
        CSS3
      </Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        maxWidth: "400px",
      }}
    >
      <Badge backgroundColor="#61DAFB" color="#000000" icon={<ReactIcon />}>
        React
      </Badge>
      <Badge backgroundColor="#F7DF1E" color="#000000" icon={<JSIcon />}>
        JavaScript
      </Badge>
      <Badge backgroundColor="#3178C6" color="#ffffff" icon={<span>TS</span>}>
        TypeScript
      </Badge>
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
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Badge size="sm" backgroundColor="#61DAFB" color="#000000">
          React
        </Badge>
        <Badge size="md" backgroundColor="#61DAFB" color="#000000">
          React
        </Badge>
        <Badge size="lg" backgroundColor="#61DAFB" color="#000000">
          React
        </Badge>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Badge size="sm" backgroundColor="#3178C6" color="#ffffff">
          TypeScript
        </Badge>
        <Badge size="md" backgroundColor="#3178C6" color="#ffffff">
          TypeScript
        </Badge>
        <Badge size="lg" backgroundColor="#3178C6" color="#ffffff">
          TypeScript
        </Badge>
      </div>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <Badge shape="square" backgroundColor="#61DAFB" color="#000000">
          React
        </Badge>
        <Badge shape="rounded" backgroundColor="#3178C6" color="#ffffff">
          TypeScript
        </Badge>
        <Badge shape="pill" backgroundColor="#F7DF1E" color="#000000">
          JavaScript
        </Badge>
      </div>
    </div>
  ),
};

export const RemovableTags: Story = {
  render: () => {
    const [skills, setSkills] = React.useState([
      { id: 1, name: "React", bg: "#61DAFB", color: "#000000" },
      { id: 2, name: "TypeScript", bg: "#3178C6", color: "#ffffff" },
      { id: 3, name: "JavaScript", bg: "#F7DF1E", color: "#000000" },
      { id: 4, name: "CSS3", bg: "#68217A", color: "#ffffff" },
    ]);

    const removeSkill = (id: number) => {
      setSkills(skills.filter((skill) => skill.id !== id));
    };

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: "400px",
        }}
      >
        {skills.map((skill) => (
          <Badge
            key={skill.id}
            backgroundColor={skill.bg}
            color={skill.color}
            removable
            onRemove={() => removeSkill(skill.id)}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    );
  },
};

export const MySkillSet: Story = {
  render: () => (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#fafafa",
        borderRadius: "12px",
        maxWidth: "600px",
      }}
    >
      <h3
        style={{
          marginBottom: "24px",
          fontSize: "20px",
          fontWeight: "600",
          color: "#1e293b",
        }}
      >
        My Skills
      </h3>

      <div style={{ marginBottom: "20px" }}>
        <h4
          style={{
            marginBottom: "12px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#64748b",
          }}
        >
          Frontend
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Badge backgroundColor="#61DAFB" color="#000000">
            React
          </Badge>
          <Badge backgroundColor="#3178C6" color="#ffffff">
            TypeScript
          </Badge>
          <Badge backgroundColor="#F7DF1E" color="#000000">
            JavaScript
          </Badge>
          <Badge backgroundColor="#06B6D4" color="#ffffff">
            Tailwind CSS
          </Badge>
          <Badge backgroundColor="#DB7093" color="#ffffff">
            styled-components
          </Badge>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h4
          style={{
            marginBottom: "12px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#64748b",
          }}
        >
          Tools & Others
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Badge backgroundColor="#F05032" color="#ffffff">
            Git
          </Badge>
          <Badge backgroundColor="#FF6B6B" color="#ffffff">
            Storybook
          </Badge>
          <Badge backgroundColor="#000000" color="#ffffff">
            Next.js
          </Badge>
          <Badge backgroundColor="#8B5CF6" color="#ffffff">
            Figma
          </Badge>
        </div>
      </div>
    </div>
  ),
};
