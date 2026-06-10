import type { Meta, StoryObj } from "@storybook/react-vite";
import EmptyReceipt from "@/components/Receipt/EmptyReceipt";

const meta = {
  title: "Receipt/EmptyReceipt",
  component: EmptyReceipt,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyReceipt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
