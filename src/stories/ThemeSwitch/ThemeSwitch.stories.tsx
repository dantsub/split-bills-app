import type { Meta, StoryObj } from "@storybook/react-vite";
import ThemeSwitch from "@/components/ThemeSwitch";

const meta = {
  title: "ThemeSwitch",
  component: ThemeSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
