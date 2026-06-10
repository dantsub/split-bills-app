import type { Meta, StoryObj } from "@storybook/react-vite";
import PeopleTip from "@/components/Settings/PeopleTip";

const meta = {
  title: "Settings/PeopleTip",
  component: PeopleTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PeopleTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
