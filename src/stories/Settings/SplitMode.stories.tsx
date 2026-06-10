import type { Meta, StoryObj } from "@storybook/react-vite";
import SplitMode from "@/components/Settings/SplitMode";

const meta = {
  title: "Settings/SplitMode",
  component: SplitMode,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SplitMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
