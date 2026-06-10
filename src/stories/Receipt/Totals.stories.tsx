import type { Meta, StoryObj } from "@storybook/react-vite";
import Totals from "@/components/Receipt/Totals";

const meta = {
  title: "Receipt/Totals",
  component: Totals,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    total: 12453,
    tip: 0.1,
    subtotal: 12453,
  },
} satisfies Meta<typeof Totals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
