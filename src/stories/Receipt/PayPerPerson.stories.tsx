import type { Meta, StoryObj } from "@storybook/react-vite";
import PayPerPerson from "@/components/Receipt/PayPerPerson";

const meta = {
  title: "Receipt/PayPerPerson",
  component: PayPerPerson,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    percentages: [10, 90],
    total: 2121421,
  },
} satisfies Meta<typeof PayPerPerson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
