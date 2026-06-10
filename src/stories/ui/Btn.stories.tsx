import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from 'storybook/test';
import Btn from "@/components/ui/Btn";


const meta = {
    title: 'Ui/Btn',
    component: Btn,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        onClick: fn(),
        children: "Click me",
        isLink: false,
    }
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
export const Secondary: Story = {
    args: {
        isLink: true,
    }
}