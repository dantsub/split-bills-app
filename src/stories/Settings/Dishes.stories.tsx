import type { Meta, StoryObj } from "@storybook/react-vite";
import Dishes from "@/components/Settings/Dishes";

const meta = {
  title: "Settings/Dishes",
  component: Dishes,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dishes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
