import type { Meta, StoryObj } from "@storybook/react-vite";
import ProductList from "@/components/Receipt/ProductList";

const meta = {
  title: "Receipt/ProductList",
  component: ProductList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    products: [{ name: "Product", price: 10, id: 1 }],
  },
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
